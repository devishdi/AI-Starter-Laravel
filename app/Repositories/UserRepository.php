<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Services\CommonHelperService;
use Exception;
use Throwable;

class UserRepository implements UserRepositoryInterface
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function create(array $data): ?User
    {
        try {
            return User::create($data);
        } catch (Throwable $e) {
            report($e);

            return null;
        }
    }

    /**
     * @param  array<string, string>  $data
     */
    public function update(string $id, array $data): ?User
    {
        try {
            $user = $this->getData($id);

            if ($user instanceof User) {
                $user->update($data);
                $user->save();
            } else {
                throw new Exception('User not exist in the database');
            }

            return $user;
        } catch (Throwable $e) {
            report($e);

            return null;
        }
    }

    public function destroy(string $id): bool
    {
        try {
            $user = $this->getData($id);

            if ($user instanceof User) {
                $deleted = $user->delete();

                if (! $deleted) {
                    throw new Exception('User deletion failed');
                }
            } else {
                throw new Exception('User not exist in the database');
            }

            return $deleted;
        } catch (Throwable $e) {
            report($e);

            return false;
        }
    }

    public function getData(string $id): ?User
    {
        try {
            return User::where('uuid', $id)->first();
        } catch (Throwable $e) {
            report($e);

            return null;
        }
    }

    /**
     * @return array<mixed>
     */
    public function getDatas(array $filter): array
    {
        try {
            $query = User::latest();
            if (isset($filter['type'])) {
                $query->where('type', $filter['type']);
            }

            $result = $query->paginate(CommonHelperService::ADMIN_PAGER_SIZE);
            $records = $result->toArray();

            if ($result->total() > CommonHelperService::ADMIN_PAGER_SIZE) {
                $records['pagination'] = true;
            }

            return $records;
        } catch (Throwable $e) {
            report($e);

            return [];
        }
    }

    public function delete(string $id): bool
    {
        return false;
    }

    public function getUsersByRole(array $role = [CommonHelperService::ROLE_NORMAL_USER]): array
    {
        try {
            $result = User::whereIn('role', $role)->paginate(CommonHelperService::ADMIN_PAGER_SIZE);
            $records = $result->toArray();

            if ($result->total() > CommonHelperService::ADMIN_PAGER_SIZE) {
                $records['pagination'] = true;
            }

            return $records;
        } catch (Throwable $e) {
            report($e);

            return [];
        }
    }

    public function deleteModel(User $user): bool
    {
        try {
            $deleted = $user->delete();

            return $deleted ?? false;
        } catch (Throwable $e) {
            report($e);

            return false;
        }
    }
}
