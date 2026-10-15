import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import Logo from '@/assets/logo.png';

interface AdminLoginProps {
    status?: string;
}

export default function AdminLogin({ status }: AdminLoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        router.post('/login', { email, password }, {
            onError: (err) => {
                setErrors(err);
            },
            onFinish: () => setProcessing(false),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 text-accent">
            <Head title="Login Guru" />
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <div className="mb-6 flex flex-col items-center text-center">
                    <img src={Logo} alt="E-Cerkak" className="h-12 w-12 object-contain" />
                    <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck size={20} className="text-red-600" />
                        <h2 className="text-2xl font-bold">Login Guru</h2>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Khusus untuk pengelola konten E-Cerkak</p>
                </div>

                {status && (
                    <div className="mb-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            autoFocus
                            autoComplete="email"
                            placeholder="email@example.com"
                            className="px-3 py-2 border rounded focus:ring-1 focus:ring-red-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            required
                            autoComplete="current-password"
                            placeholder="Password"
                            className="px-3 py-2 border rounded focus:ring-1 focus:ring-red-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition mt-2"
                    >
                        {processing ? 'Memproses...' : 'Masuk'}
                    </button>
                </form>
            </div>
        </div>
    );
}
