import { Head, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { FormEvent } from 'react';
import AppLayout from '@/layouts/app-layout';
import AdminLayout from '@/layouts/dashboard/app-layout';
import SettingsNav from '@/components/settings/SettingsNav';
import type { SharedData } from '@/types';

export default function PasswordSettings() {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user;

    const { data, setData, put, processing, errors, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        put('/settings/password', {
            onSuccess: () => {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Password berhasil diperbarui',
                    timer: 2000,
                    showConfirmButton: false,
                });
            },
            onError: () => {
                reset('current_password');
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
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Password Saat Ini</label>
                        <input
                            type="password"
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                            autoComplete="current-password"
                            required
                        />
                        {errors.current_password && <p className="mt-1 text-sm text-red-600">{errors.current_password}</p>}
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Password Baru</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                            autoComplete="new-password"
                            required
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Konfirmasi Password Baru</label>
                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                            autoComplete="new-password"
                            required
                        />
                        {errors.password_confirmation && (
                            <p className="mt-1 text-sm text-red-600">{errors.password_confirmation}</p>
                        )}
                    </div>

                    <div className="pt-1">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                        >
                            {processing ? 'Menyimpan...' : 'Perbarui Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    if (user.role === 'guru') {
        return (
            <AdminLayout>
                <Head title="Pengaturan Password" />
                {content}
            </AdminLayout>
        );
    }

    return (
        <AppLayout>
            <Head title="Pengaturan Password" />
            {content}
        </AppLayout>
    );
}
