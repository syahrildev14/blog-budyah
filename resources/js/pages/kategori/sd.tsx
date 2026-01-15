import { Head, Link } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'

interface Post {
    id: number
    title: string
    slug: string
    content: string
    thumbnail: string
    created_at: string
}

interface SDProps {
    posts: Post[]
}

export default function SD({ posts }: SDProps) {
    return (
        <>
            <Head title="SD/MTS" />

            <section className="space-y-8">
                <h1 className='font-bold text-3xl text-gray-800'>Kategori SD/MI</h1>
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/cerkak/${post.slug}`}
                        className="grid grid-cols-12 gap-6 group"
                    >
                        <img
                            src={`/storage/${post.thumbnail}`}
                            alt={post.title}
                            className="col-span-4 h-40 w-full object-cover rounded-md shadow-md"
                        />

                        <div className="col-span-8">
                            {/* Tanggal Upload */}
                            <span className="text-sm text-gray-500">
                                {new Date(post.created_at).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>

                            <h4 className="text-2xl font-semibold mt-1 group-hover:text-red-600 transition">
                                {post.title}
                            </h4>

                            <div
                                className="line-clamp-4 mt-2 text-gray-700 overflow-hidden text-justify"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                        </div>
                    </Link>
                ))}
            </section>
        </>
    )
}

SD.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>
