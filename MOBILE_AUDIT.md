# Mobile Audit & Responsive Baseline (360px - 390px) — Portfolio Ali Rohmatulloh

Dokumen audit ini mencatat hasil inspeksi menyeluruh terhadap layout, interaksi, tipografi, dan performa portofolio pada viewport mobile kecil (360px dan 390px), sebagai acuan implementasi Redesign Mobile-First v2 (T1 Foundation).

---

## 1. Ringkasan Temuan Audit

### A. Horizontal Overflow & Layout Spacing (`overflow-x`)
- **Temuan:** Padding kontainer sebelumnya (`px-4` atau `px-6` responsif tidak seragam) menyisakan ruang sempit pada layar 360px. Beberapa elemen card atau heading panjang berisiko menyebabkan pergeseran horizontal (`overflow-x`).
- **Solusi T1:** Standarisasi shell container menggunakan `.container-shell` dengan `px-5` secara konsisten pada semua section, dipadu dengan root `overflow-x-hidden`.

### B. Touch Target & Tap Size (< 44px)
- **Temuan:** Beberapa tombol, tautan ikon (social/contact/copy), dan tombol navigasi header memiliki tinggi fisik < 44px (sekitar 32px - 38px), menyulitkan akurasi sentuhan di perangkat mobile.
- **Solusi T1:** Menambahkan variabel `--tap: 44px` dan utilitas `.tap` (`min-height: 44px; min-width: 44px; display: inline-flex; align-items: center; justify-content: center;`) untuk diterapkan pada seluruh elemen interaktif.

### C. Tipografi & Skala Clamp (`H1`, `H2`)
- **Temuan:** Ukuran font hero heading (`text-[13vw]` atau statik besar) terlalu ekstrem pada 360px (menyebabkan 1 kata terpotong ke baris bawah tanpa kontrol) atau terlalu kecil pada breakpoint menengah.
- **Solusi T1:** Penerapan CSS clamp terstandar di `:root`:
  - `--font-h1: clamp(2.25rem, 8vw, 4.5rem);`
  - `--font-h2: clamp(1.5rem, 5vw, 2.25rem);`

### D. Cumulative Layout Shift (CLS) & Spacing Section
- **Temuan:** Jarak antar section tidak konsisten (`py-10` hingga `py-24`), memicu potensi CLS saat font kustom (`Space Grotesk`, `JetBrains Mono`) dimuat atau saat animasi `framer-motion` dirender.
- **Solusi T1:** Standarisasi padding section via utilitas `.section-pad` (`py-14 sm:py-20`) dan variabel spacing `--section-spacing: 3.5rem` (`sm: 5rem`).

---

## 2. Checklist Verifikasi Komponen & Aset

- [x] **Aset Mati Dihapus:** File `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg` telah dihapus dari repositori.
- [x] **Viewport & Meta:** `index.html` dikonfigurasi dengan `viewport-fit=cover`, `theme-color`, Open Graph tags lengkap, serta JSON-LD Person terstruktur (nama, profesi, alamat, telepon, email, url).
- [x] **Font Preload:** Preload font Space Grotesk 700 ditambahkan untuk mempercepat LCP teks utama.
- [x] **Build & Bundle:** `npm run build` sukses tanpa error dan menghasilkan output minifikasi yang bersih.
