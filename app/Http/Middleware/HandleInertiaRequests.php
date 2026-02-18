<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request)
    {
        return parent::version($request);
    }

    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'version' => parent::version($request),
            'auth' => [
                'user' => $this->formatUserData($request),
            ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
                'warning' => fn () => $request->session()->get('warning'),
            ],
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    private function formatUserData(Request $request): ?array
    {
        $user = $request->user();

        if ($user instanceof User) {
            return [
                'email' => $user->email,
                'uuid' => $user->getUid(),
                'mobile' => $user->mobile,
            ];
        }

        return null;
    }
}
