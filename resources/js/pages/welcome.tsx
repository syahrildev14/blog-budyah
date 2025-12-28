// images
import ImgHero1 from "@/assets/1hero.jfif";
import ImgHero2 from "@/assets/2hero.jfif";
import ImgHero3 from "@/assets/3hero.jfif";
import ImgHero4 from "@/assets/4hero.jfif";
// icons
import { FaArrowDown } from 'react-icons/fa';

import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block mb-4 text-sm text-red-600 font-semibold">
                            Selamat Datang
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Kumpulan Cerkak & Cerita
                            <br />
                            <span className="text-red-600">Cerkak Bu Dyah</span>
                        </h1>

                        <p className="text-gray-600 mb-8 max-w-lg">
                            Bacaan cerpen, cerita anak, cerita kehidupan, hingga cerita inspiratif
                            untuk siswa dan umum. Disusun dengan bahasa sederhana dan menarik.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="#popular"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-md
               hover:bg-red-700 transition"
                            >
                                Mulai Membaca
                                <FaArrowDown className="animate-bounce" />
                            </Link>

                            <Link
                                href="/materi"
                                className="px-6 py-3 border border-gray-300 rounded-md
                                       hover:border-red-600 hover:text-red-600 transition"
                            >
                                Materi Cerkak
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

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* ===== Featured Post (1) ===== */}
                    <Link
                        href="#"
                        className="lg:col-span-2 lg:row-span-2 group relative rounded-md overflow-hidden"
                    >
                        <img
                            src="https://picsum.photos/600/400"
                            alt="Featured"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                            <span className="text-xs text-red-400 mb-1">Popular</span>
                            <h3 className="text-lg font-semibold text-white leading-tight">
                                Contoh Judul Artikel Popular Paling Banyak Dibaca
                            </h3>
                            <span className="text-xs text-gray-300 mt-1">
                                2 hari lalu
                            </span>
                        </div>
                    </Link>


                    {/* ===== Medium Posts (2) ===== */}
                    {[1, 2].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="lg:col-span-2 group flex gap-4"
                        >
                            <img
                                src="https://picsum.photos/200/150"
                                alt="post"
                                className="w-32 h-24 object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-medium text-sm group-hover:text-red-600 transition">
                                    Judul artikel populer ukuran sedang
                                </h3>
                                <span className="text-xs text-gray-500">
                                    3 jam lalu
                                </span>
                            </div>
                        </Link>
                    ))}

                    {/* ===== Small Posts (4) ===== */}
                    {[1, 2, 3, 4].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="group flex gap-3"
                        >
                            <img
                                src="https://picsum.photos/100/100"
                                alt="post"
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                                <h4 className="text-sm font-medium leading-snug group-hover:text-red-600 transition">
                                    Judul artikel kecil populer
                                </h4>
                                <span className="text-xs text-gray-500">
                                    1 jam lalu
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* List */}
            <section className="bg-white rounded-md p-6">
                <h2 className="text-xl font-semibold mb-6">Top Posts</h2>

                <div className="space-y-6">
                    {/* ===== List Top 10 Posts ===== */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="group flex w-full gap-5"
                        >
                            <img
                                src="https://picsum.photos/160/160"
                                alt="post"
                                className="w-72 h-42 object-cover rounded-md flex-shrink-0"
                            />

                            <div className="flex flex-col">
                                <h4 className="font-semibold text-2xl leading-snug group-hover:text-red-600 transition">
                                    Judul artikel populer versi list ke bawah
                                </h4>
                                <p className='text-justify leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam. Eius harum natus aperiam cumque magnam officia nesciunt placeat quam accusamus, sit id exercitationem assumenda reprehenderit laboriosam perferendis provident quo?</p>
                                <span className="text-sm text-gray-500 mt-1">
                                    3 jam lalu
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
