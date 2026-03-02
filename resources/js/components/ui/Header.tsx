import { Link, router, usePage } from '@inertiajs/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const page = usePage();
    const auth = (page.props as any).auth ?? null;
    const { url } = usePage();

    const [open, setOpen] = useState(false);
    const [openKategori, setOpenKategori] = useState(false);

    function isActive(path: string) {
        return url === path || url.startsWith(path + '/');
    }

    function navClass(path: string) {
        return isActive(path)
            ? 'text-red-600 font-semibold border-b-2 border-red-600 pb-1'
            : 'text-gray-600 hover:text-red-600';
    }

    return (
        <div className="sticky top-0 z-50 bg-white border-b">
            {/* HEADER UTAMA */}
            <header className="h-16 flex items-center justify-between md:justify-around px-4 md:px-6">
                <Link href="/">
                    <h1 className="text-lg md:text-xl text-red-600 font-bold">
                        E-Cerkak
                    </h1>
                </Link>

                {/* DESKTOP AUTH */}
                <nav className="hidden md:flex gap-4 items-center">
                    {auth?.user ? (
                        <>
                            <button
                                onClick={() => router.get('/post/create')}
                                className="bg-red-600 text-white border border-red-600 px-3 py-1 rounded-sm hover:bg-transparent hover:text-red-600 duration-300"
                            >
                                Post
                            </button>
                            <button
                                onClick={() =>
                                    router.post('/logout', {}, {
                                        onSuccess: () => router.visit('/login'),
                                    })
                                }
                                className="bg-gray-200 border px-3 py-1 rounded-sm hover:bg-gray-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-red-600 text-white border border-red-600 px-3 py-1 rounded-sm hover:bg-transparent hover:text-red-600 duration-300"
                        >
                            Masuk
                        </Link>
                    )}
                </nav>

                {/* BURGER MOBILE */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
                    aria-label="Toggle Menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex justify-center gap-10 h-16 items-center">
                <Link href="/" className={navClass('/')}>Home</Link>
                <Link href="/materi" className={navClass('/materi')}>Materi</Link>
                <Link href="/cerita-lucu" className={navClass('/cerita-lucu')}>Cerita Lucu</Link>
                <Link href="/cerita-misteri" className={navClass('/cerita-misteri')}>Cerita Misteri</Link>
                <Link href="/cerita-cinta" className={navClass('/cerita-cinta')}>Cerita Cinta</Link>
                <Link href="/cerita-anak" className={navClass('/cerita-anak')}>Cerita Anak</Link>
                <Link href="/cerita-kehidupan" className={navClass('/cerita-kehidupan')}>Cerita Kehidupan</Link>

                {/* Dropdown Desktop */}
                <div className="relative group">
                    <span className="cursor-pointer flex items-center gap-1 text-gray-600 hover:text-red-600">
                        Ruang Karya
                        <ChevronDown className="w-4 h-4 transition group-hover:rotate-180" />
                    </span>
                    <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                        <Link href="/sd-mi" className="block px-4 py-2 hover:bg-gray-100">SD/MI</Link>
                        <Link href="/smp-mts" className="block px-4 py-2 hover:bg-gray-100">SMP/MTS</Link>
                        <Link href="/sma-smk" className="block px-4 py-2 hover:bg-gray-100">SMA/SMK</Link>
                        <Link href="/umum" className="block px-4 py-2 hover:bg-gray-100">Umum</Link>
                    </div>
                </div>

                <Link href="/tentang" className={navClass('/tentang')}>Tentang</Link>
            </nav>

            {/* MENU MOBILE */}
            {open && (
    <div className="md:hidden border-t bg-white px-4 py-4 space-y-1">
        {/* MENU UTAMA */}
        {[
            ['/', 'Home'],
            ['/materi', 'Materi'],
            ['/cerita-lucu', 'Cerita Lucu'],
            ['/cerita-misteri', 'Cerita Misteri'],
            ['/cerita-cinta', 'Cerita Cinta'],
            ['/cerita-anak', 'Cerita Anak'],
            ['/cerita-kehidupan', 'Cerita Kehidupan'],
        ].map(([href, label]) => (
            <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-700
                           hover:bg-red-50 hover:text-red-600 transition"
            >
                {label}
            </Link>
        ))}

        {/* KATEGORI */}
        <div className="pt-2">
            <button
                onClick={() => setOpenKategori(!openKategori)}
                className="flex w-full items-center justify-between
                           rounded-md px-3 py-2 font-semibold text-gray-700
                           hover:bg-gray-100 transition"
            >
                <span>Ruang Karya</span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                        openKategori ? 'rotate-180' : ''
                    }`}
                />
            </button>

            {openKategori && (
                <div className="mt-1 ml-2 border-l pl-3 space-y-1">
                    {[
                        ['/sd-mi', 'SD / MI'],
                        ['/smp-mts', 'SMP / MTS'],
                        ['/sma-smk', 'SMA / SMK'],
                        ['/umum', 'Umum'],
                    ].map(([href, label]) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-gray-600
                                       hover:bg-gray-100 hover:text-red-600 transition"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>

        <Link
            href="/tentang"
            onClick={() => setOpen(false)}
            className="block rounded-md px-3 py-2 text-gray-700
                       hover:bg-red-50 hover:text-red-600 transition"
        >
            Tentang
        </Link>

        <hr className="my-3" />

        {/* AUTH */}
        {auth?.user ? (
            <div className="space-y-2">
                <button
                    onClick={() => {
                        setOpen(false);
                        router.get('/post/create');
                    }}
                    className="w-full rounded-md bg-red-600 py-2 text-white
                               hover:bg-red-700 transition"
                >
                    Post
                </button>

                <button
                    onClick={() =>
                        router.post('/logout', {}, {
                            onSuccess: () => router.visit('/login'),
                        })
                    }
                    className="w-full rounded-md bg-gray-200 py-2
                               hover:bg-gray-300 transition"
                >
                    Logout
                </button>
            </div>
        ) : (
            <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-red-600 py-2 text-center text-white
                           hover:bg-red-700 transition"
            >
                Masuk
            </Link>
        )}
    </div>
)}

        </div>
    );
}
