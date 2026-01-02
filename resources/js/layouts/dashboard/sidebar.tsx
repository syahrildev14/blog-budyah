import { Link, usePage } from "@inertiajs/react";
import {
    Home,
    Smile,
    Zap,
    Heart,
    Users,
    BookOpen,
    Layers,
    Upload,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
    sidebarOpen: boolean;
}

export default function Sidebar({ sidebarOpen }: SidebarProps) {
    const [openKategori, setOpenKategori] = useState<boolean>(false);
    const { url } = usePage(); // Ambil path saat ini

    // Helper untuk mengecek active
    const isActive = (path: string) => url === path;

    return (
        <aside
            className={`bg-red-700 text-white w-64 transition-all duration-300 sticky top-0
      ${sidebarOpen ? "flex" : "hidden"} md:flex flex-col`}
        >
            {/* Header / Brand */}
            <div className="p-6 text-xl font-bold border-b border-red-600">
                Dashboard Guru
            </div>

            <nav className="p-4 flex-1 flex flex-col gap-2">
                {/* Main Menu */}
                <Link
                    href="/guru/dashboard"
                    className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 ${isActive("/guru/dashboard") ? "bg-red-500" : ""
                        }`}
                >
                    <Home size={18} />
                    <span>Dashboard</span>
                </Link>

                <Link
                    href="/guru/cerita-lucu"
                    className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 ${isActive("/guru/cerita-lucu") ? "bg-red-500" : ""
                        }`}
                >
                    <Smile size={18} />
                    <span>Cerita Lucu</span>
                </Link>

                <Link
                    href="/guru/cerita-misteri"
                    className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 ${isActive("/guru/cerita-misteri") ? "bg-red-500" : ""
                        }`}
                >
                    <Zap size={18} />
                    <span>Cerita Misteri</span>
                </Link>

                <Link
                    href="/guru/cerita-cinta"
                    className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 ${isActive("/guru/cerita-cinta") ? "bg-red-500" : ""
                        }`}
                >
                    <Heart size={18} />
                    <span>Cerita Cinta</span>
                </Link>

                <Link
                    href="/guru/cerita-anak"
                    className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 ${isActive("/guru/cerita-anak") ? "bg-red-500" : ""
                        }`}
                >
                    <Users size={18} />
                    <span>Cerita Anak</span>
                </Link>

                <Link
                    href="/guru/cerita-kehidupan"
                    className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 ${isActive("/guru/cerita-kehidupan") ? "bg-red-500" : ""
                        }`}
                >
                    <BookOpen size={18} />
                    <span>Cerita Kehidupan</span>
                </Link>

                {/* Dropdown Kategori */}
                <button
                    onClick={() => setOpenKategori(!openKategori)}
                    className="flex w-full items-center justify-between px-4 py-2 rounded hover:bg-red-500"
                >
                    <div className="flex items-center gap-3">
                        <Layers size={18} />
                        <span>Kategori Jenjang</span>
                    </div>
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${openKategori ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {/* Dropdown Items */}
                <div
                    className={`ml-10 flex flex-col gap-1 overflow-hidden transition-all duration-300
          ${openKategori ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    {[
                        { name: "SD", path: "/guru/kategori/sd" },
                        { name: "SMP", path: "/guru/kategori/smp" },
                        { name: "SMA", path: "/guru/kategori/sma" },
                        { name: "UMUM", path: "/guru/kategori/umum" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-red-500 text-sm ${isActive(item.path) ? "bg-red-500" : ""
                                }`}
                        >
                            <Layers size={12} />
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </aside>
    );
}
