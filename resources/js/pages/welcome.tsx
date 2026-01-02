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
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-4xl font-semibold leading-tight mb-6">
                            Selamat Datang di <br />
                            <span className="text-red-600 font-bold text-5xl">E-Sastra Cerkak</span>
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
                    <div className="hidden md:grid grid-cols-2 gap-4 justify-center">
                        <img
                            src={ImgHero1}
                            alt="Hero 1"
                            className="w-full h-40 object-cover rounded-lg shadow-sm"
                        />
                        <img
                            src={ImgHero2}
                            alt="Hero 2"
                            className="w-full h-40 object-cover rounded-lg shadow-sm"
                        />
                        <img
                            src={ImgHero3}
                            alt="Hero 3"
                            className="w-full h-40 object-cover rounded-lg shadow-sm"
                        />
                        <img
                            src={ImgHero4}
                            alt="Hero 4"
                            className="w-full h-40 object-cover rounded-lg shadow-sm"
                        />
                    </div>
                </div>
            </section>

            {/* Popular Post */}
            <section id="popular" className="bg-white rounded-md p-6">
                <h2 className="text-xl font-semibold mb-6">Popular Posts</h2>

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
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
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
                                className="w-32 h-24 object-cover rounded-md"
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
                            className="group flex gap-3"
                        >
                            <img
                                src={`/storage/${post.thumbnail}`}
                                alt={post.title}
                                className="w-20 h-20 object-cover rounded"
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


            {/* List */}
            {/* List */}
            <section className="bg-white rounded-md p-6">
                <h2 className="text-xl font-semibold mb-6">Top Posts</h2>

                {posts.length === 0 && (
                    <p className="text-gray-500">Belum ada artikel</p>
                )}

                <div className="space-y-6">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/cerkak/${post.slug}`}
                            className="group flex w-full gap-5"
                        >
                            <img
                                src={`/storage/${post.thumbnail}`}
                                alt={post.title}
                                className="w-72 h-44 object-cover rounded-md flex-shrink-0"
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
