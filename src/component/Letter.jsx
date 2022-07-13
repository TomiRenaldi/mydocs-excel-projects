import React from 'react'

const Letter = React.Component = () => {
    return (
        <div className='min-h-screen py-8 flex flex-col justify-center relative overflow-hidden lg:py-12'>
            <div className="absolute inset-0 bg-[url(/assets/graph-paper.svg)] bg-green-100/60 bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative rounded w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
                <div className="max-w-prose mx-auto lg:text-lg">
                    <img className='h-8' src="/assets/text-mash.svg" alt="MyDocsExcelProjects"/>
                </div>
                <div class="mt-7 prose prose-slate mx-auto lg:prose-lg">
                    <p class="lead">Sampai saat ini Microsoft Excel adalah alat yang sangat membantu dalam pengelolaan data kompleks maupun sederhana, karena anda sudah tidak asing dengan Excel, saya tidak akan bercerita banyak.</p>
                    <p>Secara spesifik saya menulis ini, membagikan pengalaman mengenai proyek excel yang mungkin anda temukan di perusahaan. Semua yang saya tulis tidak sebagai rekomendasi khusus bagi anda. Berdasarkan pertanyaan yang menjadi hantu bagi sebagian orang mengenai proyek excel di perusahaan seperti:</p>
                    <blockquote>
                        <p>Proyek excel apa yang akan saya temukan di perusahaan?, Apa yang harus saya pelajari terlebih dahulu di excel?</p>
                    </blockquote>
                    <p>Apa yang akan anda temukan di perusahaan, contoh seperti:</p>
                    <ol>
                        <li>Daftar gaji <em>(Payroll)</em>.</li>
                        <p>Pertama, jika anda mempunyai karyawan dan mencoba membayar karyawan anda, melacak waktu kerja mereka, lembur mereka. Jadi itulah yang anda lakukan dalam proyek itu.</p>
                        <li>Buku Nilai <em>(Gradebook)</em>.</li>
                        <p>Kedua, menyiapkan buku nilai, menghitung persentase, anda akan menemukan siapa yang ada di puncak kelas dan siapa yang tidak.</p>
                        <li>Faktor Keputusan <em>(Decision Factors)</em>.</li>
                        <p>Ketiga, anda juga akan memiliki program pemfaktoran pohon keputusan, anda dapat memutuskan karir berdasarkan pilihan anda atau mungkin permintaan bos anda.</p>
                        <li>Database Penjualan <em>(Sales Database)</em>.</li>
                        <p>Keempat, jadi anda akan diberikan banyak data dan anda akan mengurutkan untuk menentukan, siapa penjualan terbaik komisi mereka, dan membuat beberapa bagan.</p>
                        <li>Inventaris <em>(Inventory)</em>.</li>
                        <p>Terakhir, proyek inventaris, sebutlah inventaris mobil sebagai contoh, dimana anda akan membuat, apa yang disebut basis data, anda akan memiliki data dalam jumlah besar, anda akan menggabungkan sebuah bidang, cara memisahkan bidang tersebut, dan cara membuat laporan dengan proyek itu.</p>
                    </ol>

                    <p>Jadi anda akan banyak permintaan untuk mengelola data yang besar pada perusahaan, dari kelima masalah tersebut <em>mempelajari terlebih dahulu</em> adalah kata terbaik sebelum masuk kedalam perusahaan, agar anda dapat bekerja dengan baik.</p>
                </div>
            </div>
        </div>
    )
}

export default Letter