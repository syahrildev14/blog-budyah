import { Link, usePage } from '@inertiajs/react';
import { User, KeyRound } from 'lucide-react';

const tabs = [
    { name: 'Profil', href: '/settings/profile', icon: User },
    { name: 'Password', href: '/settings/password', icon: KeyRound },
];

export default function SettingsNav() {
    const { url } = usePage();

    return (
        <div className="flex gap-1 border-b border-gray-100 px-2">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = url.startsWith(tab.href);

                return (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition ${
                            active
                                ? 'border-red-600 text-red-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <Icon size={16} />
                        {tab.name}
                    </Link>
                );
            })}
        </div>
    );
}
