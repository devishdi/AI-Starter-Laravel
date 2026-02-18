<?php

namespace App\Services;

use App\Exceptions\AppException;
use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
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

    public function getLoggedInUserProfile(): User
    {
        $uuid = Auth::user()?->getUuid();
        $user = null;
        if ($uuid) {
            $user = $this->getUserProfile($uuid);
        }

        if ($user === null) {
            throw new AppException("Invalid User UUID: $uuid");
        }

        return $user;
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

    public function getUserProfile(string $uuid): ?User
    {
        return $this->userRepository->getProfile($uuid);
    }

    public function getProfileFromRequest(?string $uuid = null): ?User
    {
        if (! $uuid) {
            $uuid = $this->getUuidfromRequest();
        }

        return $this->userRepository->getProfile($uuid);
    }

    public function getUidfromRequest(?string $uuid = null): string
    {
        $userId = Auth::user()?->getUid();
        if (Auth::user()?->isAdmin() && $uuid) {
            $user = $this->userRepository->getData($uuid);

            if ($user instanceof User) {
                $userId = $user->getUid();
            } else {
                throw new AppException('Trying to access invalid user profile');
            }
        }

        if (! $userId) {
            throw new AppException('Trying to access invalid user profile');
        }

        return $userId;
    }

    public function getUuidfromRequest(): string
    {
        $uuid = Auth::user()?->getUuid();
        if (! $uuid) {
            throw new AppException('Trying to access invalid user profile');
        }

        return $uuid;
    }

    public function checkUserCanLogin(string $userName, string $password): ?User
    {
        $type = 'mmid';

        if (ctype_digit($userName)) {
            $type = 'mobile';
        }

        $user = $this->userRepository->getDataByType($userName, $type);

        if ($user instanceof User && Hash::check($password, $user->password)) {
            return $user;
        }

        return null;
    }

    /**
     * @param  array<mixed>  $filter
     * @return array<mixed>
     */
    public function getDatas(array $filter): array
    {
        return $this->userRepository->getDatas($filter);
    }

    public function getUserByProfileId(string $mmid): ?User
    {
        return $this->userRepository->getDataByMmid($mmid);
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

    private function gererateProfileId(string $caste): string
    {
        $mmid = $this->randomGenerator->generateMmid($caste);
        $user = $this->getUserByProfileId($mmid);

        if ($user instanceof User) {
            return $this->gererateProfileId($caste);
        }

        return $mmid;
    }

    public function forceDelete(User $user): bool
    {
        return $this->userRepository->deleteModel($user);
    }

    /**
     * Get users for select/dropdown (id, mmid, customer_name).
     *
     * @param  string[]  $role
     * @return array<array{id: int, mmid: string, customer_name: string}>
     */
    public function getUsersForSelect(array $role = [CommonHelperService::ROLE_NORMAL_USER, CommonHelperService::ROLE_PREMIUM]): array
    {
        return $this->userRepository->getUsersForSelect($role);
    }
}
