import React, { FormEvent } from 'react'
import { Head, useForm, router } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'

interface Comment {
    id: number
    name: string
    content: string
    created_at: string
}

interface Post {
    id: number
    title: string
    slug: string
    content: string
    thumbnail: string
    created_at: string
    comments?: Comment[]
}

interface DetailProps {
    post: Post
}

export default function Detail({ post }: DetailProps) {
    // ⬇️ STABILKAN comments (ANTI ERROR)
    const comments: Comment[] = post.comments ?? []

    const { data, setData, post: submit, processing, reset } = useForm({
        post_id: post.id,
        name: '',
        content: '',
    })

    const sendComment = (e: FormEvent) => {
        e.preventDefault()

        submit('/comment', {
            preserveScroll: true,
            onSuccess: () => {
                reset('name', 'content')
                router.reload({ only: ['post'] }) // refresh comments
            },
        })
    }

    return (
        <>
            <Head title={post.title} />

            {/* ================= ARTICLE ================= */}
            <article className="space-y-6">
                <img
                    src={`/storage/${post.thumbnail}`}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                />

                <h1 className="text-4xl font-bold">{post.title}</h1>

                <p className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </p>

                <div className="prose max-w-none">
                    {post.content}
                </div>
            </article>

            {/* ================= COMMENTS ================= */}
            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-semibold">
                    Komentar ({comments.length})
                </h2>

                {/* FORM */}
                <form onSubmit={sendComment} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full border rounded-md px-4 py-2"
                        required
                    />

                    <textarea
                        placeholder="Tulis komentar..."
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="w-full border rounded-md px-4 py-2"
                        rows={4}
                        required
                    />

                    <button
                        disabled={processing}
                        className="bg-red-600 text-white px-6 py-2 rounded-md disabled:opacity-50"
                    >
                        {processing ? 'Mengirim...' : 'Kirim Komentar'}
                    </button>
                </form>

                {/* LIST */}
                <div className="space-y-4">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id} className="border rounded-md p-4">
                                <p className="font-semibold">{comment.name}</p>
                                <p className="text-sm text-gray-500">
                                    {new Date(comment.created_at).toLocaleDateString('id-ID')}
                                </p>
                                <p className="mt-2">{comment.content}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Belum ada komentar.</p>
                    )}
                </div>
            </section>
        </>
    )
}

Detail.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>
