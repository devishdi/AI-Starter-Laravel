<?php

namespace App\Http\Middleware;

use App\Exceptions\AppException;
use App\Services\OtpValidationService;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TokenMiddleware
{
    public function __construct(protected OtpValidationService $otpValidationService) {}

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): RedirectResponse|Response
    {
        $allow = false;

        if ($request->json('app_id') && $request->json('app_secret')) {
            $appId = $request->json('app_id');
            $appSecret = $request->json('app_secret');

            if ($appId === config('paseto.app_id') && $appSecret === config('paseto.app_secret')) {
                $allow = true;
            }
        }

        if ($allow) {
            return $next($request);
        }

        throw new AppException('Invalid Request', Response::HTTP_UNAUTHORIZED);
    }
}
