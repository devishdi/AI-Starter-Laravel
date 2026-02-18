<?php

namespace App\Http\Middleware;

use App\Exceptions\AppException;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiSecureMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): RedirectResponse|Response
    {
        $allow = false;

        if ($request->hasHeader('Accept')) {
            $accept = $request->header('Accept');

            if ($accept === 'application/json') {
                $allow = true;
            }
        }

        if ($allow) {
            return $next($request);
        }

        throw new AppException('Invalid Request', Response::HTTP_UNAUTHORIZED);
    }
}
