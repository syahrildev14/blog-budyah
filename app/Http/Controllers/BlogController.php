<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function show($slug)
    {
        $post = Post::with(['comments' => function ($query) {
            $query->latest();
        }])->where('slug', $slug)->firstOrFail();

        return Inertia::render('blog/detail', [
            'post' => $post,
        ]);
    }
}
