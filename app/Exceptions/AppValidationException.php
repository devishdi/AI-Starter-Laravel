<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\MessageBag;
use Symfony\Component\HttpFoundation\Response;

final class AppValidationException extends Exception
{
    /**
     * Summary of errorData
     *
     * @var array<string, mixed>
     */
    private array $errorData;

    public function __construct(?MessageBag $errorData = null, ?Exception $previous = null)
    {
        parent::__construct('Validation error', Response::HTTP_UNPROCESSABLE_ENTITY, $previous);
        $this->errorData = $errorData ? $errorData->toArray() : [];
    }

    /**
     * Summary of getErrorData
     *
     * @return array<string, mixed>
     */
    public function getErrorData(): array
    {
        return $this->errorData;
    }

    /**
     * Summary of getErrorData
     *
     * @return array<string, mixed>
     */
    public function formatErrorData(): array
    {
        $result = [];
        foreach ($this->errorData as $key => $value) {
            $firstError = reset($value);
            $result[$key] = $firstError ? (string) $firstError : '';
        }

        return $result;
    }
}
