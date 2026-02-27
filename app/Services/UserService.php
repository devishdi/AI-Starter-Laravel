<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Throwable;

class UserService
{
    public function __construct(
        private UserRepositoryInterface $userRepository
    ) {}

    /**
     * @param  array<string, mixed>  $data
     */
    public function createUser(array $data): ?User
    {
        $user = null;
        try {
            $data['uuid'] = $this->generateUuid();
            $data['password'] = Hash::make($data['password']);
            $data['status'] = $data['status'] ? '1' : '0';
            $user = $this->userRepository->create($data);

            if ($user === null) {
                throw new Exception('User creation failed');
            }

            event(new Registered($user));
        } catch (Throwable $e) {
            report($e);

            return $user;
        }

        return $user;
    }

    /**
     * @param  array<string, string>  $data
     */
    public function updateUser(string $uuid, array $data): ?User
    {
        if (! empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }

        return $this->userRepository->update($uuid, $data);
    }

    public function deleteUser(string $uuid): bool
    {
        return $this->userRepository->destroy($uuid);
    }

    public function getUser(string $uuid): ?User
    {
        return $this->userRepository->getData($uuid);
    }

    /**
     * @param  string[]  $role
     * @return array<mixed>
     */
    public function getUsers(array $role = ['2']): array
    {
        $result = $this->userRepository->getUsersByRole($role);

        return $result;
    }

    public function forceDelete(User $user): bool
    {
        return $this->userRepository->deleteModel($user);
    }

    private function generateUuid(): string
    {
        $uuid = Str::uuid7()->toString();

        $user = $this->userRepository->getData($uuid);

        if ($user instanceof User) {
            return $this->generateUuid();
        }

        return $uuid;
    }
}
