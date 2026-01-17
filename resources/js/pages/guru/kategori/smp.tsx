import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/layouts/dashboard/app-layout";
import Swal from "sweetalert2";
import { useRef, useState } from "react";

import { Editor } from '@tinymce/tinymce-react';

// TinyMCE core
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/models/dom'

// Skin + content styling
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'

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
import { RiDeleteBinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";



interface Post {
    id: number;
    title: string;
    thumbnail: string;
    content: string;
    created_at: string;
}


interface SMPProps {
    posts: Post[];
}

export default function SMP({ posts }: SMPProps) {
    const [editing, setEditing] = useState<null | Post>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editImage, setEditImage] = useState<File | null>(null);
    const [editContent, setEditContent] = useState("");
    const editorRef = useRef<any>(null);


    // Function Handel Edit
    const handleEdit = (post: Post) => {
        setEditing(post);
        setEditTitle(post.title);
        setEditContent(post.content);
        setEditImage(null);
    };


    const handleUpdate = () => {
        if (!editing) return;

        const fd = new FormData();
        fd.append('_method', 'PUT');
        fd.append('title', editTitle);
        fd.append('content', editContent);

        if (editImage) {
            fd.append('thumbnail', editImage);
        }

        router.post(`/guru/kategori/${editing.id}`, fd, {
            forceFormData: true,
            onSuccess: () => {
                Swal.fire("Berhasil", "Data berhasil diupdate", "success");
                setEditing(null);
            }
        });
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Data yang dihapus tidak bisa dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
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
            <Head title="Kategori SMP" />

            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Kategori SMP</h2>

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
                                    <td className="border px-4 py-2 align-middle">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="bg-red-600 hover:bg-red-700 duration-200 text-white px-3 py-2 rounded flex items-center gap-1 cursor-pointer"
                                            >
                                                <RiDeleteBinFill />
                                                Delete
                                            </button>

                                            <button
                                                onClick={() => handleEdit(post)}
                                                className="bg-yellow-500 hover:bg-yellow-600 duration-200 text-white px-3 py-2 rounded flex items-center gap-1 cursor-pointer"
                                            >
                                                <FaEdit />
                                                Edit
                                            </button>
                                        </div>
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

            {/*===== Modal Edit =====*/}
            {editing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded shadow-lg w-[550px] max-h-[90vh] overflow-y-auto p-5 space-y-4">

                        <h3 className="font-semibold text-lg">Edit Artikel</h3>

                        <label className="text-sm text-gray-600 font-medium">Judul</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />

                        <label className="text-sm text-gray-600 font-medium">Gambar</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setEditImage(e.target.files?.[0] ?? null)}
                            className="w-full border p-2 rounded"
                        />

                        {/* preview thumbnail lama */}
                        <img
                            src={`/storage/${editing.thumbnail}`}
                            className="w-32 rounded border"
                        />

                        <Editor
                            apiKey="" // self-host mode
                            licenseKey="gpl"
                            onInit={(_, editor) => (editorRef.current = editor)}
                            value={editContent}
                            init={{
                                height: 450,
                                menubar: 'edit insert view format',
                                promotion: false,
                                branding: false,
                                skin: 'oxide',
                                content_css: 'default',

                                plugins: 'advlist autolink lists link image media table code quickbars autoresize',

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
                                    const formData = new FormData();
                                    formData.append('file', blobInfo.blob());

                                    fetch('/upload-image', {
                                        method: 'POST',
                                        body: formData,
                                        headers: {
                                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                                        },
                                    })
                                        .then(res => res.json())
                                        .then(json => success(json.location))
                                        .catch(() => failure('Upload failed'));
                                }) as any,
                            }}
                            onEditorChange={(content) => setEditContent(content)}
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setEditing(null)}
                                className="px-3 py-1 bg-gray-400 text-white rounded cursor-pointer hover:bg-gray-500 duration-200"
                            >
                                Batal
                            </button>

                            <button
                                type="button"
                                onClick={handleUpdate}
                                className="px-3 py-1 bg-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-700 duration-200"
                            >
                                Update
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </AdminLayout>
    );
}
