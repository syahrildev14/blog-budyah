<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Support\HtmlSanitizer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class PostController extends Controller
{

    public function ceritaLucu()
    {
        $posts = Post::where('category', 'CERITA_LUCU')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('cerita-lucu', [
            'posts' => $posts
        ]);
    }

    public function ceritaMisteri()
    {
        $posts = Post::where('category', 'CERITA_MISTERI')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('cerita-misteri', [
            'posts' => $posts
        ]);
    }

    public function ceritaCinta()
    {
        $posts = Post::where('category', 'CERITA_CINTA')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('cerita-cinta', [
            'posts' => $posts
        ]);
    }

    public function ceritaAnak()
    {
        $posts = Post::where('category', 'CERITA_ANAK')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('cerita-anak', [
            'posts' => $posts
        ]);
    }

    public function ceritaKehidupan()
    {
        $posts = Post::where('category', 'CERITA_KEHIDUPAN')
            ->latest()
            ->paginate(10)
            ->withQueryString();

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
            'content' => HtmlSanitizer::clean($validated['content']),
            'thumbnail' => $thumbnailPath,
        ]);

        return redirect()->back()->with('success', 'Artikel berhasil disimpan');
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
        $post->content = HtmlSanitizer::clean($validated['content']);

        // update thumbnail kalau ada file baru
        if ($request->hasFile('thumbnail')) {
            if ($post->thumbnail) {
                Storage::disk('public')->delete($post->thumbnail);
            }

            $post->thumbnail = $request->file('thumbnail')->store('posts', 'public');
        }

        $post->save();

        return back()->with('success', 'Data berhasil diupdate');
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'file' => 'required|image|max:4096',
        ]);

        $path = $request->file('file')->store('posts/content', 'public');

        return response()->json([
            'location' => Storage::url($path),
        ]);
    }



    // View Category By User
    public function sd()
    {
        return Inertia::render('kategori/sd', [
            'posts' => Post::where('category', 'SD')->latest()->paginate(10)->withQueryString(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }

    public function smp()
    {
        return Inertia::render('kategori/smp', [
            'posts' => Post::where('category', 'SMP')->latest()->paginate(10)->withQueryString(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }

    public function sma()
    {
        return Inertia::render('kategori/sma', [
            'posts' => Post::where('category', 'SMA')->latest()->paginate(10)->withQueryString(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }

    public function umum()
    {
        return Inertia::render('kategori/umum', [
            'posts' => Post::where('category', 'Umum')->latest()->paginate(10)->withQueryString(),
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }
}
