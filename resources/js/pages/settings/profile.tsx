import { Head, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { FormEvent } from 'react';
import AppLayout from '@/layouts/app-layout';
import AdminLayout from '@/layouts/dashboard/app-layout';
import SettingsNav from '@/components/settings/SettingsNav';
import { useInitials } from '@/hooks/use-initials';
import type { SharedData } from '@/types';

export default function ProfileSettings() {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user;
    const getInitials = useInitials();

    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        patch('/settings/profile', {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Profil berhasil diperbarui',
                    timer: 2000,
                    showConfirmButton: false,
                });
            },
        });
    };

    const content = (
        <div className="mx-auto max-w-2xl space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Pengaturan Akun</h1>
                <p className="text-sm text-gray-500">Kelola informasi profil dan keamanan akun Anda</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
                <SettingsNav />

                <form onSubmit={submit} className="space-y-5 p-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xl font-semibold text-white">
                            {getInitials(user.name)}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">{user.name}</p>
                            <p className="text-sm capitalize text-gray-500">{user.role}</p>
                        </div>
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Nama</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                            required
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                            required
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div className="pt-1">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                        >
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    if (user.role === 'guru') {
        return (
            <AdminLayout>
                <Head title="Pengaturan Profil" />
                {content}
            </AdminLayout>
        );
    }

    return (
        <AppLayout>
            <Head title="Pengaturan Profil" />
            {content}
        </AppLayout>
    );
}
