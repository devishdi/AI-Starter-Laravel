<?php

use App\Http\Controllers\AdminUserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// admin
Route::prefix('admin')->group(function () {
    Route::middleware(['ensure_admin'])->group(function () {
        Route::get('/', [AdminUserController::class, 'index'])->name('admin_home');
    });
    Route::post('/login', [AdminUserController::class, 'login'])->name('admin_login');
    Route::middleware(['admin'])->group(function () {
        // account
        Route::get('/account/{uuid?}', [AdminUserController::class, 'account'])->name('admin_account')
            ->where('uuid', '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
        Route::post('/account/{uuid?}', [AdminUserController::class, 'accountStore'])->name('admin_store')
            ->where('uuid', '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
        Route::delete('/account/delete/{uuid}', [AdminUserController::class, 'accountDelete'])->name('admin_account_delete')
            ->where('uuid', '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
        Route::get('/account/list', [AdminUserController::class, 'accountList'])->name('admin_account_list');
        Route::get('/dashboard', [AdminUserController::class, 'dashboard'])->name('admin_dashboard');
        Route::get('/logout', [AdminUserController::class, 'logout'])->name('admin_logout');
    });
});
