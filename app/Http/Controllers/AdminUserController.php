<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\AdminUserCrudRequest;
use App\Http\Requests\Auth\AdminLoginRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Response;

class AdminUserController extends Controller
{
    public function __construct(protected UserService $userService) {}

    public function index(): Response
    {
        return inertia('Admin/AdminHome');
    }

    public function dashboard(Request $request): Response
    {
        return inertia('Admin/AdminDashboard');
    }

    public function login(AdminLoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->route('admin_dashboard')
            ->with('success', sprintf('Welcome back %s', $request->user()?->mmid));
    }

    /**
     * Destroy an authenticated session.
     */
    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('admin_home');
    }

    public function account(?string $uuid = null): Response|RedirectResponse
    {
        $user = null;
        if ($uuid) {
            $user = $this->userService->getUser($uuid);
        }

        if ($user instanceof User && ! $user->isAdmin()) {
            return redirect()->route('admin_account_list')->with(
                'warning',
                'Only admin account can update with this screen!'
            );
        }

        return inertia('Admin/AdminAccount', ['user' => $user]);
    }

    public function accountStore(AdminUserCrudRequest $request, ?string $uuid = null): RedirectResponse
    {
        $message = '';

        if (! $uuid) {
            $user = $this->userService->createUser([
                'customer_name' => $request->customer_name,
                'email' => $request->email,
                'password' => $request->password,
                'mobile' => $request->mobile,
                'role' => CommonHelperService::ROLE_ADMIN,
                'status' => $request->status,
            ]);

            if ($user === null) {
                throw ValidationException::withMessages(['email' => trans('User creation failed')]);
            }

            $message = sprintf('User has been created successfully with MMID %s', $user->mmid);
        } else {
            $user = $this->userService->updateUser($uuid, [
                'customer_name' => $request->customer_name,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'status' => $request->status,
            ]);

            if ($user === null) {
                throw ValidationException::withMessages(['email' => trans('User updation failed')]);
            }

            $message = sprintf('User with MMID %s has been updated successfully', $user->mmid);
        }

        return redirect()->route('admin_account_list')->with('success', $message);
    }

    public function accountDelete(Request $request, string $uuid): RedirectResponse
    {
        $currentUserId = Auth::user()?->uuid;

        if ($currentUserId === $uuid) {
            return redirect()->route('admin_account_list')->with(
                'error',
                'You cant delete yourself!'
            );
        }

        $deleted = $this->userService->deleteUser($uuid);

        if ($deleted) {
            return redirect()->route('admin_account_list')->with(
                'success',
                'The user has been deleted successfully!'
            );
        } else {
            return redirect()->route('admin_account_list')->with(
                'warning',
                'The user cant be deleted. Please check any depedentencies exist!'
            );
        }
    }

    public function accountList(): Response
    {
        return inertia('Admin/AdminAccountList', [
            'users' => $this->userService->getUsers(['2']),
        ]);
    }
}
