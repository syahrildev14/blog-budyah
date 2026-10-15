import { Head, router } from "@inertiajs/react";
import AdminLayout from "@/layouts/dashboard/app-layout";
import { handleImageError } from "@/lib/utils";
import Pagination from "@/components/ui/Pagination";
import type { Paginated } from "@/types";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import { Globe, X } from "lucide-react";

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

interface UmumProps {
    posts: Paginated<Post>;
}

export default function Umum({ posts }: UmumProps) {
    const [editing, setEditing] = useState<null | Post>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editImage, setEditImage] = useState<File | null>(null);
    const [editContent, setEditContent] = useState("");
    const editorRef = useRef<any>(null);

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
                        Swal.fire('Terhapus!', 'Data berhasil dihapus.', 'success');
                    },
                    onError: () => {
                        Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus data.', 'error');
                    }
                });
            }
        });
    };

    return (
        <AdminLayout>
            <Head title="Kategori Umum" />

            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <Globe size={20} />
                        </div>
                        <div>
                            <h2 className="font-bold text-gray-900">Kategori Umum</h2>
                            <p className="text-sm text-gray-500">Artikel yang dikirim siswa pada kategori umum</p>
                        </div>
                    </div>
                    <span className="hidden text-sm text-gray-500 sm:inline">{posts.data.length} artikel</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-500">
                                <th className="px-5 py-3">Gambar</th>
                                <th className="px-5 py-3">Judul</th>
                                <th className="px-5 py-3">Tanggal Upload</th>
                                <th className="px-5 py-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {posts.data.length > 0 ? (
                                posts.data.map((post) => (
                                    <tr key={post.id} className="transition hover:bg-gray-50">
                                        <td className="px-5 py-3">
                                            <img
                                                src={`/storage/${post.thumbnail}`}
                                                onError={handleImageError}
                                                alt={post.title}
                                                className="h-16 w-24 rounded-lg object-cover ring-1 ring-gray-200"
                                            />
                                        </td>
                                        <td className="px-5 py-3 font-medium text-gray-800">{post.title}</td>
                                        <td className="px-5 py-3 text-gray-500">
                                            {new Date(post.created_at).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </td>
                                        <td className="px-5 py-3">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleEdit(post)}
                                                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-100"
                                                >
                                                    <FaEdit size={13} />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="inline-flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                                                >
                                                    <RiDeleteBinFill size={13} />
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-5 py-10 text-center text-gray-400">
                                        Belum ada artikel pada kategori ini.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="border-t border-gray-100 px-5 py-4">
                    <Pagination links={posts.links} />
                </div>
            </div>

            {/*===== Modal Edit =====*/}
            {editing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">Edit Artikel</h3>
                            <button
                                onClick={() => setEditing(null)}
                                className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">Judul</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">Gambar</label>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`/storage/${editing.thumbnail}`}
                                        onError={handleImageError}
                                        alt={editing.title}
                                        className="h-16 w-24 flex-shrink-0 rounded-lg object-cover ring-1 ring-gray-200"
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setEditImage(e.target.files?.[0] ?? null)}
                                        className="block w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-red-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-red-600 hover:file:bg-red-100"
                                    />
                                </div>
                                <p className="mt-1 text-xs text-gray-500">Format JPG, PNG, atau WEBP, maks. 2MB. Kosongkan jika tidak ingin mengganti.</p>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">Isi Artikel</label>
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
                            </div>

                            <div className="flex justify-end gap-3 pt-1">
                                <button
                                    type="button"
                                    onClick={() => setEditing(null)}
                                    className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="button"
                                    onClick={handleUpdate}
                                    className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
