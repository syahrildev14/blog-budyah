import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function CeritaLucu() {
    return (
        <>
            <Head title="Cerita Lucu" />

            <section className="bg-white rounded-md p-6">
                <h2 className="text-3xl font-semibold mb-6">Cerita Lucu</h2>

                <div className="space-y-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        const slug = `artikel-${item}`; // contoh slug
                        return (
                            <Link
                                key={item}
                                href={`/blog/${slug}`} // arahkan ke halaman detail
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
                                    <p className="text-justify leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, totam. Eius harum natus aperiam cumque magnam officia nesciunt placeat quam accusamus, sit id exercitationem assumenda reprehenderit laboriosam perferendis provident quo?
                                    </p>
                                    <span className="text-sm text-gray-500 mt-1">
                                        3 jam lalu
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>


            </section>
        </>
    );
}

CeritaLucu.layout = (page: any) => <AppLayout>{page}</AppLayout>;
