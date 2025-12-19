import Img1 from '@/assets/1hero.jfif';
import Img2 from '@/assets/2hero.jfif';
import Img3 from '@/assets/3hero.jfif';
import Img4 from '@/assets/4hero.jfif';
import Img5 from '@/assets/5hero.jfif';
import Img10 from '@/assets/dummy1.svg';

import { dashboard, login } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
    const [openContoh, setOpenContoh] = useState(false);
    const [openKategori, setOpenKategori] = useState(false);

    return (
        <>
            <Head title="Home | Blog Bu Dyah">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                {/* HEADER */}
                <header className="sticky top-0 z-50 w-full bg-primary/90 text-white backdrop-blur">
                    <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
                        <h1 className="text-lg font-semibold">
                            Cerita Bahasa Jawa
                        </h1>

                        <nav className="flex items-center gap-4 text-sm font-semibold">
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>

                            {/* contoh cerkak */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpenContoh(!openContoh);
                                        setOpenKategori(false);
                                    }}
                                    className="flex cursor-pointer items-center gap-1"
                                >
                                    Contoh Cerkak
                                    <FiChevronDown
                                        className={`text-sm transition-transform duration-200 ${
                                            openContoh ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {openContoh && (
                                    <div className="absolute left-0 z-50 mt-2 w-44 rounded-md border bg-white shadow-lg dark:bg-[#111]">
                                        <Link
                                            href="/kategori/kelas-vii"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Kelas VII
                                        </Link>
                                        <Link
                                            href="/kategori/kelas-viii"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Kelas VIII
                                        </Link>
                                        <Link
                                            href="/kategori/kelas-ix"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Kelas IX
                                        </Link>
                                        <Link
                                            href="/kategori/umum"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Umum
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* kategori */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpenKategori(!openKategori);
                                        setOpenContoh(false);
                                    }}
                                    className="flex cursor-pointer items-center gap-1"
                                >
                                    Kategori Cerkak
                                    <FiChevronDown
                                        className={`text-sm transition-transform duration-200 ${
                                            openKategori ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {openKategori && (
                                    <div className="absolute left-0 z-50 mt-2 w-44 rounded-md border bg-white shadow-lg dark:bg-[#111]">
                                        <Link
                                            href="/kategori/kelas-vii"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Kelas VII
                                        </Link>
                                        <Link
                                            href="/kategori/kelas-viii"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Kelas VIII
                                        </Link>
                                        <Link
                                            href="/kategori/kelas-ix"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Kelas IX
                                        </Link>
                                        <Link
                                            href="/kategori/umum"
                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-black/5"
                                        >
                                            Umum
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-sm border px-4 py-1.5 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={login()}
                                    className="rounded-sm bg-white px-5 py-1.5 font-semibold text-slate-600 duration-300 hover:bg-white/80"
                                >
                                    Post
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-[#F6F1E8] px-6 py-24">
                    <div className="mx-auto max-w-6xl text-center">
                        <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">
                            Blog Cerkak Bahasa Jawa
                            <br />
                            <span className="text-primary">
                                Nulis cerkak basa Jawa, sederhana nanging ngena
                            </span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-black/60">
                            Tulisen pikiran lan rasa nganggo basa Jawa, dadi
                            cerkak cekak sing kebak makna.
                        </p>

                        <Link
                            href="/"
                            className="= inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white duration-300 hover:scale-105"
                        >
                            Mulai Baca
                            <span className="text-lg">→</span>
                        </Link>
                    </div>

                    {/* IMAGE ARC */}
                    <div className="relative mx-auto mt-16 flex max-w-6xl justify-center">
                        <div className="flex gap-4">
                            {[Img1, Img2, Img3, Img4, Img5].map((img, i) => (
                                <div
                                    key={i}
                                    className="relative h-64 w-44 overflow-hidden rounded-2xl shadow-lg"
                                    style={{
                                        transform: `translateY(${Math.abs(2 - i) * 18}px)`,
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt="User"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FEATURES */}
                    <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-10 text-center md:grid-cols-3">
                        <div>
                            <h3 className="mb-2 font-semibold">
                                Crita Urip ing Basa Jawa
                            </h3>
                            <p className="text-sm text-black/60">
                                Nampilaké cerkak-cerkak kang nyritakaké lelakon
                                gesang saben dina, ditulis nganggo basa Jawa
                                supaya luwih cedhak karo rasa lan budaya.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 font-semibold">
                                Cerkak Basa Jawa, Gaya Anyar
                            </h3>
                            <p className="text-sm text-black/60">
                                Crita cekak basa Jawa kanthi pendekatan modern,
                                nggandhengaké tradhisi lan pikiran jaman saiki
                                supaya tetep relevan lan nyenengaké.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 font-semibold">
                                Ukara Cekak, Crita Gesang
                            </h3>
                            <p className="text-sm text-black/60">
                                Sanajan cekak ukarané, saben crita ngemot makna
                                gesang, piwulang, lan rasa kang bisa dadi bahan
                                renungan kanggo sing maca.
                            </p>
                        </div>
                    </div>
                </section>

                {/* BLOG SECTION */}
                <section className="bg-white px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        {/* LATEST POSTS */}
                        <h2 className="mb-6 border-b pb-2 text-lg font-semibold">
                            Latest Posts
                        </h2>

                        <div className="grid gap-8 md:grid-cols-3">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    <img
                                        src={Img10}
                                        alt="Post"
                                        className="h-24 w-24 rounded object-cover"
                                    />
                                    <div>
                                        <h3 className="cursor-pointer leading-snug font-semibold hover:underline">
                                            Dorem ipsum quia dolor sit amet,
                                            consectetur, adipisci velit...
                                        </h3>
                                        <p className="mt-1 text-sm text-black/60">
                                            Lorem Ipsum has been the industry's
                                            standard dummy text ever since the
                                            1500s.
                                        </p>
                                        <p className="mt-2 text-xs font-medium">
                                            Jhon Doe, Mar 20
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* POPULAR POSTS + SIDEBAR */}
                        <div className="mt-20 grid gap-12 md:grid-cols-3">
                            {/* POPULAR POSTS */}
                            <div className="md:col-span-2">
                                <h2 className="mb-6 border-b pb-2 text-lg font-semibold">
                                    Popular Posts
                                </h2>

                                <div className="grid gap-10 md:grid-cols-2">
                                    {[...Array(10)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="cursor-pointer duration-300 hover:scale-105"
                                        >
                                            <img
                                                src={Img10}
                                                alt="Popular post"
                                                className="mb-4 h-48 w-full rounded object-cover"
                                            />
                                            <h3 className="font-semibold">
                                                Dorem ipsum quia dolor sit amet,
                                                consectetur, adipisci velit...
                                            </h3>
                                            <p className="mt-2 text-sm text-black/60">
                                                Lorem Ipsum has been the
                                                industry's standard dummy text
                                                ever since the 1500s.
                                            </p>
                                            <p className="mt-2 text-xs font-medium">
                                                Jhon Doe, Mar 20
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SIDEBAR */}
                            <aside className="space-y-10 self-start md:sticky md:top-20">
                                {/* SOCIAL MEDIA */}
                                <div>
                                    <h3 className="mb-4 bg-primary px-4 py-2 font-semibold text-white">
                                        Sosial Media
                                    </h3>
                                    <ul className="space-y-2 border p-4">
                                        {[
                                            'Whatsapp',
                                            'Instagram',
                                            'Facebook',
                                            'Twitter',
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center justify-between border-b py-2 last:border-none"
                                            >
                                                <span>{item}</span>
                                                <span>→</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CATEGORY */}
                                <div>
                                    <h3 className="mb-4 bg-primary px-4 py-2 font-semibold text-white">
                                        Kategori
                                    </h3>
                                    <ul className="space-y-2 border p-4">
                                        {[
                                            'Kelas VII',
                                            'Kelas VIII',
                                            'Kelas IX',
                                            'Umum',
                                        ].map((cat) => (
                                            <li
                                                key={cat}
                                                className="flex items-center justify-between border-b py-2 last:border-none"
                                            >
                                                <span>{cat}</span>
                                                <span>→</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* TAGS */}
                                <div>
                                    <h3 className="mb-4 bg-primary px-4 py-2 font-semibold text-white">
                                        Tags
                                    </h3>
                                    <ul className="space-y-2 border p-4">
                                        {[
                                            'Kelas VII',
                                            'Kelas VIII',
                                            'Kelas IX',
                                            'Umum',
                                        ].map((cat) => (
                                            <li
                                                key={cat}
                                                className="flex items-center justify-between border-b py-2 last:border-none"
                                            >
                                                <span>{cat}</span>
                                                <span>→</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-black/10 p-4 text-center text-sm dark:border-white/10">
                    © {new Date().getFullYear()} Blog Education
                </footer>
            </div>
        </>
    );
}
