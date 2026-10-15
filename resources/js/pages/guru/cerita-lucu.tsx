import { Head, useForm, router } from "@inertiajs/react";
import AdminLayout from "@/layouts/dashboard/app-layout";
import { handleImageError } from "@/lib/utils";
import Pagination from "@/components/ui/Pagination";
import type { Paginated } from "@/types";
import Swal from "sweetalert2";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Smile } from "lucide-react";

import { Editor } from '@tinymce/tinymce-react'
import { useRef, useState } from 'react'

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
    content: string;
    thumbnail: string;
    created_at: string;
}

interface CeritaLucuProps {
    posts: Paginated<Post>;
}

export default function CeritaLucu({ posts }: CeritaLucuProps) {
    const { data, setData, post, processing, reset } = useForm<{
        title: string;
        content: string;
        thumbnail: File | null;
        category: string;
    }>({
        title: "",
        content: "",
        thumbnail: null,
        category: "CERITA_LUCU",
    });

    const editorRef = useRef<any>(null);
    const [editingId, setEditingId] = useState<number | null>(null);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingId) {
            router.post(`/guru/kategori/${editingId}`, {
                _method: "PUT",
                ...data,
            }, {
                forceFormData: true,
                onSuccess: () => {
                    reset();
                    setEditingId(null);
                    Swal.fire("Berhasil", "Data berhasil diupdate", "success");
                },
                onError: () => Swal.fire("Gagal", "Gagal mengupdate data", "error"),
            });
        } else {
            post("/guru/kategori", {
                forceFormData: true,
                onSuccess: () => {
                    reset();
                    Swal.fire("Berhasil", "Data berhasil ditambahkan", "success");
                },
                onError: () => Swal.fire("Gagal", "Gagal menambahkan data", "error"),
            });
        }
    };

    const handleCancelEdit = () => {
        reset();
        setEditingId(null);
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

    const handleEdit = (post: Post) => {
        setData({
            title: post.title,
            content: post.content ?? "",
            thumbnail: null,
            category: "CERITA_LUCU"
        });

        setEditingId(post.id);

        if (editorRef.current) {
            editorRef.current.setContent(post.content ?? "");
        }
    };

    return (
        <AdminLayout>
            <Head title="Cerita Lucu" />

            <div className="space-y-6">
                {/* FORM CARD */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <Smile size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">
                                {editingId ? "Edit Cerita Lucu" : "Tambah Cerita Lucu"}
                            </h2>
                            <p className="text-sm text-gray-500">Kelola artikel pada kategori Cerita Lucu</p>
                        </div>
                    </div>

                    <form onSubmit={submit} encType="multipart/form-data" className="space-y-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Judul Cerita</label>
                            <input
                                type="text"
                                placeholder="Tulis judul cerita..."
                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Isi Cerita</label>
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
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Gambar Thumbnail</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-red-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-red-600 hover:file:bg-red-100"
                                onChange={(e) =>
                                    setData("thumbnail", e.target.files ? e.target.files[0] : null)
                                }
                                required={!editingId}
                            />
                            <p className="mt-1 text-xs text-gray-500">Format JPG, PNG, atau WEBP, maks. 2MB.</p>
                        </div>

                        <div className="flex items-center gap-3 pt-1">
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                            >
                                {processing ? "Menyimpan..." : editingId ? "Update" : "Simpan"}
                            </button>
                            {editingId && (
                                <button
                                    type="button"
                                    onClick={handleCancelEdit}
                                    className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* TABLE CARD */}
                <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                        <h3 className="font-semibold text-gray-900">Daftar Cerita Lucu</h3>
                        <span className="text-sm text-gray-500">{posts.data.length} artikel</span>
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
                                {posts.data.length ? (
                                    posts.data.map((post) => (
                                        <tr key={post.id} className="transition hover:bg-gray-50">
                                            <td className="px-5 py-3">
                                                <img
                                                    src={`/storage/${post.thumbnail}`}
                                                    onError={handleImageError}
                                                    alt={post.title}
                                                    className="h-14 w-20 rounded-lg object-cover ring-1 ring-gray-200"
                                                />
                                            </td>
                                            <td className="px-5 py-3 font-medium text-gray-800">{post.title}</td>
                                            <td className="px-5 py-3 text-gray-500">
                                                {new Date(post.created_at).toLocaleDateString("id-ID")}
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
            </div>
        </AdminLayout>
    );
}
