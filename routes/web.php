<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\PostController;
use Laravel\Fortify\Fortify;


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
Route::get('/sd-mi', function () {
    return Inertia::render('kategori/sd', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('sd-mi');
// ==============================================================
Route::get('/smp-mts', function () {
    return Inertia::render('kategori/smp', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('smp-mts');

// ==============================================================
Route::get('/sma-smk', function () {
    return Inertia::render('kategori/sma', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('sma-smk');

// ==============================================================
Route::get('/umum', function () {
    return Inertia::render('kategori/umum', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('umum');
// ==============================================================
// Detail Cerkak
// ==============================================================
Route::get('/blog/{slug}', function () {
    return Inertia::render('detail-cerkak', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('detail-cerkak');






// Authenticated and verified routes

Route::middleware('auth')->group(function () {
    Route::get('/post/create', [PostController::class, 'create']);
    Route::post('/post', [PostController::class, 'store']);
});
// ==============================================================
// Fortify Auth Views
// ==============================================================
Fortify::registerView(fn() => Inertia::render('auth/register'));
Fortify::loginView(fn() => Inertia::render('auth/login'));


require __DIR__.'/settings.php';
