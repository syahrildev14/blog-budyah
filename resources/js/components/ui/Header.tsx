import { Link, router, usePage } from '@inertiajs/react';

export default function Header() {
    const page = usePage();
    const auth = (page.props as any).auth ?? null;


    const { url } = usePage();

    function isActive(path: string) {
        return url === path || url.startsWith(path + '/');
    }

    function navClass(path: string) {
        return isActive(path)
            ? 'text-red-600 font-semibold border-b-2 border-red-600 pb-1'
            : 'text-gray-600 hover:text-red-600';
    }


    return (
        <div className="sticky top-0 z-50">
            {/* Header 1 */}
            <header className="h-16 bg-white flex items-center justify-around px-6">
                <a href="/">
                    <h1 className="text-xl text-red-600 font-bold">E-Sastra Cerkak</h1>
                </a>

                <nav className="flex gap-4 items-center">

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
                    <Link href="/" className={navClass('/')}>Home</Link>

                    <Link href="/materi" className={navClass('/materi')}>Materi</Link>

                    <Link href="/cerita-lucu" className={navClass('/cerita-lucu')}>
                        Cerita Lucu
                    </Link>

                    <Link href="/cerita-misteri" className={navClass('/cerita-misteri')}>
                        Cerita Misteri
                    </Link>

                    <Link href="/cerita-cinta" className={navClass('/cerita-cinta')}>
                        Cerita Cinta
                    </Link>

                    <Link href="/cerita-anak" className={navClass('/cerita-anak')}>
                        Cerita Anak
                    </Link>

                    <Link href="/cerita-kehidupan" className={navClass('/cerita-kehidupan')}>
                        Cerita Kehidupan
                    </Link>

                    {/* Dropdown */}
                    <div className="relative group">
                        <span
                            className={`cursor-pointer flex items-center gap-1 ${isActive('/sd-mi') ||
                                isActive('/smp-mts') ||
                                isActive('/sma-smk') ||
                                isActive('/umum')
                                ? 'text-red-600 font-semibold'
                                : 'text-gray-600 hover:text-red-600'
                                }`}
                        >
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

                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200 z-50"
                        >
                            <Link href="/sd-mi" className={navClass('/sd-mi') + ' block px-4 py-2 text-sm'}>
                                SD/MI
                            </Link>
                            <Link href="/smp-mts" className={navClass('/smp-mts') + ' block px-4 py-2 text-sm'}>
                                SMP/MTS
                            </Link>
                            <Link href="/sma-smk" className={navClass('/sma-smk') + ' block px-4 py-2 text-sm'}>
                                SMA/SMK
                            </Link>
                            <Link href="/umum" className={navClass('/umum') + ' block px-4 py-2 text-sm'}>
                                Umum
                            </Link>
                        </div>
                    </div>

                    <Link href="/tentang" className={navClass('/tentang')}>
                        Tentang
                    </Link>
                </nav>
            </header>
        </div>
    );
}
