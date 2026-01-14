import { Link, usePage } from '@inertiajs/react';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from 'react-icons/fa';
import { ReactNode } from 'react';

/* ================= Types ================= */

interface NewsPost {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    created_at: string;
}

interface SocialItemProps {
    label: string;
    icon: ReactNode;
    bg: string;
    path: string;
}

/* ================= Component ================= */

export default function Aside() {
    const { newsPosts = [] } = usePage().props as {
        newsPosts?: NewsPost[];
    };

    return (
        <aside
            className="
                w-full md:w-72
                space-y-6
                md:sticky md:top-36
                self-start
            "
        >
            {/* ================= Follow Us ================= */}
            <div className="bg-white shadow-sm rounded-md p-4">
                <h3 className="font-semibold mb-4">Follow Us</h3>

                {/* mobile: grid | desktop: column */}
                <div className="grid grid-cols-2 gap-2 md:flex md:flex-col text-sm">
                    <SocialItem label="Facebook" icon={<FaFacebookF />} path='https://www.facebook.com/dyah.kurniawati.948' bg="bg-blue-600" />
                    <SocialItem label="Instagram" icon={<FaInstagram />} path='https://www.instagram.com/dyahmarkonah/' bg="bg-violet-600" />
                    <SocialItem label="YouTube" icon={<FaYoutube />} path='https://www.youtube.com/@dyahkurniawati864' bg="bg-red-500" />
                    <SocialItem label="Whatsapp" icon={<FaWhatsapp />} path='https://wa.me/6282301278565' bg="bg-green-600" />
                </div>
            </div>

            {/* ================= News Feed ================= */}
            <div className="bg-white shadow-sm rounded-md p-4">
                <h3 className="font-semibold mb-4">News Feed</h3>

                <div className="space-y-4">
                    {newsPosts.length > 0 ? (
                        newsPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/cerkak/${post.slug}`}
                                className="flex gap-3 group"
                            >
                                <img
                                    src={`/storage/${post.thumbnail}`}
                                    alt={post.title}
                                    className="w-16 h-16 object-cover rounded"
                                />

                                <div>
                                    <p className="text-sm font-medium group-hover:text-red-600 transition line-clamp-2">
                                        {post.title}
                                    </p>

                                    <span className="text-xs text-gray-500">
                                        {new Date(post.created_at).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">Belum ada berita</p>
                    )}
                </div>
            </div>
        </aside>
    );
}

/* ================= Sub Component ================= */

function SocialItem({ label, icon, bg, path }: SocialItemProps) {
    return (
        <a
            href={path}
            className={`
                flex items-center gap-3 px-3 py-2
                rounded-md text-white ${bg}
                hover:opacity-90 transition
                justify-center md:justify-start
            `}
        >
            <span className="text-lg">{icon}</span>
            <span className="font-medium text-sm">{label}</span>
        </a>
    );
}
