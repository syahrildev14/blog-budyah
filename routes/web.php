<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\PostController;
use Laravel\Fortify\Fortify;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;



// Route Public
Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');
// ==============================================================
Route::get('/materi', function () {
    return Inertia::render('materi', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('materi');
// ==============================================================
Route::get('/cerita-lucu', function () {
    return Inertia::render('cerita-lucu', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('cerita-lucu');
// ==============================================================
Route::get('/cerita-misteri', function () {
    return Inertia::render('cerita-misteri', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('cerita-misteri');
// ==============================================================
Route::get('/cerita-cinta', function () {
    return Inertia::render('cerita-cinta', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('cerita-cinta');
// ==============================================================
Route::get('/cerita-anak', function () {
    return Inertia::render('cerita-anak', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('cerita-anak');
// ==============================================================
Route::get('/cerita-kehidupan', function () {
    return Inertia::render('cerita-kehidupan', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('cerita-kehidupan');
// ==============================================================
Route::get('/cerita-misteri', function () {
    return Inertia::render('cerita-misteri', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('cerita-misteri');
// ==============================================================
// Katgori
// ==============================================================
Route::get('/sd-mi', [PostController::class, 'sd'])
    ->name('sd-mi');

Route::get('/smp-mts', [PostController::class, 'smp'])
    ->name('smp-mts');

Route::get('/sma-smk', [PostController::class, 'sma'])
    ->name('sma-smk');

Route::get('/umum', [PostController::class, 'umum'])
    ->name('umum');


// ==============================================================
// Detail Cerkak
// ==============================================================
Route::get('/cerkak/{slug}', [BlogController::class, 'show'])
    ->name('cerkak.show');
Route::post('/comment', [CommentController::class, 'store']);




// Create Post
Route::middleware('auth')->group(function () {
    Route::get('/post/create', [PostController::class, 'create'])
        ->name('post.create');

    Route::post('/post', [PostController::class, 'store'])
        ->name('post.store');

    Route::get('/kategori/{category}', [PostController::class, 'byCategory']);
    Route::get('/kategori/{category}', [PostController::class, 'show']);
});


// ==============================================================
// Auth Login/Register
// ==============================================================
Fortify::registerView(fn() => Inertia::render('auth/register'));
Fortify::loginView(fn() => Inertia::render('auth/login'));


// Dashboard Guru
Route::middleware(['auth'])->prefix('guru')->group(function () {

    Route::get('/dashboard', [\App\Http\Controllers\GuruDashboardController::class, 'index'])
        ->name('guru.dashboard');

    Route::get('/cerita/{category}', [\App\Http\Controllers\GuruDashboardController::class, 'category'])
        ->name('guru.category');

    Route::get('/upload', [\App\Http\Controllers\GuruDashboardController::class, 'create'])
        ->name('guru.upload');
});


require __DIR__ . '/settings.php';
