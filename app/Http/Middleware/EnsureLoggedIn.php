<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureLoggedIn
{
    /**
     * Handle an incoming request.
     *
     * Allow only authenticated users. Do not check route uuid ownership.
     *
     * @param  \Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): RedirectResponse|Response
    {
        $currentUser = Auth::user();

        if ($currentUser !== null) {
            return $next($request);
        }

        return redirect()->route('home');
    }
}
