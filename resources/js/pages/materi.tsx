import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Materi() {
    return (
        <>
            <Head title="Materi Cerkak" />

            <section>
                {/* ================= Header Materi ================= */}
                <div className="bg-white rounded-md p-6">
                    <h1 className="text-2xl font-bold mb-4">
                        Materi Pembelajaran Cerkak
                    </h1>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Cerkak atau cerita cekak merupakan salah satu bentuk karya sastra
                        yang menyajikan cerita singkat dengan alur sederhana namun sarat
                        makna. Materi ini disusun untuk membantu peserta didik memahami
                        konsep, struktur, serta nilai yang terkandung dalam cerkak.
                    </p>
                </div>

                {/* ================= Materi 1 ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        1. Pengertian Cerkak
                    </h2>

                    <p className="text-gray-700 text-justify leading-relaxed">
                        Cerkak adalah singkatan dari cerita cekak, yaitu cerita pendek
                        yang disajikan secara ringkas dan padat. Cerkak biasanya
                        mengangkat peristiwa sederhana yang dekat dengan kehidupan
                        sehari-hari, namun tetap mengandung pesan moral yang dapat
                        dipetik oleh pembaca.
                    </p>
                </article>

                {/* ================= Materi 2 ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        2. Struktur Cerkak
                    </h2>

                    <p className="text-gray-700 text-justify leading-relaxed">
                        Struktur cerkak terdiri dari beberapa bagian penting, yaitu
                        orientasi, komplikasi, dan resolusi. Orientasi berisi pengenalan
                        tokoh dan latar cerita. Komplikasi menyajikan permasalahan yang
                        dihadapi tokoh, sedangkan resolusi berisi penyelesaian dari
                        permasalahan tersebut.
                    </p>
                </article>

                {/* ================= Materi 3 ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        3. Nilai Moral dalam Cerkak
                    </h2>

                    <p className="text-gray-700 text-justify leading-relaxed">
                        Setiap cerkak umumnya mengandung nilai moral yang dapat dijadikan
                        pembelajaran bagi pembaca. Nilai tersebut dapat berupa sikap
                        kejujuran, tanggung jawab, kerja keras, dan kepedulian terhadap
                        sesama. Pembaca diharapkan mampu memahami serta menerapkan nilai
                        tersebut dalam kehidupan sehari-hari.
                    </p>
                </article>
                {/* ================= Materi 4 ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        4. Pengertian Cerkak
                    </h2>

                    <p className="text-gray-700 text-justify leading-relaxed">
                        Cerkak adalah singkatan dari cerita cekak, yaitu cerita pendek
                        yang disajikan secara ringkas dan padat. Cerkak biasanya
                        mengangkat peristiwa sederhana yang dekat dengan kehidupan
                        sehari-hari, namun tetap mengandung pesan moral yang dapat
                        dipetik oleh pembaca.
                    </p>
                </article>

                {/* ================= Materi 5 ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        5. Struktur Cerkak
                    </h2>

                    <p className="text-gray-700 text-justify leading-relaxed">
                        Struktur cerkak terdiri dari beberapa bagian penting, yaitu
                        orientasi, komplikasi, dan resolusi. Orientasi berisi pengenalan
                        tokoh dan latar cerita. Komplikasi menyajikan permasalahan yang
                        dihadapi tokoh, sedangkan resolusi berisi penyelesaian dari
                        permasalahan tersebut.
                    </p>
                </article>

                {/* ================= Materi 6 ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        6. Nilai Moral dalam Cerkak
                    </h2>

                    <p className="text-gray-700 text-justify leading-relaxed">
                        Setiap cerkak umumnya mengandung nilai moral yang dapat dijadikan
                        pembelajaran bagi pembaca. Nilai tersebut dapat berupa sikap
                        kejujuran, tanggung jawab, kerja keras, dan kepedulian terhadap
                        sesama. Pembaca diharapkan mampu memahami serta menerapkan nilai
                        tersebut dalam kehidupan sehari-hari.
                    </p>
                </article>
            </section>
        </>
    );
}

Materi.layout = (page: any) => <AppLayout>{page}</AppLayout>;
