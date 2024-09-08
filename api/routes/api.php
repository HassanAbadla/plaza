<?php

use App\Http\Controllers\BrokerController;
use App\Http\Controllers\BusinessExpenseController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OfficeExpenceController;
use App\Http\Controllers\SalaryController;
use App\Http\Controllers\SalesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'loginUser']);

// Properirties
Route::get('/properities', [PropertyController::class, 'index']);
Route::post('properities/add', [PropertyController::class, 'store']);

// Brokers
Route::get('/brokers', [BrokerController::class, 'index']);
Route::post('/brokers/add', [BrokerController::class, 'store']);

// Clients
Route::get('/clients', [CustomerController::class, 'index']);
Route::post('/clients/add', [CustomerController::class, 'store']);

// Employees
Route::get('/employees', [EmployeeController::class, 'index']);
Route::post('/employees/add', [EmployeeController::class, 'store']);

// Bussiness Expenses
Route::get('/BusinessExpenses', [BusinessExpenseController::class, 'index']);
Route::post('/BusinessExpenses/add', [BusinessExpenseController::class, 'store']);

// Sales
Route::get('/sales', [SalesController::class, 'index']);
Route::post('/sales/add', [SalesController::class, 'store']);

// Office Expences
Route::get('/office-expenses', [OfficeExpenceController::class, 'index']);
Route::post('/office-expenses/add', [OfficeExpenceController::class, 'store']);

// Salaries
Route::get('/salaries', [SalaryController::class, 'index']);
Route::post('/salaries/add', [SalaryController::class, 'store']);

