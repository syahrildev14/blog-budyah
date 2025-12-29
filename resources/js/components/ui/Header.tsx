import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Header() {
    const page = usePage();
    const auth = (page.props as any).auth ?? null; // gunakan safe access
    const [search, setSearch] = useState('');

    function submitSearch(e: React.FormEvent) {
        e.preventDefault();
        router.get(
            '/',
            { search },
            { preserveState: true, replace: true }
        );
    }

    return (
        <div className="sticky top-0 z-50">
            {/* Header 1 */}
            <header className="h-16 bg-white flex items-center justify-around px-6">
                <a href="/">
                    <h1 className="text-xl font-bold">Cerkak Bu Dyah</h1>
                </a>

                <nav className="flex gap-4 items-center">
                    {/* Input Search */}
                    <form onSubmit={submitSearch}>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari artikel..."
                            className="px-3 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600"
                        />
                    </form>

                    {auth?.user ? (
                        <>
                            {/* Jika sudah login, tampilkan tombol Post */}
                            <button
                                onClick={() => router.get('/post/create')}
                                className="hover:text-red-600 bg-red-600 hover:bg-red-600/0 text-white border border-red-600 px-3 py-1 rounded-sm duration-300"
                            >
                                Post
                            </button>

                            {/* Tombol Logout */}
                            <button
                                onClick={() =>
                                    router.post('/logout', {}, {
                                        onSuccess: () => router.visit('/login'),
                                    })
                                }
                                className="hover:text-gray-800 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300 px-3 py-1 rounded-sm duration-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        // Jika belum login, tampilkan tombol Masuk
                        <Link
                            href="/login"
                            className="hover:text-red-600 bg-red-600 hover:bg-red-600/0 text-white border border-red-600 px-3 py-1 rounded-sm duration-300"
                        >
                            Masuk
                        </Link>
                    )}
                </nav>
            </header>


            {/* Header 2 */}
            <header className="h-16 bg-white border-b flex items-center justify-around px-6">
                <nav className="flex gap-12">
                    <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
                    <Link href="/materi" className="text-gray-600 hover:text-red-600">Materi</Link>
                    <Link href="/cerita-lucu" className="text-gray-600 hover:text-red-600">Cerita Lucu</Link>
                    <Link href="/cerita-misteri" className="text-gray-600 hover:text-red-600">Cerita Misteri</Link>
                    <Link href="/cerita-cinta" className="text-gray-600 hover:text-red-600">Cerita Cinta</Link>
                    <Link href="/cerita-anak" className="text-gray-600 hover:text-red-600">Cerita Anak</Link>
                    <Link href="/cerita-kehidupan" className="text-gray-600 hover:text-red-600">Cerita Kehidupan</Link>

                    <div className="relative group">
                        {/* Trigger */}
                        <span className="cursor-pointer text-gray-600 hover:text-red-600 flex items-center gap-1">
                            Kategori
                            <svg
                                className="w-4 h-4 transition-transform group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>

                        {/* Dropdown */}
                        <div
                            className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           transition-all duration-200 z-50"
                        >
                            <Link href="/sd-mi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">SD/MI</Link>
                            <Link href="/smp-mts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">SMP/MTS</Link>
                            <Link href="/sma-smk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">SMA/SMK</Link>
                            <Link href="/umum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Umum</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
