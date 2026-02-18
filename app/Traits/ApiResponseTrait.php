<?php

namespace App\Traits;

use App\Exceptions\AppException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response as ResponseMaker;
use Illuminate\Support\MessageBag;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

trait ApiResponseTrait
{
    /**
     * Summary of formatResponse
     *
     * @param  array<mixed>  $data
     * @param  array<mixed>|MessageBag  $errors
     */
    public function formatResponse(array $data, int $status, string $message = '', array|MessageBag $errors = []): JsonResponse
    {
        $statusMessage = 'error';

        if ($status === HttpResponse::HTTP_OK || $status === HttpResponse::HTTP_CREATED) {
            $statusMessage = 'success';
        } elseif ($status === HttpResponse::HTTP_FORBIDDEN || $status === HttpResponse::HTTP_UNAUTHORIZED) {
            $statusMessage = 'denied';
            $message = $message ?: 'Invalid Request';
        } elseif ($status === HttpResponse::HTTP_UNPROCESSABLE_ENTITY) {
            $statusMessage = 'not_valid';
            $message = $message ?: 'Validation failed';
        }

        return ResponseMaker::json([
            'data' => $data,
            'status' => $statusMessage,
            'message' => $message,
            'error' => $errors,
        ], $status);
    }

    public function verifySyId(string $syIdReceived, string $subject): void
    {
        $sysId = md5(config('paseto.sy_id').$subject);

        if ($syIdReceived !== $sysId) {
            throw new AppException('SyId match failed');
        }
    }
}
