import { Menu, ChevronRight } from "lucide-react";
import { usePage } from "@inertiajs/react";

interface HeaderProps {
  toggleSidebar: () => void;
  title?: string; // Optional title override
  breadcrumbs?: { name: string; href?: string }[]; // Breadcrumb array
}

export default function Header({ toggleSidebar, title, breadcrumbs }: HeaderProps) {
  const { url } = usePage();

  // Title default berdasarkan prop atau URL
  const defaultTitle =
    title ||
    url
      .split("/")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" / ") || "Dashboard";

  return (
    <header className="flex flex-col bg-white shadow px-6 py-4">
      {/* Top bar: toggle menu + Hi Admin */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          <Menu />
        </button>

        <div className="flex-shrink-0">
          <span className="text-sm text-gray-600">Hi' Admin!</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold">{defaultTitle}</h1>

      {/* Breadcrumb */}
      <nav className="flex items-center justify-between mt-1 text-sm text-gray-500">
        {/* Breadcrumb kiri */}
        <ol className="flex items-center gap-1 flex-1 truncate">
          {breadcrumbs && breadcrumbs.length > 0
            ? breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1 truncate">
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-gray-700 transition truncate">
                    {crumb.name}
                  </a>
                ) : (
                  <span className="truncate">{crumb.name}</span>
                )}
                {idx < breadcrumbs.length - 1 && <ChevronRight size={14} />}
              </li>
            ))
            : null}
        </ol>
      </nav>
    </header>
  );
}
