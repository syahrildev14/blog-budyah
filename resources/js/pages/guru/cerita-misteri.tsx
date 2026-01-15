import { Head, useForm, router } from "@inertiajs/react";
import AdminLayout from "@/layouts/dashboard/app-layout";
import Swal from "sweetalert2";

import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'

// TinyMCE core
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/models/dom'
import 'tinymce/skins/ui/oxide/skin.min.css'

// Plugins
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/code'
import 'tinymce/plugins/quickbars'
import 'tinymce/plugins/autoresize'


interface Post {
    id: number;
    title: string;
    thumbnail: string;
    created_at: string;
}

interface CeritaMisteriProps {
    posts: Post[];
}

export default function CeritaMisteri({ posts }: CeritaMisteriProps) {
    const { data, setData, post, processing, reset } = useForm<{
        title: string;
        content: string;
        thumbnail: File | null;
        category: string;
    }>({
        title: "",
        content: "",
        thumbnail: null,
        category: "CERITA_MISTERI",
    });

    const editorRef = useRef<any>(null);

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
            <Head title="Cerita Misteri" />

            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Cerita Misteri</h2>

                {/* FORM TAMBAH DATA */}
                <form onSubmit={submit} encType="multipart/form-data" className="mb-6 space-y-4 border p-4 rounded bg-gray-50">
                    <h3 className="font-semibold text-lg">Tambah Cerita Misteri</h3>

                    <input
                        type="text"
                        placeholder="Judul cerita"
                        className="w-full border rounded p-2"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />

                    <Editor
                        apiKey="" // self-host mode
                        licenseKey="gpl"
                        onInit={(_, editor) => (editorRef.current = editor)}
                        init={{
                            height: 450,
                            menubar: 'edit insert view format',
                            promotion: false,
                            branding: false,
                            skin: 'oxide',
                            content_css: 'default',

                            plugins:
                                'advlist autolink lists link image media table code quickbars autoresize'
                            ,
                            toolbar:
                                'undo redo | styles | blocks | bold italic underline | forecolor | alignleft aligncenter alignright | bullist numlist | outdent indent | link image media | removeformat | code',
                            content_style: `
                  body {
                    font-family: Inter, Arial, sans-serif;
                    font-size: 16px;
                    color: #111;
                  }
                `,
                            images_upload_url: '/upload-image',
                            automatic_uploads: true,
                            images_upload_credentials: true,

                            images_upload_handler: ((blobInfo: any, _progress: any, success: any, failure: any) => {
                                const formData = new FormData()
                                formData.append('file', blobInfo.blob())

                                fetch('/upload-image', {
                                    method: 'POST',
                                    body: formData,
                                    headers: {
                                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                                    },
                                })
                                    .then(res => res.json())
                                    .then(json => success(json.location))
                                    .catch(() => failure('Upload failed'))
                            }) as any,
                        }}
                        onEditorChange={(content) => setData('content', content)}
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
