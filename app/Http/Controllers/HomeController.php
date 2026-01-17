<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $popularPosts = Post::orderBy('views', 'desc')->limit(6)->get();
        $topPosts = Post::latest()->limit(10)->get();

        return Inertia::render('Home', [
            'popularPosts' => $popularPosts,
            'topPosts' => $topPosts,
        ]);
    }
}
