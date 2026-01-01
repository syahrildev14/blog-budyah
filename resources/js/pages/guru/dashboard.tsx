import { Head, Link } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'

const menus = [
    { label: 'Cerita Lucu', slug: 'lucu' },
    { label: 'Cerita Misteri', slug: 'misteri' },
    { label: 'Cerita Cinta', slug: 'cinta' },
    { label: 'Cerita Anak', slug: 'anak' },
    { label: 'Cerita Kehidupan', slug: 'kehidupan' },
]

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Guru" />

            <h1 className="text-3xl font-bold mb-8">
                Dashboard Guru
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {menus.map((menu) => (
                    <Link
                        key={menu.slug}
                        href={`/guru/cerita/${menu.slug}`}
                        className="bg-white rounded-lg p-6 shadow hover:bg-red-50 transition"
                    >
                        <h2 className="text-xl font-semibold">
                            {menu.label}
                        </h2>
                    </Link>
                ))}

                {/* Upload */}
                <Link
                    href="/guru/upload"
                    className="bg-red-600 text-white rounded-lg p-6 shadow hover:bg-red-700 transition"
                >
                    <h2 className="text-xl font-semibold">
                        ➕ Upload Cerita
                    </h2>
                </Link>
            </div>
        </>
    )
}

Dashboard.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>
