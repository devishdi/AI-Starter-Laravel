<?php

namespace App\Repositories\Interfaces;

use App\Models\User;
use App\Services\CommonHelperService;

interface UserRepositoryInterface
{
    /**
     * To get single entity
     */
    public function getData(string $id): ?User;

    /**
     * To get users list
     *
     * @param  array<mixed>  $filter
     * @return array<mixed>
     */
    public function getDatas(array $filter): array;

    /**
     * To create new row on database
     *
     * @param  array<string, mixed>  $data
     */
    public function create(array $data): ?User;

    /**
     * To update single row on database
     *
     * @param  array<string, mixed>  $data
     */
    public function update(string $id, array $data): ?User;

    /**
     * Get users by roles
     *
     * @param  string[]  $role
     * @return array<mixed>
     */
    public function getUsersByRole(array $role = [CommonHelperService::ROLE_NORMAL_USER]): array;

    /**
     * To delete an item permanently from database
     */
    public function destroy(string $id): bool;

    /**
     * Destroy model
     */
    public function deleteModel(User $user): bool;
}
