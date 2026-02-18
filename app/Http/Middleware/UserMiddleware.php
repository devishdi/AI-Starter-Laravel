<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Services\UserService;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserMiddleware
{
    public function __construct(protected UserService $userService) {}

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): RedirectResponse|Response
    {
        $allow = false;

        $uuid = $request->route('uuid');
        $currentUser = Auth::user();

        if ($currentUser !== null) {
            $uuid = $request->route('uuid');

            if (! empty($uuid) && is_string($uuid)) {
                $user = $this->userService->getUser($uuid);
                if ($user instanceof User) {
                    if ($currentUser->isAdmin()) {
                        $allow = true;
                        $redirectAdmin = true;
                    } elseif ($uuid === $currentUser->getUuid()) {
                        $allow = true;
                    }
                }
            } else {
                $allow = true;
            }
        }

        if ($allow) {
            return $next($request);
        }

        if ($currentUser !== null && $currentUser->isAdmin()) {
            return redirect()->route('admin_dashboard');
        } else {
            return redirect()->route('home');
        }
    }
}
