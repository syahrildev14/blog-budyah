<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class PostController extends Controller
{

    public function ceritaLucu()
    {
        $posts = Post::where('category', 'CERITA_LUCU')
            ->latest()
            ->get();

        return Inertia::render('cerita-lucu', [
            'posts' => $posts
        ]);
    }

    public function ceritaMisteri()
    {
        $posts = Post::where('category', 'CERITA_MISTERI')
            ->latest()
            ->get();

        return Inertia::render('cerita-misteri', [
            'posts' => $posts
        ]);
    }

    public function ceritaCinta()
    {
        $posts = Post::where('category', 'CERITA_CINTA')
            ->latest()
            ->get();

        return Inertia::render('cerita-cinta', [
            'posts' => $posts
        ]);
    }

    public function ceritaAnak()
    {
        $posts = Post::where('category', 'CERITA_ANAK')
            ->latest()
            ->get();

        return Inertia::render('cerita-anak', [
            'posts' => $posts
        ]);
    }

    public function ceritaKehidupan()
    {
        $posts = Post::where('category', 'CERITA_KEHIDUPAN')
            ->latest()
            ->get();

        return Inertia::render('cerita-kehidupan', [
            'posts' => $posts
        ]);
    }



    public function create()
    {
        return Inertia::render('post/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|in:SD,SMP,SMA,Umum',
            'content' => 'required|string',
            'thumbnail' => 'nullable|image|max:2048',
        ]);

        $thumbnailPath = null;
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')
                ->store('posts', 'public');
        }

        Post::create([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'content' => $validated['content'],
            'thumbnail' => $thumbnailPath,
        ]);

        return redirect()->back()->with('success', 'Artikel berhasil disimpan');
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug)
            ->with('comments')
            ->firstOrFail();

        return Inertia::render('Detail', [
            'post' => $post,
        ]);
    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'thumbnail' => 'nullable|image|max:2048',
        ]);

        // update field normal
        $post->title = $validated['title'];
        $post->content = $validated['content'];

        // update thumbnail kalau ada file baru
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('posts', 'public');
            $post->thumbnail = $thumbnailPath;
        }

        $post->save();

        return back()->with('success', 'Data berhasil diupdate');
    }





    public function byCategory($category)
    {
        $posts = Post::where('category', $category)
            ->latest()
            ->get();

        return Inertia::render('post/category', [
            'posts' => $posts,
            'category' => $category,
        ]);
    }

    // View Category By User
    public function sd()
    {
        return Inertia::render('kategori/sd', [
            'posts' => Post::where('category', 'SD')->latest()->get(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }

    public function smp()
    {
        return Inertia::render('kategori/smp', [
            'posts' => Post::where('category', 'SMP')->latest()->get(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }

    public function sma()
    {
        return Inertia::render('kategori/sma', [
            'posts' => Post::where('category', 'SMA')->latest()->get(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }

    public function umum()
    {
        return Inertia::render('kategori/umum', [
            'posts' => Post::where('category', 'Umum')->latest()->get(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }
}
