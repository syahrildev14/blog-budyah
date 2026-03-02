import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import DriveButton from '@/components/utils/ButtonGdrive';

export default function Materi() {
    return (
        <>
            <Head title="Materi Cerkak" />

            <section>
                {/* ================= Header Materi ================= */}
                <div className="bg-white rounded-md md:mb-10">
                    <h1 className="text-4xl font-bold mb-4 ">
                        Apa Iku Cerkak?
                    </h1>

                </div>

                {/* ================= Titikane Cerkak (Ciri-Ciri) ================= */}
                <h2 className="text-2xl font-bold  bg-red-600 text-white text-center p-3 mb-3">Unit I: Sinau Makna <br /><span className='italic font-light text-sm'>"Ndhudhuk Makna, Amrih Sampurna"</span></h2>
                <p className="leading-relaxed font-semibold text-lg text-center italic md:w-1/2 mx-auto text-red-600">
                    Cerkak (Cerita Cekak) yaiku salah sijine sastra Jawa awujud prosa kang nyritakake cuplikan
                    panguripan kanthi ringkes, mentes, lan padhet.
                </p>
                <article className="bg-white rounded-md  py-2 space-y-4">
                    <h2 className="text-lg font-semibold">
                        1. Wujude Crita
                    </h2>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Cekak lan Padhet: Critane ringkes, ora mbulet, lan langsung marang bakuning rembug (inti masalah).
                        Wujude Gancaran: Ditulis nganggo basa prosa (narasi) sing bebas, dudu puisi.
                        Sakeplasan rampung: Lumrahe bisa diwaca kanthi wektu sing sedhela utawa "sekali duduk" (kira-kira 10 nganti 30 menit).
                    </p>
                </article>
                {/* ================================ */}
                <article className="bg-white rounded-md py-2 space-y-4">
                    <h2 className="text-lg font-semibold">
                        2. Isi lan Cacahing Tembung
                    </h2>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Cacahing Tembung: Tembung-tembunge ora luwih saka 10.000 tembung.
                        Dawane Kaca: Biasane mung ana 3 nganti 10 kaca folio.
                        Asipat Fiktif: Critane asipat khayalan utawa imajinasi pangripta (penulis), sanadyan asring dijupuk saka kedadeyan nyata ing masyarakat.
                    </p>
                </article>
                {/* ================================ */}
                <article className="bg-white rounded-md py-2 space-y-4">
                    <h2 className="text-lg font-semibold">
                        3. Paraga lan Alur
                    </h2>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Paragane Sithik: Tokoh sing ana ing njero crita mung sithik (winates), lan mung fokus marang paraga utama.
                        Alur Tunggal: Mung nduweni alur crita siji, ora ana sub-alur sing nggawé bingung.
                        Nasibe Paraga: Critane ora nganti njlentrehake owah-owahan nasib paragane kanthi jero (beda karo novel).
                    </p>
                </article>
                {/* ================================ */}
                <article className="bg-white rounded-md py-2 space-y-4">
                    <h2 className="text-lg font-semibold">
                        4. Fokus Masalah
                    </h2>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Siji Konflik: Fokus critane mung ana ing siji masalah utawa konflik utama sing dialami dening paraga.
                        Basa Prasaja: Nggunakake basa sing gampang dingerteni dening wong akeh (komunikatif)
                    </p>
                </article>

                {/* Tabel novel dan fabel */}
                <div className="w-full overflow-x-auto">
                    <h2 className="text-lg text-center font-semibold p-4">
                        Bedane cerkak karo  karya sastra liyane (novel lan fabel)
                    </h2>
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">Titik Bandhing</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Cerkak (Cerita Pendek)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Novel</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Fabel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Dawane Crita</td>
                                <td className="border border-gray-300 px-4 py-2">Cekak cukup diwaca salunggahan (sekali duduk).</td>
                                <td className="border border-gray-300 px-4 py-2">Dawane nggambarake lakon sing jero.</td>
                                <td className="border border-gray-300 px-4 py-2">Cukup cekak.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Paraga/Tokoh</td>
                                <td className="border border-gray-300 px-4 py-2">Manungsa (fokus/sedikit).</td>
                                <td className="border border-gray-300 px-4 py-2">Manungsa (akeh lan kompleks).</td>
                                <td className="border border-gray-300 px-4 py-2">Kewan sing tumindak kaya manungsa.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Alur</td>
                                <td className="border border-gray-300 px-4 py-2">Fokus ing siji kedadeyan utama.</td>
                                <td className="border border-gray-300 px-4 py-2">Alur sing rimbat lan njlimet.</td>
                                <td className="border border-gray-300 px-4 py-2">Alur prasaja (sederhana).</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Pesen Moral</td>
                                <td className="border border-gray-300 px-4 py-2">Sinandi (tersirat) ing njeron crita.</td>
                                <td className="border border-gray-300 px-4 py-2">Jembar lan maneka warna.</td>
                                <td className="border border-gray-300 px-4 py-2">Cetha (tersurat) ing pungkasan.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ================== Balungan Crita (Struktur Cerkak) =================== */}
                <div>
                    <h2 className="text-lg text-center font-semibold p-4">
                        Balunganing Crita (Struktur Cerkak)
                    </h2>
                    {/* ========================================================= */}
                    <article className="bg-white rounded-md py-2 space-y-2">
                        <h2 className="text-lg font-semibold">
                            1. Tetepungan (Orientasi)
                        </h2>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            Iki minangka dalan pembuka crita. Ing kene penulis wiwit ngenalake jagad critane marang pamaca.
                        </p>
                        <p className='text-gray-700'><span className='font-semibold '>Isine : </span>Iki minangka dalan pembuka crita. Ing kene penulis wiwit ngenalake jagad critane marang pamaca.</p>
                        <p className='text-gray-700'><span className='font-semibold'>Tujuane : </span>Supaya pembaca ngrasa akrab lan ngerti kahanan wiwitan sadurunge ana masalah.</p>
                        <p className='italic text-gray-700'><span className='font-semibold not-italic'>Tuladha : </span>"Rina nangis kamisesegen lungguh ing sela-selane Dewi lan Hani. Dheweke ngewel merga thong-thongen bubar weruh wewayangan obah-obah ing suwalike korden cendhela."</p>
                    </article>

                    {/* ========================================================= */}
                    <article className="bg-white rounded-md py-2 space-y-2">
                        <h2 className="text-lg font-semibold">
                            2. Munculing Prakara (Komplikasi)
                        </h2>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            Iki perangan nalika crita wiwit "panas". Masalah utawa konflik wiwit teka ngganggu paraga utama.
                        </p>
                        <p className='text-gray-700'><span className='font-semibold '>Isine : </span>Ana prastawa sing nggawe paraga utama bingung, susah, utawa kudu milih dalan urip.</p>
                        <p className='text-gray-700'><span className='font-semibold'>Tujuane : </span>Nggugah rasa panasaran lan emosi pembaca.</p>
                        <p className='italic text-gray-700'><span className='font-semibold not-italic'>Tuladha : </span>"Ujug-ujug kabeh meneng lan nglirik arahe cendhela cedhak tlundhakan. Kabeh ngrasa mengkirig weruh wewayangan obah-obah ing suwalike cendhela kuwi..."</p>
                    </article>

                    {/* ========================================================= */}
                    <article className="bg-white rounded-md py-2 space-y-2">
                        <h2 className="text-lg font-semibold">
                            3. Puncakining Prakara (Klimaks)
                        </h2>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            Iki titik paling dhuwur utawa paling tegang ing njerone crita (bagian paling panas saka komplikasi).
                        </p>
                        <p className='text-gray-700'><span className='font-semibold '>Isine : </span>Masalah sing mau mumbul tekan titik sing paling gawat, ing kene nasibe paraga bakal ditemtokake.</p>
                        <p className='text-gray-700'><span className='font-semibold'>Tujuane : </span>Menehi efek ketegangan sing maksimal marang pamaca.</p>
                        <p className='italic text-gray-700'><span className='font-semibold not-italic'>Tuladha : </span>"Durung ilang kagete, mak breng kasusul ambu dupa sumribit saka arah cendhela mau. Rina lan kanca-kancane njerit bareng-bareng amarga korden mau kaya-kaya arep dibukak dening tangan sing ora katon!"</p>
                    </article>

                    {/* ========================================================= */}
                    <article className="bg-white rounded-md py-2 space-y-2">
                        <h2 className="text-lg font-semibold">
                            4. Pangudhare Prakara (Resolusi)
                        </h2>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            Sawise tekan puncak masalah, alur crita wiwit mudhun. Masalah sing mau ruwet wiwit nemu dalan pepadhang utawa solusi.
                        </p>
                        <p className='text-gray-700'><span className='font-semibold '>Isine : </span>Carane paraga utama ngrampungake masalahe. Pungkasan crita bisa dadi Senang (Happy Ending) utawa Susah (Sad Ending).</p>
                        <p className='text-gray-700'><span className='font-semibold'>Tujuane : </span>Menehi jawaban marang pembaca kepiye nasibe paraga.</p>
                        <p className='italic text-gray-700'><span className='font-semibold not-italic'>Tuladha : </span>"Pranyata sing neng suwalike korden mau dudu setan, nanging Bu Mondhok sing sengaja nindakake kuwi supaya bocah-bocah ndang meneng lan turu."</p>
                    </article>

                    {/* ========================================================= */}
                    <article className="bg-white rounded-md py-2 space-y-2">
                        <h2 className="text-lg font-semibold">
                            5. Weling/Pesen (Koda)
                        </h2>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            Iki perangan pungkasan sing isine dadi dudutan utawa hikmah saka crita kasebut.
                        </p>
                        <p className='text-gray-700'><span className='font-semibold '>Isine : </span>Pesen moral utawa amanat sing pengin disampekake penulis marang pamaca.</p>
                        <p className='text-gray-700'><span className='font-semibold'>Tujuane : </span>Menehi piwulang becik supaya bisa ditiru dening pamaca.</p>
                        <p className='italic text-gray-700'><span className='font-semibold not-italic'>Tuladha : </span>"Saka kedadeyan kuwi, Rina lan kanca-kancane sadhar yen dadi bocah sekolah kuwi kudu tertib lan ngrungokake aturane wong tuwa, supaya ora gawe susah wong liya."</p>
                    </article>

                    <div className="text-base leading-tight space-y-3 text-justify">
                        {/* ====================== */}
                        {/* UNIT II: BEDHAH RASA   */}
                        {/* ====================== */}
                        <h2 className="text-2xl font-bold  bg-red-600 text-white text-center p-3 mb-3">Unit II: Bedhah Rasa (Design)<br /><span className='italic font-light text-sm'>"Ngrancang nyawa, nata prastawa, mbedhah jeroaning karya"</span></h2>
                        <p>
                            Sadurunge nulis, kita kudu ngerti apa wae “bahan” sing dibutuhake supaya cerkak dadi apik.
                            Bahan kasebut sinebut Unsur Intrinsik lan Unsur Ekstrinsik.
                        </p>

                        {/* A. Intrinsik */}
                        <h3 className="font-semibold">A. Unsur Intrinsik (Saka Njeron Crita)</h3>
                        <p>
                            Unsur intrinsik yaiku unsur sing mbangun karya saka njeron fisike karya kasebut, ibarat omah
                            yaiku cagak, keramik, lan payone.
                        </p>

                        {/* 1. Tema */}
                        <h4 className="font-semibold">1. Tema</h4>
                        <p>
                            Tema yaiku gagasan pokok utawa dhasaring crita (kayata: kamanungsan, katresnan, lingkungan).
                        </p>
                        <p className="font-medium">Tuladha:</p>
                        <p>
                            Ing cerkak <span className="italic">Keluk Dupa Tengah Wengi</span> temane “Kedhisiplinan lan
                            piwulang urip.” Crita iki ngrembug babagan carane nggulawenthah santri supaya tertib lan
                            manut aturan asrama kanthi cara kreatif (senajan medeni).
                        </p>

                        {/* 2. Paraga lan Watak */}
                        <h4 className="font-semibold">2. Paraga lan Watak (Penokohan)</h4>
                        <p>
                            Paraga yaiku wong sing nglakoni crita lan kepiye sipat lan tumindake. Penokohan yaiku cara
                            panulis nggambarake watak paraga kasebut.
                        </p>

                        {/* Jinis 1 */}
                        <p className="font-medium">a. Jinis Paraga Adhedhasar Watak</p>

                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Protagonis:</span> paraga becik utawa disenengi pembaca.
                            </li>
                            <li>
                                <span className="font-semibold">Antagonis:</span> paraga ala sing nimbulaké konflik.
                            </li>
                            <li>
                                <span className="font-semibold">Tritagonis:</span> paraga penengah sing menehi solusi.
                            </li>
                        </ul>

                        {/* Jinis 2 */}
                        <p className="font-medium">b. Jinis Paraga Adhedhasar Perane</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Paraga Utama:</span> paraga sing dadi punjere crita.
                            </li>
                            <li>
                                <span className="font-semibold">Paraga Tambahan:</span> paraga sing mung dadi pelengkap.
                            </li>
                        </ul>

                        {/* Teknik */}
                        <p className="font-medium">c. Teknik Penokohan</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Analitik:</span> panulis langsung njelasake sipate paraga.
                            </li>
                            <li>
                                <span className="font-semibold">Dramatik:</span> sipat katon liwat tumindak, dialog, lan
                                kahanan.
                            </li>
                        </ul>

                        {/* Tuladha Dramatis */}
                        <p className="font-medium">Tuladha Paraga:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Rina, Dewi, Hani, Naya, Nurul:</span> sembrono, angel
                                dikandhani, seneng rame, nanging sejatine jirih.
                            </li>
                            <li>
                                <span className="font-semibold">Umi Siti:</span> sabar, kawigaten, lan kreatif.
                            </li>
                            <li>
                                <span className="font-semibold">Ustadz Imam:</span> wicaksana lan nduweni ide unik.
                            </li>
                        </ul>

                        {/* 3. Latar */}
                        <h4 className="font-semibold">3. Latar (Setting)</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Latar Panggonan:</span> omah, sekolah, sawah, lsp.
                            </li>
                            <li>
                                <span className="font-semibold">Latar Wektu:</span> esuk, sore, mbiyen, lsp.
                            </li>
                            <li>
                                <span className="font-semibold">Latar Swasana:</span> medeni, sedhih, rame, lsp.
                            </li>
                        </ul>

                        <p className="font-medium">Tuladha ing Cerkak:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Panggonan:</span> kamar mahad putri.
                            </li>
                            <li>
                                <span className="font-semibold">Wektu:</span> tengah wengi (jam 12–3).
                            </li>
                            <li>
                                <span className="font-semibold">Swasana:</span> medeni → rame → ayem.
                            </li>
                        </ul>

                        {/* ============================ */}
                        {/* Glosarium                    */}
                        {/* ============================ */}
                        <h3 className="font-semibold mt-3">Bausastra / Glosarium Unit II</h3>

                        <table className="w-full border border-gray-300 text-xs">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-2 py-1">Tembung / Istilah</th>
                                    <th className="border px-2 py-1">Tegese</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Analitik", "Cara nggambarake watak paraga kanthi langsung."],
                                    ["Antiklimaks", "Tahap nalika ketegangan masalah wiwit mudhun."],
                                    ["Dramatik", "Cara nggambarake paraga kanthi ora langsung."],
                                    ["Eksposisi", "Pengenalan awal paraga lan latar."],
                                    ["Flashback", "Alur mundur kanggo nyritakake masa lalu."],
                                    ["Interpretasi", "Nafsir makna isi crita."],
                                    ["Konflik", "Pasulayan utawa perkara sing dadi sumber masalah."],
                                    ["Latar Swasana", "Kahanan psikologis (medeni, sedhih, rame)."],
                                    ["Linear", "Alur sing mlaku lurus/urut."],
                                    ["Majas", "Gaya basa kanggo nambah kaendahan crita."],
                                    ["Nabet", "Membekas ing ati pamaca."],
                                    ["Pangudhare Prakara", "Resolusi utawa rampunge masalah."],
                                    ["Pepindhan", "Perbandingan nganggo 'kaya' utawa 'lir'."],
                                    ["Sudut Pandang", "Posisine panulis ing crita."],
                                    ["Tokoh Figuran", "Paraga tambahan sing njangkepi swasana."],
                                    ["Twist", "Pungkasan sing ora disangka-sangka."]
                                ].map(([a, b], i) => (
                                    <tr key={i}>
                                        <td className="border px-2 py-1">{a}</td>
                                        <td className="border px-2 py-1">{b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* ====================== */}
                        {/* UNIT III: NGOLAH BASA  */}
                        {/* ====================== */}
                        <h2 className="text-2xl font-bold  bg-red-600 text-white text-center p-3 mb-3">Unit III: Ngolah Basa (Develop)<br /><span className='italic font-light text-sm'>"Mantesi tembung, ngronce ukara, ngidupake crita"</span></h2>
                        <p>
                            Fokus unit iki yaiku kepiye carane panulis "ngracik" basa supaya crita ora mung dadi laporan
                            kedadeyan, nanging dadi karya sastra sing urip lan nengsemake.
                        </p>

                        {/* Definisi */}
                        <p>
                            Ngolah basa tegese kapinteran milih tembung (diksi), nata ukara (sintaksis), lan nggunakake
                            gaya basa (majas) supaya pamaca bisa ngrasakake apa sing ana ing sajroning crita.
                        </p>

                        {/* Bagian utama */}
                        <h3 className="font-semibold mt-2">1. Perangan Utama Ngolah Basa</h3>

                        <p className="font-medium">A. Pilihan Tembung (Diksi)</p>
                        <p>
                            Pilihan tembung kudu pas utawa mentes kanggo nggambarake kahanan. Tembung sing luwih spesifik
                            nduweni daya pangaribawa luwih kuat tinimbang tembung umum.
                        </p>
                        <p className="font-medium">Tuladha:</p>
                        <p>
                            Tinimbang nulis mung <span className="italic">"wedi"</span>, panulis milih tembung{" "}
                            <span className="italic">"ngewel"</span> utawa <span className="italic">"mengkirig"</span>.
                        </p>
                        <p className="font-medium">Analisis:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="italic">Ngewel:</span> nggambarake kedhering awak amarga wedi banget.
                            </li>
                            <li>
                                <span className="italic">Mengkirig:</span> rasa medeni sing dirasakake ing kulit utawa gulu.
                            </li>
                        </ul>

                        {/* Rinengga */}
                        <p className="font-medium mt-2">B. Basa Rinengga (Lelaning Basa)</p>
                        <p>
                            Basa rinengga digunakake kanggo nambahi kaendahan. Salah sijine yaiku onomatope lan citraan.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Onomatope:</span> tiruan swara kayata{" "}
                                <span className="italic">"mak breng"</span>.
                            </li>
                            <li>
                                <span className="font-semibold">Citraan:</span> pancerane ing pancaindra (pangambu,
                                pangrasa, pandheleng).
                            </li>
                        </ul>

                        <p className="font-medium">Tuladha:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Onomatope: <span className="italic">"Mak breng"</span> (swara ambu dupa sing teka ujug-ujug).
                            </li>
                            <li>
                                Citraan Pangambu: <span className="italic">"Ambu dupa sumribit"</span>.
                            </li>
                            <li>
                                Citraan Pandheleng:{" "}
                                <span className="italic">"Wewayangan obah-obah ing suwalike korden."</span>
                            </li>
                        </ul>

                        {/* Dialog */}
                        <p className="font-medium mt-2">C. Pacelathon sing Urip (Dialog)</p>
                        <p>
                            Dialog kudu sesuai unggah-ungguh basa lan dadi piranti kanggo nuduhake watak paraga lan
                            nerusake alur crita.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Ngoko Lugu:</span> antarane bocah utawa kanca akrab.
                            </li>
                            <li>
                                <span className="font-semibold">Krama Alus:</span> marang wong tuwa utawa dihormati.
                            </li>
                        </ul>
                        <p className="font-medium">Tuladha:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Ngoko: <span className="italic">"Eh, wis jam setengah siji lo Cah, ayo turu."</span>
                            </li>
                            <li>
                                Krama: <span className="italic">"Inggih, muga-muga aman sateruse."</span>
                            </li>
                        </ul>

                        {/* Narrative Flow */}
                        <p className="font-medium mt-2">D. Ngronce Alur (Narrative Flow)</p>
                        <p>
                            Ukara kudu mili kanthi kepenak. Gunakake tembung panggandheng (nanging, sawise kuwi, tanpa
                            dinyana) kanggo njaga alur narasi.
                        </p>
                        <p className="font-medium">Tuladha Ukara Pambuka:</p>
                        <p className="italic">"Kamar mahad putri geger bengi kuwi."</p>

                        {/* Aplikasi ing teks */}
                        <h3 className="font-semibold mt-3">
                            2. Aplikasi Ngolah Basa ing Cerkak "Keluk Dupa Tengah Wengi"
                        </h3>

                        <p className="font-medium">A. Tembung Tiruan Swara (Onomatope)</p>
                        <p>
                            Tuladha: <span className="italic">"Durung ilang kagete, mak breng kasusul ambu dupa..."</span>
                        </p>
                        <p className="font-medium">Analisis:</p>
                        <p>
                            Onomatope luwih urip tinimbang tembung <span className="italic">"ambune dupa kuwat"</span>.
                        </p>

                        <p className="font-medium mt-2">B. Tembung Kahanan (Diksi Emosional)</p>
                        <p>
                            Tuladha:{" "}
                            <span className="italic">
                                "Dheweke ngewel merga thong-thongen bubar weruh wewayangan..."
                            </span>
                        </p>
                        <p className="font-medium">Analisis:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="italic">Ngewel</span> = wedi nganti kedher.
                            </li>
                            <li>
                                <span className="italic">Thong-thongen</span> = bayangan sing isih nempel ing mripat.
                            </li>
                        </ul>

                        <p className="font-medium mt-2">C. Citraan (Pancaindra)</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Pangambu: <span className="italic">"Ambu dupa sumribit."</span>
                            </li>
                            <li>
                                Pangrasa: <span className="italic">"Gulu padha mengkirig."</span>
                            </li>
                        </ul>

                        <p className="font-medium mt-2">D. Unggah-ungguh Basa (Karakterisasi)</p>
                        <p>
                            Bedane watak paraga bisa katon saka cara dheweke guneman. Wong sabar ora padha karo wong
                            brangasan.
                        </p>

                        {/* Tabel Perbandingan */}
                        <p className="font-medium mt-3">Bandhingan Ukara (Show vs Tell)</p>
                        <table className="w-full border border-gray-300 text-xs">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-2 py-1">No</th>
                                    <th className="border px-2 py-1">Ukara Biasa</th>
                                    <th className="border px-2 py-1">Ukara Ngolah Basa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-2 py-1">1</td>
                                    <td className="border px-2 py-1">"Rina nangis amarga wedi."</td>
                                    <td className="border px-2 py-1">
                                        "Rina nangis kamisesegen, awake ngewel kaya wong kadhemen..."
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">2</td>
                                    <td className="border px-2 py-1">"Kamar asrama sepi."</td>
                                    <td className="border px-2 py-1">
                                        "Kahanan kamar sanalika dadi nyenyet, mung keprungu ambekan bocah-bocah..."
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Latihan */}
                        <h3 className="font-semibold mt-3">Tugas Ngukir Ukara</h3>
                        <p>Owahana ukara garing ing ngisor iki dadi luwih mentes lan endah:</p>
                        <ul className="list-decimal list-inside space-y-1">
                            <li>"Sore iku udane deres banget."</li>
                            <li>"Bapak muring-muring amarga pitike ilang."</li>
                            <li>"Omahe mbah kakung wis tuwa lan rusak."</li>
                        </ul>
                        {/* ============================ */}
                        {/* UNIT IV: NGRAKIT CERKAK     */}
                        {/* ============================ */}
                        <h2 className="text-2xl font-bold  bg-red-600 text-white text-center p-3 mb-3">Unit IV: Ngrakit Cerkak (Develop)<br /><span className='italic font-light text-sm'>"Nyenyawa raga, mujudake crita"</span></h2>
                        <p>
                            Ngrakit cerkak iku ibarat mbangun omah. Bahan-bahan kaya bata (ide), semen (basa), lan
                            rangka (alur) kudu dipasang kanthi pas supaya dadi wangunan sing santosa lan endah.
                        </p>

                        {/* Tahapan */}
                        <h3 className="font-semibold mt-2">1. Materi Ngrakit Cerkak</h3>
                        <p>Ana telung tahapan utama nalika ngrakit cerkak, yaiku:</p>

                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Nata Struktur:</span> nyusun orientasi, komplikasi,
                                klimaks, lan resolusi supaya runtut lan logis.
                            </li>
                            <li>
                                <span className="font-semibold">Ngisi "Nyawa" Paraga:</span> paraga kudu urip liwat
                                narasi lan dialog.
                            </li>
                            <li>
                                <span className="font-semibold">Nggabungake Swasana:</span> latar papan lan wektu kudu
                                ndhukung emosi crita.
                            </li>
                        </ul>

                        {/* Conto cuplikan */}
                        <h3 className="font-semibold mt-3">
                            2. Cuplikan Ngrakit Crita "Keluk Dupa Tengah Wengi"
                        </h3>
                        <p>
                            Ing ngisor iki conto kepiye panulis ngrakit unsur kayata latar, alur, lan dialog supaya
                            dadi crita sing narik kawigaten lan urip.
                        </p>

                        <p className="font-medium mt-2">A. Ngrakit Pambuka (Orientasi)</p>
                        <p>
                            Panulis mbangun swasana dhisik supaya pamaca bisa kecelup ing kahanan sadurunge konflik
                            muncul.
                        </p>
                        <p className="italic">
                            “Kamar mahad putri geger bengi kuwi. Swara pating klesik, bisik-bisik karo lungguh
                            dhempetan, umpel-umpelan merga keweden. Teror tengah wengi kuwi tansaya nambahi mirise ati.”
                        </p>

                        <p className="font-medium mt-2">B. Ngrakit Pasulayan (Komplikasi)</p>
                        <p>
                            Konflik muncul nalika sifat paraga ora selaras karo aturan lingkungan sing dienggoni.
                        </p>
                        <p className="italic">
                            “Bocah kuwi kawit mlebu mahad angel banget omong-omongane. Saben bengi angel yen kon ndang
                            turu... Sanajan wis diperingatke pengurus bola-bali panggah bae ora kapok.”
                        </p>

                        <p className="font-medium mt-2">C. Ngrakit Puncak (Klimaks)</p>
                        <p>
                            Ing puncak masalah, panulis nggunakake gaya basa sing wis diolah ing Unit III kanggo
                            nambah ketegangan.
                        </p>
                        <p className="italic">
                            “Rina njerit lan ngewel. Tangane nuding-nuding pernahe cendhela banjur nutupi raine nganggo
                            kemul. Kabeh kancane uga narik kemul padha Rina. Nanging nganti jam 3 panggah ora bisa
                            turu...”
                        </p>

                        <p className="font-medium mt-2">D. Ngrakit Panutup (Resolusi &amp; Koda)</p>
                        <p>
                            Resolusi mungkasi cerkak kanthi nuduhake akibat lan makna simbolis saka konflik.
                        </p>
                        <p className="italic">
                            “Alhamdulillah, misi sukses... ide mbakar dupa lan ngobahne rukuh neng suwalike cendhela kae
                            kasil medeni bocah ben tertib.”
                        </p>

                        {/* Pandhuan */}
                        <h3 className="font-semibold mt-3">3. Pandhuan Ngrakit Cerkak Sing Becik</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Narasi Pembuka Kuat:</span> gawe pamaca kepengin terus
                                maca.
                            </li>
                            <li>
                                <span className="font-semibold">Dialog Sing Tepat:</span> ora kakehan, nanging efektif
                                kanggo nuduhake watak lan nerusake alur.
                            </li>
                            <li>
                                <span className="font-semibold">Show, Don’t Tell:</span> nuduhake rasa tinimbang mung
                                ngandhani.
                            </li>
                            <li>
                                <span className="font-semibold">Runtut Alur:</span> transisi narasi kudu jelas lan konsisten.
                            </li>
                        </ul>

                        {/* Langkah Praktis */}
                        <h3 className="font-semibold mt-3">Tambahan: Lelaku Kreatif / Langkah Praktis</h3>
                        <p className="font-medium">1. Ndhudhuk Gagasan (Menggali Ide)</p>
                        <p>
                            Ide bisa teka saka pengalaman, pengamatan, utawa mitos lokal. Kunci: niteni lan nemokake
                            makna (werdi).
                        </p>

                        <p className="font-medium mt-1">2. Ngracik Paraga &amp; Watak</p>
                        <p>
                            Cerita sing urip gumantung saka tokoh sing urip. Tentokake keinginan, masalah, lan
                            karakteristik unik paraga.
                        </p>

                        <p className="font-medium mt-1">3. Nata Cengkorongan (Kerangka)</p>
                        <p>
                            Kerangka supaya crita ora <span className="italic">nggrambyang</span>. Skema sederhana:
                        </p>
                        <ul className="list-decimal list-inside space-y-1">
                            <li>Purwaka (Pembuka)</li>
                            <li>Pasulayan (Konflik)</li>
                            <li>Puncak (Klimaks)</li>
                            <li>Wasana (Penyelesaian)</li>
                        </ul>

                        <p className="font-medium mt-1">4. Nglancipake Ukara (Eksekusi Diksi)</p>
                        <p>
                            Kene proses nulis sejati. Gunakake tembung entar lan pepindhan kanggo ngolah rasa.
                        </p>

                        <p className="font-medium mt-1">5. Niti Priksa &amp; Madhangi (Penyuntingan)</p>
                        <p>
                            Wacan maneh kanthi swara. Potong ukara ganjel. Cek unggah-ungguh basa.
                        </p>
                        {/* ============================ */}
                        {/* UNIT V: MADHANGI KARYA       */}
                        {/* ============================ */}
                        <h2 className="text-2xl font-bold  bg-red-600 text-white text-center p-3 mb-3">Unit V: Madhangi Karya (Disseminate)<br /><span className='italic font-light text-sm'>"Mbagi crita, nularake tresna"</span></h2>
                        <p>
                            Sawisé crita rampung ditulis lan disunting, langkah sabanjure yaiku madhangi utawa
                            nyebarake karya supaya diwaca wong liya. Iki minangka tahap krusial amarga karya sastra
                            bakal entuk urip nalika diwaca lan diapresiasi wong.
                        </p>

                        <h3 className="font-semibold mt-2">Langkah-langkah Sadurunge Publikasi</h3>

                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <span className="font-semibold">Editing:</span> Neliti manawa ora ana salah ketik
                                (typo) utawa kalimat ganjel.
                            </li>
                            <li>
                                <span className="font-semibold">Layouting:</span> Nata tampilan tulisan supaya rapi,
                                jelas, lan enak diwaca.
                            </li>
                            <li>
                                <span className="font-semibold">Visualisasi:</span> Nambahi gambar ilustrasi sing jumbuh karo isi crita (umpamane gambar keluk dupa kanggo cerkak) <a href="https://e-sastracerkak.my.id/cerkak/keluk-dupa-tengah-wengi" className='font-semibold text-purple-600 hover:underline'>"Keluk Dupa Tengah Wengi"</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Button Gdrive */}
                <div className='mt-12'>
                    <DriveButton href="https://drive.google.com/drive/folders/1lp85FzG10n6esHfT-f7CL8qtPOtiTuU2" />
                </div>


                <p className="leading-relaxed font-semibold text-lg text-center italic md:w-1/2 mx-auto text-red-600 mt-12">
                    🔥💪 SEMANGATTT! 💪🔥 <br />
                    Gas terus, aja kendho! 🚀😄
                </p>
            </section>
        </>
    );
}

Materi.layout = (page: any) => <AppLayout>{page}</AppLayout>;
