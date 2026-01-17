// images
import ImgHero1 from "@/assets/1hero.jfif";
import ImgHero2 from "@/assets/2hero.jfif";
import ImgHero3 from "@/assets/3hero.jfif";
import ImgHero4 from "@/assets/4hero.jfif";
// icons
import { FaArrowDown } from 'react-icons/fa';

import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Post {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    excerpt?: string;
    created_at: string;
    category: string;

}

export default function Home() {
    const { popularPosts = [] } = usePage().props as {
        popularPosts?: Post[];
    };

    const { topPosts } = usePage().props as {
        topPosts?: Post[];
    };

    const posts = topPosts ?? [];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto py-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                            Selamat Datang di <br />
                            <span className="text-red-600 font-bold text-6xl md:text-5xl">E-Sastra Cerkak</span>
                        </h1>

                        <p className="text-gray-600 text-lg italic mb-8 max-w-lg">
                            "Melestarikan Bahasa, Mengasah Kreativitas Melalui Tulisan"
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="/post/create"
                                className="inline-flex w-full justify-center items-center gap-2 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md
               hover:bg-red-700 transition"
                            >
                                Mulai Menulis
                                <FaArrowDown className="animate-bounce" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="space-y-4 md:space-y-0 md:grid grid-cols-2 gap-4 justify-center">
                        {[
                            { src: ImgHero1, text: "Crita Cekak, Rasa Jeru" },
                            { src: ImgHero2, text: "Sakeplasan, nanging Nabet" },
                            { src: ImgHero3, text: "Cilik Wujude, Jembar Maknane" },
                            { src: ImgHero4, text: "Sawetara Wektu, Sejuta Rasa" },
                        ].map((item, idx) => (
                            <div key={idx} className="relative w-full h-40 rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src={item.src}
                                    alt={item.text}
                                    className="w-full h-full object-cover shadow-md"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Text overlay */}
                                <div className="absolute bottom-2 left-2 text-white drop-shadow-md">
                                    <p className="italic text-lg md:text-base">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Popular Post */}
            <section id="popular" className="bg-white rounded-md mt-10">
                <h2 className="text-xl font-semibold mb-6 border-b-4 w-1/2 border-red-600">Popular Posts</h2>

                {popularPosts.length === 0 && (
                    <p className="text-gray-500">Belum ada artikel</p>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* ===== Featured Post (1 TERBARU) ===== */}
                    {popularPosts[0] && (
                        <Link
                            href={`/cerkak/${popularPosts[0].slug}`}
                            className="lg:col-span-2 lg:row-span-2 group relative rounded-md overflow-hidden"
                        >
                            <img
                                src={`/storage/${popularPosts[0].thumbnail}`}
                                alt={popularPosts[0].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300 shadow-md"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                                <h3 className="text-lg font-semibold text-white leading-tight">
                                    {popularPosts[0].title}
                                </h3>

                                <span className="text-xs text-gray-300 mt-1">
                                    {new Date(popularPosts[0].created_at).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        </Link>
                    )}

                    {/* ===== Medium Posts (2) ===== */}
                    {popularPosts.slice(1, 3).map(post => (
                        <Link
                            key={post.id}
                            href={`/cerkak/${post.slug}`}
                            className="lg:col-span-2 group flex gap-4"
                        >
                            <img
                                src={`/storage/${post.thumbnail}`}
                                alt={post.title}
                                className="md:w-60 md:h-30 w-40 h-25 object-cover rounded-md shadow-md"
                            />
                            <div>
                                <h3 className="font-medium text-sm group-hover:text-red-600 transition">
                                    {post.title}
                                </h3>
                                <span className="text-xs text-gray-500">
                                    {new Date(post.created_at).toLocaleDateString('id-ID')}
                                </span>
                            </div>
                        </Link>
                    ))}

                    {/* ===== Small Posts (SISA) ===== */}
                    {popularPosts.slice(3).map(post => (
                        <Link
                            key={post.id}
                            href={`/cerkak/${post.slug}`}
                            className="group flex gap-5 col-span-1 md:col-span-2"
                        >
                            <img
                                src={`/storage/${post.thumbnail}`}
                                alt={post.title}
                                className="md:w-60 md:h-30 w-40 h-25 object-cover rounded shadow-md"
                            />
                            <div>
                                <h4 className="text-sm font-medium leading-snug group-hover:text-red-600 transition line-clamp-2">
                                    {post.title}
                                </h4>
                                <span className="text-xs text-gray-500">
                                    {new Date(post.created_at).toLocaleDateString('id-ID')}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            {/* Doneeee */}


            {/* List */}
            {/* List */}
            <section className="bg-white rounded-md mt-10">
                <h2 className="text-xl font-semibold mb-6 border-b-4 border-red-600 w-1/2">Top Posts</h2>

                {posts.length === 0 && (
                    <p className="text-gray-500">Belum ada artikel</p>
                )}

                <div className="space-y-6">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/cerkak/${post.slug}`}
                            className="group flex w-full gap-3"
                        >
                            <img
                                src={`/storage/${post.thumbnail}`}
                                alt={post.title}
                                className="md:w-72 md:h-44 w-40 h-25 object-cover rounded-md flex-shrink-0 shadow-md"
                            />

                            <div className="flex flex-col">
                                <span className="text-xs text-red-600 font-medium mb-1">
                                    {post.category}
                                </span>

                                <h4 className="font-semibold text-2xl leading-snug group-hover:text-red-600 transition">
                                    {post.title}
                                </h4>

                                {post.excerpt && (
                                    <p className="text-gray-600 text-justify leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                )}

                                <span className="text-sm text-gray-500 mt-2">
                                    {new Date(post.created_at).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}

Home.layout = (page: any) => <AppLayout>{page}</AppLayout>;
