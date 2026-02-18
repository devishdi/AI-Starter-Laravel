<?php

namespace App\Exceptions;

use App\Traits\ApiResponseTrait;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class Handler extends ExceptionHandler
{
    use ApiResponseTrait;

    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e): Response|\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse|\Symfony\Component\HttpFoundation\Response
    {
        if (config('app.env') === 'production') {
            if ($request->expectsJson()) {
                return $this->formatResponse([], $e->getCode() ?: \Symfony\Component\HttpFoundation\Response::HTTP_UNAUTHORIZED, 'Invalid request', ['Cant move forward with this request']);
            }

            $response = parent::render($request, $e);
            $view = 'ErrorPage';
            $statusCode = $response->getStatusCode();

            if ($statusCode === 404) {
                $view = 'NotFound';
            } elseif ($statusCode >= 400 && $statusCode <= 499) {
                $view = 'NotAccess';
            }

            return Inertia::render($view);
        }

        if ($request->expectsJson()) {
            return $this->formatResponse([], $e->getCode() ?: \Symfony\Component\HttpFoundation\Response::HTTP_UNAUTHORIZED, $e->getMessage(), ['Cant move forward with this request']);
        }

        return parent::render($request, $e);
    }
}
