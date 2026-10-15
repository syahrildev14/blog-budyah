import { Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import {
    LayoutDashboard,
    Smile,
    Ghost,
    Heart,
    Baby,
    BookOpen,
    Layers,
    ChevronDown,
    LogOut,
    Settings,
    X,
} from "lucide-react";
import { useState } from "react";
import Logo from "@/assets/logo.png";

interface SidebarProps {
    sidebarOpen: boolean;
    onClose: () => void;
}

const mainMenu = [
    { name: "Dashboard", path: "/guru/dashboard", icon: LayoutDashboard },
    { name: "Cerita Lucu", path: "/guru/cerita-lucu", icon: Smile },
    { name: "Cerita Misteri", path: "/guru/cerita-misteri", icon: Ghost },
    { name: "Cerita Cinta", path: "/guru/cerita-cinta", icon: Heart },
    { name: "Cerita Anak", path: "/guru/cerita-anak", icon: Baby },
    { name: "Cerita Kehidupan", path: "/guru/cerita-kehidupan", icon: BookOpen },
];

const kategoriMenu = [
    { name: "SD / MI", path: "/guru/kategori/sd" },
    { name: "SMP / MTs", path: "/guru/kategori/smp" },
    { name: "SMA / SMK", path: "/guru/kategori/sma" },
    { name: "Umum", path: "/guru/kategori/umum" },
];

export default function Sidebar({ sidebarOpen, onClose }: SidebarProps) {
    const { url } = usePage();
    const [openKategori, setOpenKategori] = useState(() =>
        kategoriMenu.some((item) => item.path === url)
    );

    const isActive = (path: string) => url === path;

    const handleLogout = () => {
        Swal.fire({
            title: "Keluar dari akun?",
            text: "Anda akan diarahkan ke halaman login.",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonText: "Batal",
            confirmButtonText: "Ya, keluar",
        }).then((result) => {
            if (result.isConfirmed) {
                router.post("/logout", {}, { onSuccess: () => router.visit("/login") });
            }
        });
    };

    return (
        <>
            {/* Mobile backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={onClose}
                    aria-hidden
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-200 bg-white text-gray-700 shadow-xl transition-transform duration-300 md:sticky md:top-0 md:h-screen md:translate-x-0 md:shadow-none ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Brand */}
                <div className="flex items-center justify-between gap-2 border-b border-gray-100 px-5 py-5">
                    <Link href="/" className="flex items-center gap-2 overflow-hidden">
                        <img
                            src={Logo}
                            alt="E-Cerkak"
                            className="h-9 w-9 flex-shrink-0 rounded-md bg-gray-50 object-contain p-1 ring-1 ring-gray-100"
                        />
                        <div className="truncate leading-tight">
                            <p className="truncate text-sm font-bold text-gray-900">E-Cerkak</p>
                            <p className="truncate text-[11px] text-gray-400">Dashboard Guru</p>
                        </div>
                    </Link>
                    <button
                        onClick={onClose}
                        className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 md:hidden"
                        aria-label="Tutup menu"
                    >
                        <X size={18} />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
                    <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Menu Utama
                    </p>
                    {mainMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={onClose}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                    isActive(item.path)
                                        ? "bg-red-50 text-red-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                                }`}
                            >
                                <Icon size={18} />
                                <span className="truncate">{item.name}</span>
                            </Link>
                        );
                    })}

                    <p className="px-3 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Kategori Jenjang
                    </p>
                    <button
                        onClick={() => setOpenKategori(!openKategori)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-red-600"
                    >
                        <span className="flex items-center gap-3">
                            <Layers size={18} />
                            Kategori
                        </span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${openKategori ? "rotate-180" : ""}`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            openKategori ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="space-y-1 py-1 pl-10 pr-1">
                            {kategoriMenu.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={onClose}
                                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                                        isActive(item.path)
                                            ? "bg-red-50 font-semibold text-red-600"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-red-600"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>

                <div className="space-y-1 border-t border-gray-100 p-3">
                    <Link
                        href="/settings/profile"
                        onClick={onClose}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                            url.startsWith("/settings")
                                ? "bg-red-50 text-red-600"
                                : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                        }`}
                    >
                        <Settings size={18} />
                        Pengaturan
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600"
                    >
                        <LogOut size={18} />
                        Keluar
                    </button>
                </div>
            </aside>
        </>
    );
}
