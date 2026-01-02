<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Post;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([

            /* ================= Popular Posts ================= */
            'popularPosts' => fn() =>
            Post::whereIn('category', [
                'CERITA_LUCU',
                'CERITA_MISTERI',
                'CERITA_CINTA',
                'CERITA_ANAK',
                'CERITA_KEHIDUPAN',
            ])
                ->latest()
                ->take(9)
                ->get([
                    'id',
                    'title',
                    'slug',
                    'thumbnail',
                    'created_at',
                    'category',
                ]),

            /* ================= Aside : News Feed ================= */
            'newsPosts' => fn() =>
            Post::latest()
                ->take(5)
                ->get([
                    'id',
                    'title',
                    'slug',
                    'thumbnail',
                    'created_at',
                ]),

            /* ================= Top Posts (SD, SMP, SMA, UMUM) ================= */
            'topPosts' => fn() =>
            Post::whereIn('category', [
                'SD',
                'SMP',
                'SMA',
                'UMUM',
            ])
                ->latest()
                ->take(10)
                ->get([
                    'id',
                    'title',
                    'slug',
                    'thumbnail',
                    'created_at',
                    'category',
                ]),
        ]);
    }
}
