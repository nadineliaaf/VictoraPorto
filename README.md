# VICTORA — Digital Creative Agency

Website portofolio VICTORA yang menampilkan profil tim, layanan/teknologi, serta kumpulan proyek website dan desain UI/UX. Proyek ini dibuat menggunakan React dan Vite, dengan layout responsif untuk desktop maupun perangkat seluler.

## Fitur

- Hero section dengan ajakan melihat proyek atau menghubungi tim.
- Bagian tentang tim VICTORA dan teknologi yang digunakan.
- Profil anggota tim.
- Portofolio dengan filter **Semua Project**, **Website**, dan **UI/UX Design**.
- Tombol proyek yang membuka situs atau desain eksternal jika tautan tersedia.
- Panel detail untuk proyek tanpa tautan, mencakup ringkasan, poin utama, dan keterangan bahwa tautan publik belum tersedia.
- Tombol kontak yang mengarahkan pengguna ke WhatsApp.
- Navigasi responsif, animasi latar hero, dan dukungan preferensi `prefers-reduced-motion`.

## Teknologi

- [React](https://react.dev/) dan React DOM
- [Vite](https://vite.dev/) untuk server pengembangan dan build
- CSS untuk styling dan layout responsif

## Persyaratan

Pasang [Node.js](https://nodejs.org/) versi LTS beserta npm. Periksa instalasi dengan:

```bash
node --version
npm --version
```

## Menjalankan di lokal

1. Buka terminal di folder proyek.
2. Instal dependensi:

   ```bash
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Buka alamat lokal yang ditampilkan Vite di terminal, biasanya `http://localhost:5173`.

Server Vite mendukung hot reload, sehingga perubahan pada source akan terlihat saat disimpan.

## Build dan preview production

Buat build production:

```bash
npm run build
```

Hasil build disimpan di folder `dist/`. Untuk melihat hasil build secara lokal:

```bash
npm run preview
```

Perintah preview menjalankan server lokal untuk memeriksa hasil build; untuk deployment, unggah isi folder `dist/` ke layanan hosting situs statis yang digunakan.

## Struktur proyek

```text
.
├── index.html              # HTML entry point, metadata, dan elemen root React
├── package.json            # Dependensi dan perintah npm
├── public/
│   └── assets/             # Gambar anggota tim dan gambar proyek
└── src/
    ├── main.jsx            # Data portofolio dan komponen aplikasi
    └── styles.css          # Styling, animasi, dan breakpoint responsif
```

File di dalam `public/` disajikan dari root URL. Contohnya, `public/assets/fadly.jpeg` digunakan sebagai `/assets/fadly.jpeg`.

## Mengubah konten

### Anggota tim

Data anggota berada pada array `team` di `src/main.jsx`. Setiap anggota memiliki `name`, `role`, dan `image`. Letakkan gambar baru di `public/assets/`, lalu gunakan URL yang diawali `/assets/`.

### Proyek portofolio

Data proyek berada pada array `projects` di `src/main.jsx`. Contoh bentuk datanya:

```js
{
  title: 'Nama Proyek',
  category: 'Website', // atau 'UI/UX Design'
  type: 'Web Development',
  image: '/assets/nama-gambar.jpg',
  action: 'project', // gunakan 'design' untuk desain UI/UX
  link: null,
  description: 'Ringkasan proyek untuk panel detail.',
  highlights: ['Poin utama pertama', 'Poin utama kedua']
}
```

- Isi `link` dengan URL jika proyek sudah dapat dibuka. Untuk domain tanpa protokol, aplikasi akan menambahkan `https://`.
- Isi `link: null` jika belum ada tautan publik. Dalam kondisi ini, tombol **Lihat Detail** membuka panel detail.
- Untuk proyek tanpa tautan, sediakan `description` dan `highlights` agar panel detail memiliki informasi yang sesuai.
- `category` menentukan filter portofolio, sedangkan `type` ditampilkan sebagai jenis proyek.

### Kontak

Nomor WhatsApp untuk tombol **Hubungi Kami** ditentukan pada URL `wa.me` di bagian CTA dalam `src/main.jsx`. Ganti nomor tersebut dengan nomor kontak yang benar dalam format internasional tanpa tanda `+`, spasi, atau tanda hubung.

### Tampilan

Aturan visual dan responsive breakpoint berada di `src/styles.css`. Animasi hero menghormati pengaturan pengurangan gerakan sistem melalui `prefers-reduced-motion`.

## Perintah npm

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Vite |
| `npm run build` | Membuat build production di `dist/` |
| `npm run preview` | Menjalankan preview lokal dari build production |

