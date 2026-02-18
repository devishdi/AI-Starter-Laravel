<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Exceptions\AppValidationException;
use App\Http\Requests\ProfileBaseUpdateRequest;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegistrationRequest;
use App\Models\User;
use App\Services\AuthTokenService;
use App\Services\CommonHelperService;
use App\Services\OtpValidationService;
use App\Services\PartnerService;
use App\Services\ProfileActivityService;
use App\Services\UserService;
use App\Traits\ApiResponseTrait;
use App\Validations\LoginFormValidation;
use App\Validations\RegistrationFormValidation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\MessageBag;
use Illuminate\Validation\ValidationException;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Throwable;

class UserController extends Controller
{
    use ApiResponseTrait;

    public function __construct(
        protected UserService $userService,
        protected AuthTokenService $authTokenService,
        protected OtpValidationService $otpValidationService,
        protected RegistrationFormValidation $registrationFormValidation,
        protected LoginFormValidation $loginFormValidation,
        protected ProfileActivityService $profileActivityService,
        protected PartnerService $partnerService
    ) {}

    public function dashboard(): Response
    {
        $likes = $this->profileActivityService->getDatasByUser(CommonHelperService::ACTIVITY_LIKE, null, CommonHelperService::REQUEST_RECEIVE, false, 8);
        $views = $this->profileActivityService->getDatasByUser(CommonHelperService::ACTIVITY_VIEW, null, CommonHelperService::REQUEST_RECEIVE, false, 8);
        $interests = $this->profileActivityService->getDatasByUser(CommonHelperService::ACTIVITY_INTEREST, null, CommonHelperService::REQUEST_RECEIVE, false, 8);

        return inertia('User/UserDashboard', [
            'likes' => $likes,
            'views' => $views,
            'interests' => $interests,
        ]);
    }

    public function upateStore(ProfileBaseUpdateRequest $request, ?string $uuid = null): RedirectResponse
    {
        if (Auth::user()?->isAdmin() && $uuid === null) {
            return redirect()->route('admin_profile_list')->with('error', 'Updation Failed: Invalid User');
        }

        $userId = $this->userService->getUidfromRequest($uuid);

        $user = $this->userService->updateUser((string) $userId, [
            'email' => $request->email,
            'mobile' => $request->mobile,
            'status' => $request->status,
        ]);

        if ($user === null) {
            throw ValidationException::withMessages(['email' => trans('Updation failed')]);
        }

        return redirect()->back()->with('success', 'Profile has been updated successfully');
    }

    public function registration(UserRegistrationRequest $request, string $otp): RedirectResponse
    {
        try {
            $this->otpValidationService->verifyOTP($request->mobile, $otp);

            $user = $this->userService->handleRegistration($request);
            Auth::login($user, true);

            return redirect()->route('user_dashboard')
                ->with('success', sprintf('Welcome %s', $user->customer_name));
        } catch (Throwable $e) {
            report($e);

            return redirect()->route('home');
        }
    }

    public function registrationOtp(Request $request): JsonResponse
    {
        try {
            $this->authTokenService->verifyToken($request);
            $this->registrationFormValidation->valid($request);

            $data = [];
            $message = 'OTP send successfully';

            $otp = $this->otpValidationService->sendOTP(
                $request->json('mobile'),
                $request->json('customer_name'),
                'registration',
                $request->json('email'),
            );
            $data = ['otp' => $otp];

            return $this->formatResponse($data, HttpResponse::HTTP_OK, $message);
        } catch (AppException $e) {
            report($e);

            return $this->formatResponse([], $e->getCode(), 'Invalid request');
        } catch (AppValidationException $e) {
            return $this->formatResponse([], $e->getCode(), $e->getMessage(), $e->formatErrorData());
        } catch (Throwable $e) {
            report($e);

            return $this->formatResponse([], HttpResponse::HTTP_FORBIDDEN, 'Error occured');
        }
    }

    public function login(UserLoginRequest $request, string $otp): RedirectResponse
    {
        try {
            $user = $this->userService->checkUserCanLogin($request->input('username'), $request->input('password'));

            if ($user instanceof User) {
                $this->otpValidationService->verifyOTP($user->mobile, $otp);
                Auth::login($user, true);
                $this->partnerService->setPartnerChoices($user);

                return redirect()->route('user_dashboard')
                    ->with('success', sprintf('Welcome back %s', $user->customer_name));
            } else {
                return redirect()->route('home');
            }
        } catch (Throwable $e) {
            report($e);

            return redirect()->route('home');
        }
    }

    public function loginOtp(Request $request): JsonResponse
    {
        try {
            $this->authTokenService->verifyToken($request);
            $this->loginFormValidation->valid($request);
            $user = $this->userService->checkUserCanLogin($request->json('username'), $request->json('password'));

            if ($user === null) {
                $messageBag = new MessageBag;
                $messageBag->add('username', 'Invalid marry Id / mobile or password!');
                throw new AppValidationException($messageBag);
            }

            $data = [];
            $message = 'OTP send successfully';

            $otp = $this->otpValidationService->sendOTP(
                $user->mobile,
                (string) $user->customer_name,
                'login',
                $user->email
            );
            $data = ['otp' => $otp];

            return $this->formatResponse($data, HttpResponse::HTTP_OK, $message);
        } catch (AppException $e) {
            report($e);

            return $this->formatResponse([], $e->getCode(), 'Invalid request');
        } catch (AppValidationException $e) {
            return $this->formatResponse([], $e->getCode(), $e->getMessage(), $e->formatErrorData());
        } catch (Throwable $e) {
            report($e);

            return $this->formatResponse([], HttpResponse::HTTP_FORBIDDEN, 'Error occured');
        }
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('home');
    }
}
