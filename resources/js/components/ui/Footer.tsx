import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="h-12 bg-gray-100 border-t flex items-center justify-center gap-3 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} E-Sastra Cerkak. All rights reserved.</span>
            <span className="text-gray-300">|</span>
            <Link href="/admin/login" className="hover:text-red-600 hover:underline">
                Login Guru
            </Link>
        </footer>
    );
}
