<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * Seeds posts across every category with real thumbnail files copied into
 * storage/app/public/posts, mirroring the upload flow, plus a few posts
 * with a broken/missing thumbnail path so the "thumbnail tidak muncul"
 * issue can be reproduced and checked (storage symlink, onError fallback).
 */
class PostSeeder extends Seeder
{
    private const CATEGORIES = [
        'SD',
        'SMP',
        'SMA',
        'Umum',
        'CERITA_LUCU',
        'CERITA_MISTERI',
        'CERITA_CINTA',
        'CERITA_ANAK',
        'CERITA_KEHIDUPAN',
    ];

    private const SOURCE_IMAGES = [
        '1hero.jfif',
        '2hero.jfif',
        '3hero.jfif',
        '4hero.jfif',
        '5hero.jfif',
        'budyah.png',
    ];

    public function run(): void
    {
        $assetsPath = resource_path('js/assets');
        $imageIndex = 0;

        foreach (self::CATEGORIES as $category) {
            foreach (range(1, 2) as $i) {
                $imageIndex++;

                Post::create([
                    'title' => "Cerkak {$category} Seeder #{$i}",
                    'category' => $category,
                    'content' => '<p>Iki conto konten cerkak kanggo keperluan testing thumbnail. Lorem ipsum ing basa Jawa amargi mung kanggo seeder.</p>',
                    'thumbnail' => $this->seedThumbnail($assetsPath, $imageIndex),
                ]);
            }
        }

        // Deliberately broken thumbnails, to reproduce "thumbnail tidak
        // muncul" in production: a path pointing at a file that was never
        // actually stored, and a post with no thumbnail at all.
        Post::create([
            'title' => 'Cerkak Thumbnail Hilang (File Tidak Ada)',
            'category' => 'Umum',
            'content' => '<p>Post ini sengaja punya path thumbnail yang filenya tidak pernah disimpan, untuk mengetes fallback gambar.</p>',
            'thumbnail' => 'posts/file-yang-tidak-pernah-ada.jpg',
        ]);

        Post::create([
            'title' => 'Cerkak Tanpa Thumbnail',
            'category' => 'Umum',
            'content' => '<p>Post ini sengaja tidak punya thumbnail sama sekali (null).</p>',
            'thumbnail' => null,
        ]);
    }

    private function seedThumbnail(string $assetsPath, int $index): string
    {
        $source = self::SOURCE_IMAGES[$index % count(self::SOURCE_IMAGES)];
        $sourcePath = $assetsPath . DIRECTORY_SEPARATOR . $source;
        $extension = pathinfo($source, PATHINFO_EXTENSION);
        $filename = 'posts/' . Str::random(20) . '.' . $extension;

        Storage::disk('public')->put($filename, file_get_contents($sourcePath));

        return $filename;
    }
}
