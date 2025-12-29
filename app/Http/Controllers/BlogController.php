<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    // Halaman list blog
    public function index()
    {
        $posts = collect(range(1, 10))->map(function ($item) {
            return [
                'id' => $item,
                'slug' => "artikel-$item",
                'title' => "Judul Artikel $item",
                'excerpt' => "Isi singkat artikel $item...",
                'time' => '3 jam lalu',
                'image' => "https://picsum.photos/160/160?random=$item",
            ];
        });

        return Inertia::render('BlogList', [
            'posts' => $posts
        ]);
    }

    // Halaman detail blog
    public function show($slug)
    {
        $post = [
            'slug' => $slug,
            'title' => "Judul untuk $slug",
            'content' => "Konten lengkap artikel $slug...",
            'time' => '3 jam lalu',
            'image' => "https://picsum.photos/600/400?random=" . rand(1, 100),
        ];

        return Inertia::render('DetailCerkak', [
            'post' => $post
        ]);
    }
}
