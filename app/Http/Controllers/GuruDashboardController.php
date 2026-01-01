<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Str;

class GuruDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('guru/dashboard');
    }

    public function category($category)
    {
        $posts = Post::where('category', ucfirst($category))
            ->latest()
            ->get();

        return Inertia::render('guru/category', [
            'category' => ucfirst($category),
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        return Inertia::render('guru/upload');
    }
}
