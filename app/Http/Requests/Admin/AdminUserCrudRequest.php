<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class AdminUserCrudRequest extends FormRequest
{
    public function getRedirectUrl(): string
    {
        // Example: Redirect back to an edit page with a specific ID
        if ($this->route('uuid')) {
            return route('admin_account', ['uuid' => $this->route('uuid')]);
        }

        // Fallback to default behavior (redirect back)
        return route('admin_account');
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user() ? Auth::user()->isAdmin() : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [];

        if ($this->route('uuid')) {
            $uuid = $this->route('uuid');

            $rules = [
                'customer_name' => ['required', 'string', 'min:3'],
                'email' => [
                    'required',
                    'string',
                    'email',
                    Rule::unique('users', 'email')->ignore($uuid, 'uuid'),
                ],
                'mobile' => [
                    'required',
                    'digits_between:8,15',
                    Rule::unique('users', 'mobile')->ignore($uuid, 'uuid'),
                ],
            ];

        } else {
            $rules = [
                'customer_name' => ['required', 'string', 'min:3'],
                'email' => ['required', 'string', 'email', 'unique:users,email'],
                'password' => [
                    'required',
                    'string',
                    'confirmed',
                    Password::min(8)->mixedCase()->letters()->numbers()->symbols(),
                ],
                'mobile' => ['required', 'digits_between:8,15', 'unique:users,mobile'],
            ];
        }

        return $rules;
    }
}
