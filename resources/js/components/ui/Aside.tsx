import { Link } from '@inertiajs/react';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';
import { ReactNode } from 'react';

export default function Aside() {
    return (
        <aside className="w-72 space-y-6 sticky top-36 self-start">
            {/* ================= Follow Us ================= */}
            <div className="bg-white shadow-sm rounded-md p-4">
                <h3 className="font-semibold mb-4">Follow Us</h3>

                <div className="space-y-2 text-sm">
                    <SocialItem label="Facebook" icon={<FaFacebookF />} bg="bg-blue-600" />
                    <SocialItem label="Twitter" icon={<FaTwitter />} bg="bg-sky-500" />
                    <SocialItem label="LinkedIn" icon={<FaLinkedinIn />} bg="bg-blue-700" />
                    <SocialItem label="Instagram" icon={<FaInstagram />} bg="bg-violet-600" />
                    <SocialItem label="YouTube" icon={<FaYoutube />} bg="bg-red-500" />
                </div>
            </div>

            {/* ================= News Feed ================= */}
            <div className="bg-white shadow-sm rounded-md p-4">
                <h3 className="font-semibold mb-4">News Feed</h3>

                <div className="space-y-4">
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </div>
            </div>
        </aside>
    );
}

/* ================= Types ================= */

interface SocialItemProps {
    label: string;
    icon: ReactNode;
    bg: string;
}

/* ================= Components ================= */

function SocialItem({ label, icon, bg }: SocialItemProps) {
    return (
        <a
            href="#"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${bg}
                        hover:opacity-90 transition`}
        >
            <span className="text-lg">{icon}</span>
            <span className="font-medium">{label}</span>
        </a>
    );
}

function NewsItem() {
    return (
        <Link href="#" className="flex gap-3 group">
            <img
                src="https://picsum.photos/80/80"
                alt="news"
                className="w-16 h-16 object-cover rounded"
            />
            <div>
                <p className="text-sm font-medium group-hover:text-red-600 transition">
                    Contoh judul berita singkat
                </p>
                <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
        </Link>
    );
}
