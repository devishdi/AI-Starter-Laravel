<?php

namespace App\Validations;

use App\Exceptions\AppValidationException;
use App\Services\OptionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginFormValidation
{
    public function __construct(
        protected OptionService $optionService
    ) {}

    public function valid(Request $request): void
    {
        $validator = Validator::make($request->all(), $this->getAppRules((string) $request->input('username')), $this->getAppMessages());
        if ($validator->fails()) {
            throw new AppValidationException($validator->errors());
        }
    }

    /**
     * @return array<string, mixed>
     */
    public function getAppRules(string $userName): array
    {
        $type = 'mmid';

        if (ctype_digit($userName)) {
            $type = 'mobile';
        }

        return [
            'username' => [
                'required',
                "exists:users,{$type}",
            ],
            'password' => [
                'required',
            ],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function getAppMessages(): array
    {
        return [
            'username.required' => 'Please enter your marry Id / mobile!',
            'username.exists' => 'Invalid marry Id / mobile!',
        ];
    }
}
