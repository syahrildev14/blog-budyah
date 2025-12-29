import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function BlogList({ posts }: any) {
    return (
        <>
            <Head title="Blog" />

            <section className="bg-white rounded-md p-6">
                <h2 className="text-3xl font-semibold mb-6">Daftar Blog</h2>

                <div className="space-y-6">
                    {posts.map((post: any) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex w-full gap-5"
                        >
                            <img src={post.image} alt={post.title} className="w-72 h-42 object-cover rounded-md flex-shrink-0" />
                            <div className="flex flex-col">
                                <h4 className="font-semibold text-2xl leading-snug group-hover:text-red-600 transition">{post.title}</h4>
                                <p className="text-justify leading-relaxed">{post.excerpt}</p>
                                <span className="text-sm text-gray-500 mt-1">{post.time}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

BlogList.layout = (page: any) => <AppLayout>{page}</AppLayout>;
