import { Head, useForm, Link } from '@inertiajs/react'
import AppLayout from '@/layouts/app-layout'
import Swal from 'sweetalert2'


export default function Create() {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    category: '',
    content: '',
    thumbnail: null as File | null,
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

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
          timerProgressBar: true,
        })
      },
    })
  }


  return (
    <>
      <Head title="Tambah Artikel" />

      <section className="bg-white rounded-md p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Upload Artikel
        </h1>

        <form onSubmit={submit} className="space-y-6">
          {/* Judul */}
          <div>
            <label className="block font-medium mb-1">
              Judul Artikel
            </label>
            <input
              type="text"
              value={data.title}
              onChange={(e) =>
                setData('title', e.target.value)
              }
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Kategori
            </label>

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

            {errors.category && (
              <p className="text-red-600 text-sm mt-1">
                {errors.category}
              </p>
            )}
          </div>


          {/* Konten */}
          <div>
            <label className="block font-medium mb-1">
              Isi Artikel
            </label>
            <textarea
              rows={8}
              value={data.content}
              onChange={(e) =>
                setData('content', e.target.value)
              }
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.content && (
              <p className="text-red-600 text-sm mt-1">
                {errors.content}
              </p>
            )}
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block font-medium mb-1">
              Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setData(
                  'thumbnail',
                  e.target.files
                    ? e.target.files[0]
                    : null
                )
              }
            />
            {errors.thumbnail && (
              <p className="text-red-600 text-sm mt-1">
                {errors.thumbnail}
              </p>
            )}
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

            <Link
              href="/dashboard"
              className="px-6 py-2 border rounded-md"
            >
              Batal
            </Link>
          </div>
        </form>
      </section>
    </>
  )
}

Create.layout = (page: any) => <AppLayout>{page}</AppLayout>
