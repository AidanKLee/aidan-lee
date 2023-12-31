<?php

use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\ProfileController;
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

Route::post('/contact', [ContactController::class, 'send'])->name('contact');

Route::middleware('web')->put('/profile', [ProfileController::class, 'update'])->name('profile.update');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

