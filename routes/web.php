<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\GuruDashboardController;
use App\Models\Post;


// Public Routes
Route::get('/', function () {
    return Inertia::render('welcome', [
        'popularPosts' => Post::latest()->take(5)->get(),
        'topPosts' => Post::latest()->take(10)->get(),
    ]);
})->name('home');
Route::get('/materi', fn() => Inertia::render('materi'))->name('materi');
Route::get('/tentang', fn() => Inertia::render('tentang'))->name('tentang');
Route::get('/cerita-lucu', [PostController::class, 'ceritaLucu'])
    ->name('cerita-lucu');
Route::get('/cerita-misteri', [PostController::class, 'ceritaMisteri'])
    ->name('cerita-misteri');
Route::get('/cerita-cinta', [PostController::class, 'ceritaCinta'])
    ->name('cerita-cinta');
Route::get('/cerita-anak', [PostController::class, 'ceritaAnak'])
    ->name('cerita-anak');
Route::get('/cerita-kehidupan', [PostController::class, 'ceritaKehidupan'])
    ->name('cerita-kehidupan');


// Siswa Public / Kategori
Route::get('/sd-mi', [PostController::class, 'sd'])->name('sd-mi');
Route::get('/smp-mts', [PostController::class, 'smp'])->name('smp-mts');
Route::get('/sma-smk', [PostController::class, 'sma'])->name('sma-smk');
Route::get('/umum', [PostController::class, 'umum'])->name('umum');

// Login Guru (halaman terpisah, tanpa tombol signup)
Route::get('/admin/login', fn() => Inertia::render('auth/admin-login'))
    ->middleware('guest')
    ->name('admin.login');

// Detail Cerkak
Route::get('/cerkak/{slug}', [BlogController::class, 'show'])->name('cerkak.show');
Route::post('/comment', [CommentController::class, 'store'])
    ->middleware('throttle:6,1')
    ->name('comment.store');

// Protected Routes (Siswa / Auth)
Route::middleware('auth')->group(function () {
    Route::get('/post/create', [PostController::class, 'create'])->name('post.create');
    Route::post('/post', [PostController::class, 'store'])->name('post.store');
    Route::post('/upload-image', [PostController::class, 'uploadImage'])->name('post.upload-image');
});

// =====================================================
// Dashboard Guru
// =====================================================
Route::prefix('guru')->name('guru.')->middleware(['auth', 'guru'])->group(function () {
    // =======================
    // DASHBOARD
    // =======================
    Route::get('/dashboard', [GuruDashboardController::class, 'index'])
        ->name('dashboard');
    // =======================
    // HALAMAN CERITA (GET)
    // =======================
    Route::get('/cerita-lucu', [GuruDashboardController::class, 'CeritaLucu'])
        ->name('cerita-lucu');

    Route::get('/cerita-misteri', [GuruDashboardController::class, 'CeritaMisteri'])
        ->name('cerita-misteri');

    Route::get('/cerita-cinta', [GuruDashboardController::class, 'CeritaCinta'])
        ->name('cerita-cinta');

    Route::get('/cerita-anak', [GuruDashboardController::class, 'CeritaAnak'])
        ->name('cerita-anak');

    Route::get('/cerita-kehidupan', [GuruDashboardController::class, 'CeritaKehidupan'])
        ->name('cerita-kehidupan');

    // =======================
    // AKSI DATA (POST / DELETE)
    // =======================

    // SIMPAN DATA (form tambah)
    Route::post('/kategori', [GuruDashboardController::class, 'store'])
        ->name('kategori.store');

    // HAPUS DATA
    Route::delete('/kategori/{id}', [GuruDashboardController::class, 'destroy'])
        ->name('kategori.destroy');

    // EDIT DATA
    Route::put('/kategori/{id}', [PostController::class, 'update']);

    // =======================
    // HALAMAN KATEGORI JENJANG
    // =======================
    Route::prefix('kategori')->name('kategori.')->group(function () {
        Route::get('/sd', [GuruDashboardController::class, 'SD'])->name('sd');
        Route::get('/smp', [GuruDashboardController::class, 'SMP'])->name('smp');
        Route::get('/sma', [GuruDashboardController::class, 'SMA'])->name('sma');
        Route::get('/umum', [GuruDashboardController::class, 'Umum'])->name('umum');
    });
});



require __DIR__ . '/settings.php';
