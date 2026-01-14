<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Str;
use Carbon\Carbon;

class GuruDashboardController extends Controller
{
    public function index()
    {
        $totalPosts = Post::count();

        $postsByCategory = Post::select('category')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('category')
            ->get()
            ->map(fn($item) => [
                'category' => $item->category,
                'count' => $item->count,
            ]);

        // MySQL / MariaDB (bukan SQLite)
        $postsByMonth = Post::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->groupByRaw('MONTH(created_at)')
            ->orderByRaw('MONTH(created_at)')
            ->get()
            ->map(fn($item) => [
                'month' => Carbon::create()->month((int) $item->month)->format('M'),
                'count' => $item->count,
            ]);

        return Inertia::render('guru/dashboard', [
            'stats' => [
                'totalPosts'       => $totalPosts,
                'postsByCategory'  => $postsByCategory,
                'postsByMonth'     => $postsByMonth,
            ],
        ]);
    }

    // Cerita berdasarkan kategori cerita
    public function CeritaLucu()
    {
        $posts = Post::where('category', 'CERITA_LUCU')
            ->latest()
            ->get();

        return Inertia::render('guru/cerita-lucu', [
            'posts' => $posts
        ]);
    }

    public function CeritaMisteri()
    {
        $posts = Post::where('category', 'CERITA_MISTERI')
            ->latest()
            ->get();

        return Inertia::render('guru/cerita-misteri', [
            'posts' => $posts
        ]);
    }

    public function CeritaCinta()
    {
        $posts = Post::where('category', 'CERITA_CINTA')
            ->latest()
            ->get();

        return Inertia::render('guru/cerita-cinta', [
            'posts' => $posts
        ]);
    }

    public function CeritaAnak()
    {
        $posts = Post::where('category', 'CERITA_ANAK')
            ->latest()
            ->get();

        return Inertia::render('guru/cerita-anak', [
            'posts' => $posts
        ]);
    }

    public function CeritaKehidupan()
    {
        $posts = Post::where('category', 'CERITA_KEHIDUPAN')
            ->latest()
            ->get();

        return Inertia::render('guru/cerita-kehidupan', [
            'posts' => $posts
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'title'     => 'required|string|max:255',
            'thumbnail' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
            'category'  => 'required|string',
        ]);

        // upload image
        $path = $request->file('thumbnail')->store('posts', 'public');

        Post::create([
            'title'     => $request->title,
            'slug'      => Str::slug($request->title),
            'category'  => $request->category,
            'thumbnail' => $path,
            'content'   => $request->content ?? null,
        ]);

        return redirect()->back();
    }




    // =====================================================
    // Kategori Jenjang (SD, SMP, SMA, UMUM)
    // =====================================================
    public function SD()
    {
        $posts = Post::where('category', 'SD')->orderBy('created_at', 'desc')->get();

        return Inertia::render('guru/kategori/sd', [
            'posts' => $posts
        ]);
    }

    public function SMP()
    {
        $posts = Post::where('category', 'SMP')->orderBy('created_at', 'desc')->get();

        return Inertia::render('guru/kategori/smp', [
            'posts' => $posts
        ]);
    }

    public function SMA()
    {
        $posts = Post::where('category', 'SMA')->orderBy('created_at', 'desc')->get();

        return Inertia::render('guru/kategori/sma', [
            'posts' => $posts
        ]);
    }

    public function Umum()
    {
        $posts = Post::where('category', 'Umum')->orderBy('created_at', 'desc')->get();

        return Inertia::render('guru/kategori/umum', [
            'posts' => $posts
        ]);
    }

    // =====================================================
    // Hapus Post (semua kategori)
    // =====================================================
    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        // Hapus thumbnail jika ada
        if ($post->thumbnail && file_exists(storage_path('app/public/' . $post->thumbnail))) {
            unlink(storage_path('app/public/' . $post->thumbnail));
        }

        $post->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus.');
    }
}
