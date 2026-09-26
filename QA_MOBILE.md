# QA Report: Mobile Redesign & PWA (T6)

## 1. Ringkasan Eksekusi & Hasil Build
- **Build Status**: Sukses (`npm run build`), tidak ada error TypeScript/Vite/JSX.
- **Ukuran Bundle**:
  - `dist/index.html`: 2.70 kB (gzip: 0.98 kB)
  - `dist/assets/index-*.css`: 24.74 kB (gzip: 5.63 kB)
  - `dist/assets/index-*.js`: 354.84 kB (gzip: 112.09 kB)
- **Preview Server**: Berjalan stabil, diuji via Puppeteer/test suite lokal.

---

## 2. Tabel Pengecekan per Area (QA Matrix)

| Area / Komponen | Item Verifikasi | Status | Catatan / Bukti |
| :--- | :--- | :--- | :--- |
| **Navbar** | Sticky/fixed top, blur background, logo link, theme toggle, mobile drawer | **PASS** | `Navbar.jsx` menggunakan `backdrop-blur`, aria-label pada tombol toggle, z-index 50. |
| **Hero** | Tagline badge, h1 responsive, bio expander, CTA button, stat cards | **PASS** | Menggunakan `h1`, button min-height terpenuhi, marquee responsive. |
| **Logs (OperationalLogs)** | Vertical timeline, nomor urut, expandable role details, aria-expanded | **PASS** | Accordion interaktif dengan `aria-expanded`, tag badge lengkap. |
| **Systems (DeployedSystems)** | 2 kartu (Portal IGRA & RDM), stack chips, highlight checklist, live link | **PASS** | Kartu grid responsif, kontras warna aman (`text-lime-deep` / `dark:text-lime`). |
| **TechStack** | Progress bars (`core_competency.sh`), soft protocols grid, education/org | **PASS** | Visual bar akurat, kontras warna terang/gelap optimal. |
| **Contact** | Phone/email rows, copy button dengan feedback, WhatsApp & Email CTA | **PASS** | Tombol aksi touch-friendly (min 44px), feedback copy state aktif. |
| **Sticky Bar** | Mobile quick contact/action bar (`sm:hidden`, `pb-20` di `App.jsx`) | **PASS** | Terpasang di bagian bawah khusus viewport mobile, padding bawah App mencegah tertutup. |
| **SEO / PWA** | Meta tags, OpenGraph, JSON-LD, skip-to-content link di `App.jsx` | **PASS** | Ditambahkan link `Skip to main content` untuk aksesibilitas keyboard/screen reader. |

---

## 3. Verifikasi Teknis & Constraint
1. **Zero Overflow**: `grep` pada `text-[13vw]`, `min-h-[92vh]`, dan `truncate` tersisa tidak menemukan class usang yang menyebabkan horizontal scroll.
2. **Touch Target (>= 44px)**: Semua button dan link memiliki tinggi min 44px atau padding tap memadai (dites dengan inspeksi kelas `h-11`, `py-3.5`, `py-4`, dll).
3. **Kontras Light Mode**: Teks lime pada mode terang menggunakan `text-lime-deep` (memastikan kontras WCAG AA terpenuhi terhadap latar terang).
4. **Accessibility (A11y)**:
   - Heading order valid (1 buah `<h1>` di Hero, diikuti `<h2>` pada SectionHeading dan `<h3>` pada card/item).
   - `aria-label` terpasang pada icon-button (toggle theme, menu, copy, back to top).
   - `aria-expanded` terpasang pada menu mobile dan accordion log.
   - `skip-to-content` link terpasang di awal `App.jsx`.
