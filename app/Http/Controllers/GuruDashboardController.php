<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Support\HtmlSanitizer;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Carbon\Carbon;

class GuruDashboardController extends Controller
{
    private const CERITA_CATEGORIES = [
        'CERITA_LUCU',
        'CERITA_MISTERI',
        'CERITA_CINTA',
        'CERITA_ANAK',
        'CERITA_KEHIDUPAN',
    ];

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

        // Grouped in PHP (not with a raw MONTH() query) so this works the
        // same regardless of the DB driver (MySQL, SQLite, ...).
        $postsByMonth = Post::select('created_at')
            ->get()
            ->groupBy(fn($post) => $post->created_at->format('n'))
            ->map(fn($group, $month) => [
                'month' => Carbon::create()->month((int) $month)->format('M'),
                'count' => $group->count(),
            ])
            ->sortBy(fn($item, $month) => (int) $month)
            ->values();

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
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('guru/cerita-lucu', [
            'posts' => $posts
        ]);
    }

    public function CeritaMisteri()
    {
        $posts = Post::where('category', 'CERITA_MISTERI')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('guru/cerita-misteri', [
            'posts' => $posts
        ]);
    }

    public function CeritaCinta()
    {
        $posts = Post::where('category', 'CERITA_CINTA')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('guru/cerita-cinta', [
            'posts' => $posts
        ]);
    }

    public function CeritaAnak()
    {
        $posts = Post::where('category', 'CERITA_ANAK')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('guru/cerita-anak', [
            'posts' => $posts
        ]);
    }

    public function CeritaKehidupan()
    {
        $posts = Post::where('category', 'CERITA_KEHIDUPAN')
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('guru/cerita-kehidupan', [
            'posts' => $posts
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'     => 'required|string|max:255',
            'thumbnail' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
            'category'  => ['required', Rule::in(self::CERITA_CATEGORIES)],
            'content'   => 'nullable|string',
        ]);

        // upload image
        $path = $request->file('thumbnail')->store('posts', 'public');

        Post::create([
            'title'     => $validated['title'],
            'category'  => $validated['category'],
            'thumbnail' => $path,
            'content'   => HtmlSanitizer::clean($validated['content'] ?? null),
        ]);

        return redirect()->back()->with('success', 'Data berhasil ditambahkan');
    }




    // =====================================================
    // Kategori Jenjang (SD, SMP, SMA, UMUM)
    // =====================================================
    public function SD()
    {
        $posts = Post::where('category', 'SD')->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        return Inertia::render('guru/kategori/sd', [
            'posts' => $posts
        ]);
    }

    public function SMP()
    {
        $posts = Post::where('category', 'SMP')->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        return Inertia::render('guru/kategori/smp', [
            'posts' => $posts
        ]);
    }

    public function SMA()
    {
        $posts = Post::where('category', 'SMA')->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        return Inertia::render('guru/kategori/sma', [
            'posts' => $posts
        ]);
    }

    public function Umum()
    {
        $posts = Post::where('category', 'Umum')->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

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

        if ($post->thumbnail) {
            Storage::disk('public')->delete($post->thumbnail);
        }

        $post->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus.');
    }
}
