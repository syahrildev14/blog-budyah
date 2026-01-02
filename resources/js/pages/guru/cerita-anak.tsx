import { Head, useForm, router } from "@inertiajs/react";
import AdminLayout from "@/layouts/dashboard/app-layout";
import Swal from "sweetalert2";

interface Post {
    id: number;
    title: string;
    thumbnail: string;
    created_at: string;
}

interface CeritaAnakProps {
    posts: Post[];
}

export default function CeritaAnak({ posts }: CeritaAnakProps) {
    const { data, setData, post, processing, reset } = useForm<{
        title: string;
        content: string;
        thumbnail: File | null;
        category: string;
    }>({
        title: "",
        content: "",
        thumbnail: null,
        category: "CERITA_ANAK",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post("/guru/kategori", {
            forceFormData: true,
            onSuccess: () => {
                reset();
                Swal.fire("Berhasil", "Data berhasil ditambahkan", "success");
            },
            onError: () => {
                Swal.fire("Gagal", "Gagal menambahkan data", "error");
            },
        });
    };


    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Data yang dihapus tidak bisa dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonText: "Batal",
            confirmButtonText: "Ya, hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/guru/kategori/${id}`);
            }
        });
    };

    console.log(posts);


    return (
        <AdminLayout>
            <Head title="Cerita Anak" />

            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Cerita Anak</h2>

                {/* FORM TAMBAH DATA */}
                <form onSubmit={submit} encType="multipart/form-data" className="mb-6 space-y-4 border p-4 rounded bg-gray-50">
                    <h3 className="font-semibold text-lg">Tambah Cerita Anak</h3>

                    <input
                        type="text"
                        placeholder="Judul cerita"
                        className="w-full border rounded p-2"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Isi cerita"
                        className="w-full border rounded p-2 h-32"
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        required
                    />

                    <input
                        type="file"
                        accept="image/*"
                        className="w-full border rounded p-2"
                        onChange={(e) =>
                            setData("thumbnail", e.target.files ? e.target.files[0] : null)
                        }
                        required
                    />

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        {processing ? "Menyimpan..." : "Simpan"}
                    </button>
                </form>

                {/* TABEL */}
                <table className="w-full table-auto border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">Gambar</th>
                            <th className="border px-4 py-2">Judul</th>
                            <th className="border px-4 py-2">Tanggal Upload</th>
                            <th className="border px-4 py-2 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length ? (
                            posts.map((post) => (
                                <tr key={post.id}>
                                    <td className="border px-4 py-2">
                                        <img
                                            src={`/storage/${post.thumbnail}`}
                                            className="h-16 w-28 object-cover rounded"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{post.title}</td>
                                    <td className="border px-4 py-2">
                                        {new Date(post.created_at).toLocaleDateString("id-ID")}
                                    </td>
                                    <td className="border px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-4 text-gray-500">
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
