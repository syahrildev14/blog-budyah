import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/layouts/dashboard/app-layout";
import Swal from "sweetalert2";


interface Post {
    id: number;
    title: string;
    thumbnail: string;
    created_at: string;
}

interface SDProps {
    posts: Post[];
}

export default function SD({ posts }: SDProps) {
    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Data yang dihapus tidak bisa dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/guru/kategori/${id}`, {
                    onSuccess: () => {
                        Swal.fire(
                            'Terhapus!',
                            'Data berhasil dihapus.',
                            'success'
                        );
                    },
                    onError: () => {
                        Swal.fire(
                            'Gagal!',
                            'Terjadi kesalahan saat menghapus data.',
                            'error'
                        );
                    }
                });
            }
        });
    };


    return (
        <AdminLayout>
            <Head title="Kategori SD" />

            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Kategori SD</h2>

                <table className="w-full table-auto border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2 text-left">Gambar</th>
                            <th className="border px-4 py-2 text-left">Judul</th>
                            <th className="border px-4 py-2 text-left">Tanggal Upload</th>
                            <th className="border px-4 py-2 text-center">Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">
                                        <img
                                            src={`/storage/${post.thumbnail}`}
                                            alt={post.title}
                                            className="h-20 w-32 object-cover rounded"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{post.title}</td>
                                    <td className="border px-4 py-2">
                                        {new Date(post.created_at).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </td>
                                    <td className="border px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                        >
                                            Delete
                                        </button>



                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="border px-4 py-2 text-center text-gray-500"
                                >
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
