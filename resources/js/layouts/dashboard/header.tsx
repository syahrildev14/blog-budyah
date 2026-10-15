import { Menu, ChevronRight, LogOut, ExternalLink } from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { useInitials } from "@/hooks/use-initials";
import type { SharedData } from "@/types";

interface HeaderProps {
  toggleSidebar: () => void;
  title?: string; // Optional title override
  breadcrumbs?: { name: string; href?: string }[]; // Breadcrumb array
}

export default function Header({ toggleSidebar, title, breadcrumbs }: HeaderProps) {
  const { url, props } = usePage<SharedData>();
  const getInitials = useInitials();
  const user = props.auth?.user;

  // Title default berdasarkan prop atau URL
  const defaultTitle =
    title ||
    url
      .split("/")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" / ") || "Dashboard";

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
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 px-4 py-3 backdrop-blur-sm md:px-6 md:py-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            aria-label="Buka menu"
          >
            <Menu size={20} />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-gray-900 md:text-xl">{defaultTitle}</h1>

            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="mt-0.5 hidden sm:block">
                <ol className="flex items-center gap-1 truncate text-xs text-gray-500">
                  {breadcrumbs.map((crumb, idx) => (
                    <li key={idx} className="flex items-center gap-1 truncate">
                      {crumb.href ? (
                        <a href={crumb.href} className="truncate transition hover:text-red-600">
                          {crumb.name}
                        </a>
                      ) : (
                        <span className="truncate">{crumb.name}</span>
                      )}
                      {idx < breadcrumbs.length - 1 && <ChevronRight size={12} />}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 sm:flex"
          >
            <ExternalLink size={16} />
            Lihat Situs
          </Link>

          <div className="h-6 w-px bg-gray-200 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white">
              {user ? getInitials(user.name) : "?"}
            </div>
            <div className="hidden leading-tight md:block">
              <p className="truncate text-sm font-semibold text-gray-800 max-w-[10rem]">
                {user?.name ?? "Guru"}
              </p>
              <p className="text-xs text-gray-500">Guru</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
            aria-label="Keluar"
            title="Keluar"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
