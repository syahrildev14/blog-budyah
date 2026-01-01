import { Head, Link } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import { useState } from 'react'


export default function DetailCerkak() {
    const [comments, setComments] = useState([
        {
            name: 'Budi',
            message: 'Cerkaknya menyentuh sekali, terima kasih sudah berbagi.',
            time: '1 jam lalu',
        },
        {
            name: 'Sari',
            message: 'Bahasanya sederhana tapi dalam.',
            time: '3 jam lalu',
        },
    ])

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const submitComment = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !message) return

        setComments([
            ...comments,
            {
                name,
                message,
                time: 'baru saja',
            },
        ])

        setName('')
        setMessage('')
    }

    return (
        <>
            <Head title="Judul Cerkak" />

            <section className="bg-white rounded-md p-8 max-w-4xl mx-auto">
                {/* ===== Judul ===== */}
                <h1 className="text-4xl font-bold leading-tight mb-4">
                    Senja di Ujung Desa
                </h1>

                {/* ===== Meta ===== */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>✍️ Syahril</span>
                    <span>📅 1 Januari 2026</span>
                    <span className="text-red-600 font-medium">
                        #Cerkak
                    </span>
                </div>

                {/* ===== Cover Image ===== */}
                <img
                    src="https://picsum.photos/900/400"
                    alt="cover"
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                />

                {/* ===== Isi Cerkak ===== */}
                <article className="prose prose-lg max-w-none text-justify">
                    <p>
                        Senja itu turun perlahan, menyelimuti desa kecil yang
                        sudah lama tak berubah. Angin berembus membawa aroma
                        tanah basah, sementara langkah kaki tua terdengar
                        menyusuri jalan setapak.
                    </p>

                    <p>
                        Ia berhenti sejenak di bawah pohon trembesi, menatap
                        langit jingga yang seolah menyimpan ribuan cerita
                        kenangan. Waktu memang kejam, tetapi ingatan selalu
                        setia.
                    </p>

                    <p>
                        Di sudut desa, suara anak-anak bermain menjadi saksi
                        bahwa hidup terus berjalan, meski hati tak selalu
                        siap menerima kenyataan.
                    </p>

                    <p>
                        Senja itu bukan akhir, melainkan pengingat bahwa
                        setiap pulang selalu punya makna.
                    </p>
                </article>

                {/* ===== Navigasi ===== */}
                <div className="flex justify-between items-center mt-12 border-t pt-6">
                    <Link
                        href="/cerkak"
                        className="text-red-600 hover:underline"
                    >
                        ← Kembali ke daftar cerkak
                    </Link>

                    <Link
                        href="#"
                        className="text-red-600 hover:underline"
                    >
                        Cerkak selanjutnya →
                    </Link>
                </div>
            </section>

            {/* ===== Rekomendasi ===== */}
            <section className="max-w-4xl mx-auto mt-10">
                <h3 className="text-2xl font-semibold mb-4">
                    Cerkak Lainnya
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="group flex gap-4"
                        >
                            <img
                                src="https://picsum.photos/200/150"
                                className="w-40 h-28 object-cover rounded-md"
                            />

                            <div>
                                <h4 className="font-semibold group-hover:text-red-600 transition">
                                    Judul cerkak lainnya
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    2 hari lalu
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ===== Komentar ===== */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">
                    Komentar ({comments.length})
                </h3>

                {/* Form Komentar */}
                <form
                    onSubmit={submitComment}
                    className="space-y-4 mb-8"
                >
                    <input
                        type="text"
                        placeholder="Nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    />

                    <textarea
                        placeholder="Tulis komentar..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                    >
                        Kirim Komentar
                    </button>
                </form>

                {/* List Komentar */}
                <div className="space-y-6">
                    {comments.map((comment, index) => (
                        <div
                            key={index}
                            className="border-b pb-4"
                        >
                            <div className="flex justify-between">
                                <span className="font-semibold">
                                    {comment.name}
                                </span>
                                <span className="text-sm text-gray-400">
                                    {comment.time}
                                </span>
                            </div>

                            <p className="mt-2 text-gray-700">
                                {comment.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

DetailCerkak.layout = (page: any) => <AppLayout>{page}</AppLayout>
