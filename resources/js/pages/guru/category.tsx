import { Head, Link } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'

interface Post {
    id: number
    title: string
    slug: string
    created_at: string
}

export default function Category({ category, posts }: any) {
    return (
        <>
            <Head title={`Cerita ${category}`} />

            <h1 className="text-3xl font-bold mb-6">
                Cerita {category}
            </h1>

            <div className="space-y-4">
                {posts.length > 0 ? (
                    posts.map((post: Post) => (
                        <div
                            key={post.id}
                            className="bg-white p-4 rounded-md shadow flex justify-between"
                        >
                            <span>{post.title}</span>

                            <Link
                                href={`/cerkak/${post.slug}`}
                                className="text-red-600"
                            >
                                Lihat
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">
                        Belum ada cerita di kategori ini.
                    </p>
                )}
            </div>
        </>
    )
}

Category.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>
