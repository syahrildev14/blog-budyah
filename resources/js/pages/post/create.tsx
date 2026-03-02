import { Head, useForm, Link } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import Swal from 'sweetalert2'
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

export default function Create() {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    category: '',
    content: '',
    thumbnail: null as File | null,
  })

  const editorRef = useRef<any>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editorRef.current) {
      setData('content', editorRef.current.getContent())
    }

    post('/post', {
      forceFormData: true,
      onSuccess: () => {
        reset()
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Artikel berhasil diupload',
          showConfirmButton: false,
          timer: 2000,
        })
      },
    })
  }

  return (
    <>
      <Head title="Tambah Artikel" />

      <section className="bg-white rounded-md p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Upload Cerita</h1>

        <form onSubmit={submit} className="space-y-6">

          {/* Judul */}
          <div>
            <label className="block font-medium mb-1">Judul Artikel</label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Kategori */}
          <div>
            <label className="block font-medium mb-1">Kategori</label>
            <select
              value={data.category}
              onChange={(e) => setData('category', e.target.value)}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">-- Pilih Kategori --</option>
              <option value="SD">SD</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
              <option value="Umum">Umum</option>
            </select>
            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Konten */}
          <div>
            <label className="block font-medium mb-1">Isi Artikel</label>
            <Editor
              apiKey="" // self-host mode
              licenseKey="gpl"
              onInit={(_, editor) => (editorRef.current = editor)}
              init={{
                height: 450,
                menubar:'edit insert view format',
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
            {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block font-medium mb-1">Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setData('thumbnail', e.target.files ? e.target.files[0] : null)}
            />
            {errors.thumbnail && <p className="text-red-600 text-sm mt-1">{errors.thumbnail}</p>}
          </div>

          {/* Action */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={processing}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
            >
              {processing ? 'Menyimpan...' : 'Simpan'}
            </button>

            <Link href="/dashboard" className="px-6 py-2 border rounded-md">
              Batal
            </Link>
          </div>
        </form>
      </section>
    </>
  )
}

Create.layout = (page: any) => <AppLayout>{page}</AppLayout>
