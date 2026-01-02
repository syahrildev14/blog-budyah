import Img1 from "@/assets/budyah.png";

import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Tentang() {
    return (
        <>
            <Head title="Tentang Kami" />

            <section>
                {/* ================= Header Tentang ================= */}
                <div className="bg-white rounded-md p-6">
                    <h1 className="text-3xl font-bold mb-4 text-red-600">
                        Apa itu E-Sastra Cerkak?
                    </h1>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        E-Sastra Cerkak adalah wahana kreatif digital yang dirancang khusus sebagai wadah bagi siswa, mahasiswa, guru, maupun masyarakat umum untuk mengeksplorasi kemampuan menulis sastra Jawa, khususnya Cerkak (Cerita Cekak). Kami hadir sebagai jembatan antara kekayaan tradisi sastra Jawa dengan kemudahan teknologi modern.
                        <br /><br />
                        E-Sastra Cerkak bukan sekadar situs web biasa, melainkan sebuah Sanggar Kreatif Digital. Di sini, setiap orang memiliki kesempatan untuk belajar, mempraktikkan teknik menulis cerita berbahasa Jawa, dan mempublikasikan karya mereka. Kami percaya bahwa Bahasa Jawa adalah bahasa yang kaya akan rasa dan nilai budi pekerti, dan menulis cerkak adalah salah satu cara terbaik untuk menjaga nyala api budaya tersebut agar tidak pudar ditelan zaman.
                    </p>
                </div>

                {/* ================= Siapa Bisa Bergabung? ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        Siapa yang Bisa Bergabung?
                    </h2>
                    <ul className="text-gray-700 text-justify leading-relaxed list-decimal pl-4">
                        <li>Siswa & Mahasiswa: Tempat melatih kemampuan berbahasa Jawa secara aktif dan kreatif di luar jam sekolah.</li>
                        <li>Guru & Pendidik: Sarana media pembelajaran interaktif untuk mata pelajaran Bahasa Jawa.</li>
                        <li>Penulis & Penggemar Sastra: Siapa pun yang ingin berbagi cerita, gagasan, dan imajinasi dalam balutan bahasa ibu yang adiluhung</li>
                    </ul>
                </article>

                {/* ================= Siapa Bisa Bergabung? ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4">
                    <h2 className="text-xl font-semibold">
                        Mengapa Menulis di E-Sastra Cerkak?

                    </h2>
                    <ul className="text-gray-700 text-justify leading-relaxed list-decimal pl-4">
                        <li>Kemudahan Akses: Menulis bisa dilakukan kapan saja dan di mana saja melalui ponsel atau komputer.</li>
                        <li>Membangun Komunitas: Bertemu dan berdiskusi dengan sesama pecinta sastra Jawa dari berbagai daerah.</li>
                        <li>Portofolio Digital: Simpan karya Anda secara rapi sebagai rekam jejak kreativitas yang bisa diakses selamanya.</li>
                    </ul>
                </article>
                <p className='text-center leading-relaxed px-10 text-red-600 py-4 font-semibold italic text-lg'>"Bahasa Jawa adalah pusaka jati diri dan akar martabat bangsa. Jangan biarkan ia sunyi, suarakan jiwa dan gagasanmu melalui guratan cerkak yang akan abadi melintasi masa."</p>

                {/* ================= Perkenalan ================= */}
                <div className="bg-white rounded-md p-6">
                    <h1 className="text-3xl font-bold mb-4 text-red-600">
                        Mengenal Sosok di Balik E-Sastra Cerkak

                    </h1>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Dyah Kurniawati adalah seorang pendidik sekaligus sastrawan yang mendedikasikan hidupnya untuk pelestarian bahasa dan sastra Jawa. Saat ini, beliau mengabdi sebagai Guru Bahasa Jawa di MTsN Kota Madiun.
                        <br /><br />Baginya, menulis adalah jalan perjuangan budaya. Jejak kreativitasnya telah terukir melalui ratusan karya yang tersebar di berbagai media bergengsi berbahasa Jawa, seperti Jaya Baya, Panjebar Semangat, Djaka Lodang, Lensa Sastra, hingga harian Solopos.
                        <br /><br />Sebagai penulis yang produktif, lulusan Universitas Negeri Surabaya (UNESA) ini telah melahirkan berbagai buku bernuansa Jawa, di antaranya; Cuwilan Critaku Uga Critamu, Tradisi Upacara Kematian Sebentuk Keberagaman Khazanah Budaya Jawa di Desa Kuwiran, Maneka Pawarta (Gambang Suling, Gong, Seni, lan Budaya), Keluk Dupa Tengah Wengi, serta puluhan buku antologi bersama penulis nasional lainnya.
                        <br /><br />Dedikasinya dalam dunia literasi tidak hanya membuahkan karya, tetapi juga berbagai penghargaan bergengsi, salah satunya sebagai Penulis Terproduktif di tingkat Kemenag Provinsi Jawa Timur. Melalui platform E-Sastra Cerkak ini, beliau berharap dapat menularkan semangat menulis kepada generasi muda agar bahasa Jawa tetap hidup, relevan, dan terus berkembang di era digital. "Genggam Teknologinya, Lestarikan Sastranya!"
                    </p>
                </div>
                <img src={Img1} alt="Dyah Kurniawati" className="mx-auto min-w-auto shadow-xl" />

                {/* ================= Tentang Pemilik ================= */}
                <article className="bg-white rounded-md px-6 py-2 space-y-4 mt-10">
                    <h2 className="text-xl font-semibold">
                        Tentang Pemilik

                    </h2>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        <span className="font-bold ">Dyah Kurniawati</span> merupakan penulis bahasa dan sastra Jawa yang sekarang mengabdi sebagai Guru Bahasa Jawa MTsN Kota Madiun. Ratusan tulisannya tersebar diberbagai media berbahasa Jawa seperti Jaya Baya, Panjebar Semangat, Djaka Lodang, Solopos, dan sebagainya. Buku karyanya berjudul “Cuwilan Critaku Uga Critamu, Tradisi Upacara Kematian Sebentuk Keberagaman Khazanah Budaya Jawa di Desa Kuwiran, Maneka Pawarta (Gambang Suling, Gong, Seni, lan Budaya), Keluk Dupa tengah Wengi, dan puluhan buku antologi. Dengan menulis, lulusan Universitas Negeri Surabaya ini juga telah meraih beberapa penghargaan lainnya dan juga penulis Bahamersa dan Sastra Jawa.
                    </p>
                </article>
            </section>
        </>
    );
}

Tentang.layout = (page: any) => <AppLayout>{page}</AppLayout>;
