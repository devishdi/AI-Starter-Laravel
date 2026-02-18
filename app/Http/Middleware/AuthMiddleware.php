<?php

namespace App\Http\Middleware;

use App\Exceptions\AppException;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): RedirectResponse|Response
    {
        $allow = false;

        if ($request->hasHeader('authorization')) {
            $authArray = explode(' ', (string) $request->header('authorization'));

            if (\count($authArray) === 2) {
                if ($authArray[0] === 'Bearer' && ! empty($authArray[1])) {
                    $allow = true;
                }
            }
        }

        if ($allow) {
            return $next($request);
        }

        throw new AppException('Invalid Request', Response::HTTP_UNAUTHORIZED);
    }
}
