import { ReactNode } from 'react';
import Header from '@/components/ui/Header';
import Aside from '@/components/ui/Aside';
import Footer from '@/components/ui/Footer';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <Header />

            {/* Content */}
            <div className="flex-1">
                <div className="
                    max-w-7xl mx-auto
                    flex flex-col md:flex-row
                    gap-6 px-4 md:px-6 py-6
                ">
                    {/* Main Content */}
                    <main className="flex-1 bg-white rounded-md p-6">
                        {children}
                    </main>

                    {/* Aside */}
                    <aside className="w-full md:w-72">
                        <Aside />
                    </aside>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
