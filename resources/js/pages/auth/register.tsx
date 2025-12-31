import { Form, Head } from '@inertiajs/react';
// import { register } from '@/routes';

interface RegisterProps {
    status?: string;
}

export default function Register({ status }: RegisterProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Head title="Register" />
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Create your account</h2>
                <p className="text-sm text-gray-600 mb-6 text-center">
                    Enter your details below to register
                </p>

                {status && (
                    <div className="mb-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <Form method="post" action="/register" className="flex flex-col gap-4">
                    {({ processing, errors }) => (
                        <>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    autoFocus
                                    placeholder="Your Name"
                                    className="px-3 py-2 border rounded focus:ring-1 focus:ring-red-600"
                                />
                                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="email@example.com"
                                    className="px-3 py-2 border rounded focus:ring-1 focus:ring-red-600"
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
                                    placeholder="Password"
                                    className="px-3 py-2 border rounded focus:ring-1 focus:ring-red-600"
                                />
                                {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password_confirmation">Confirm Password</label>
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    required
                                    placeholder="Confirm Password"
                                    className="px-3 py-2 border rounded focus:ring-1 focus:ring-red-600"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition mt-2"
                            >
                                {processing ? 'Loading...' : 'Register'}
                            </button>
                        </>
                    )}
                </Form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-red-600 hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
}
