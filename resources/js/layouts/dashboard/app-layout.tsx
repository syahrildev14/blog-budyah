import { ReactNode, useState } from "react";
import Sidebar from "@/layouts/dashboard/sidebar";
import Header from "@/layouts/dashboard/header";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
