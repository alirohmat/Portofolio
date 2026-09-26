# Redesign Total Portfolio-Ali — Mobile-First v2

Repo: `/root/portfolio-ali` — Vite + React 19 + Tailwind 3 + Framer Motion + Lucide.
Live ref: Portal IGRA Senori, RDM on-premise.

## 1. Arah desain baru (total, bukan polish)

Konsep: **"Field-to-Cloud" single-column narrative.** Mobile dibaca seperti CV chat: Hero ringkas → bukti angka → timeline kerja → proyek live → skill → kontak. Satu kolom, satu aksi per layar.
Identitas dipertahankan: dark default, lime `#C8F04B`, Space Grotesk display + Inter body + JetBrains Mono label. Yang dibuang: hero 92vh, display 13vw, glow berlebihan, marquee berat, motion di semua card.

Prinsip mobile:
- Base 360px dulu. Breakpoint hanya `sm:` dan `lg:`. Tanpa `md:` kecuali perlu.
- Type scale clamp: H1 `clamp(2.5rem,10vw,5.5rem)`, H2 `clamp(1.5rem,6vw,2.25rem)`, body 15-16px, line-height 1.6+.
- Touch target min 44px semua button/link/icon. Jarak antar target 8px.
- CTA thumb-zone: CTA primer full-width di mobile, sticky bottom bar (WhatsApp + Lihat Proyek) muncul setelah hero, hormati `safe-area-inset-bottom`.
- Satu motion per viewport. `whileInView once:true`. Mati total di `prefers-reduced-motion`.
- Gambar: hapus aset mati (`hero.png`, `react.svg`, `vite.svg`, `public/icons.svg` bila tak dipakai). Favicon SVG saja. Font: subset latin, `display=swap`, preconnect sudah ada — tambah `preload` Space Grotesk 700.
- Performa budget: JS < 200KB gzip, Lighthouse mobile Perf ≥ 90, CLS < 0.1, LCP < 2.5s di 4G.

## 2. Struktur baru (IA)

```
Navbar (h-14 mobile, blur, menu bottom-sheet) →
Hero (min-h auto, pt-24 pb-8, status pill, H1 2 baris, bio 3 baris + "selengkapnya", 2 CTA full-width, stats 3 kolom kompak) →
Proof strip (0 insiden / 100% arsip / 2 live — angka besar, label kecil) →
OperationalLogs (kartu accordion, expand 1 default, timeline dot hanya sm+) →
DeployedSystems (1 kolom, kartu: status badge, judul, URL tap, stack chips max 4, highlights 3 checklist) →
TechStack (core_competency 5 bar → list + badge %, soft_protocols 2 kolom grid kompak) →
Contact (rows tanpa truncate, tap-to-call, copy + toast, CTA WA + Email full-width) →
Footer ringkas → Sticky mobile CTA bar
```

Section padding mobile: `py-14`, desktop `sm:py-20`. Container: `px-5 max-w-6xl`. Divider 1px antar section.

## 3. Paket delegasi subagent (paralel, 6 task)

Konvensi: kerja di branch `redesign/mobile-v2`. Satu task = file miliknya saja. `npm run build` hijau sebelum klaim selesai. Sertakan file + baris yang diubah di laporan.

### T1 — Foundation + tokens + audit
Scope: `src/index.css`, `tailwind.config.js`, `index.html`, hapus aset mati.
- Audit mobile 360/390px: catat overflow-x, tap target < 44px, truncate, CLS. Simpan `MOBILE_AUDIT.md` 1 halaman.
- Token: `--tap:44px`, type clamp, section spacing var, `container-shell` jadi `px-5`. Tambah util `.tap`, `.section-pad`, `.card-line`.
- `index.html`: viewport `viewport-fit=cover`, theme-color, OG image, JSON-LD Person lengkap (tel, email, url), preload font display.
- Hapus import aset mati. Verifikasi `npm run build`.
DoD: tak ada horizontal scroll 360px, semua base style dari token, build hijau.

### T2 — Navbar + Hero mobile-first
Scope: `src/components/layout/Navbar.jsx`, `src/components/sections/Hero.jsx`, `src/data/portfolioData.js` (bio short/long bila perlu).
- Navbar h-14 mobile, logo kompak, theme toggle 44px, hamburger 44px. Menu jadi bottom-sheet (bukan dropdown atas), link 48px row, tutup on-navigate, `aria-expanded`, focus trap ringan, lock scroll saat buka.
- Hero: hapus `min-h-[92vh]`, `text-[13vw]` → clamp. Bio potong 3 baris + toggle. CTA stacked full-width (`w-full sm:w-auto`), primer WA/Hire, sekunder proyek. Stats: 3 kolom, angka `text-xl`, label 11px, icon 16px, min-height sama.
- Marquee: ganti strip statis scroll-x atau hapus di mobile (`hidden sm:block`) demi LCP.
DoD: LCP hero < 2.5s, tak ada teks kepotong 360px, CTA capai dengan jempol.

### T3 — OperationalLogs → accordion mobile
Scope: `src/components/sections/OperationalLogs.jsx`, `src/components/ui/Card.jsx`, `SectionHeading.jsx`.
- Mobile: kartu accordion (tap header expand), 1 item terbuka default, animasi height 200ms, `aria-expanded`. Timeline vertikal + dot hanya `sm+`. Nomor urut badge kompak.
- Meta org/periode wrap 2 baris, tag chips scroll-x atau max 3 + "+n". `FOCUS:` 1 baris.
- Kurangi motion: fade-y sekali, tanpa stagger per-index di mobile.
DoD: 4 log terbaca tanpa scroll horizontal, expand/collapse keyboard-accessible.

### T4 — DeployedSystems + TechStack grids
Scope: `DeployedSystems.jsx`, `TechStack.jsx`, `StatusBadge.jsx`.
- Systems: 1 kolom mobile, `p-5`, judul `text-xl`, URL button full-width tap, stack chips `text-xs`, highlights checklist 3 baris. Hapus blur glow hover di mobile (hover:none). Tambah screenshot/OG placeholder bila ada, `loading=lazy`, rasio 16/9.
- TechStack: progress bar tinggi 8px, label + % 1 baris, animasi sekali. Soft skills grid `grid-cols-2` kompak di mobile (icon 16, judul 13px, desc 2 baris clamp). Education/org cards stacked.
DoD: tak ada kartu lebih lebar dari viewport, semua badge terbaca 360px.

### T5 — Contact + Footer + sticky CTA + SEO/PWA
Scope: `Contact.jsx`, `Footer.jsx`, `App.jsx`, `public/manifest.webmanifest`, `index.html`.
- Contact rows: hapus `truncate` — wrap/break-all untuk email. Row min-height 64px, copy button 44px + toast "Disalin". CTA `tel:` + `wa.me` + `mailto:` full-width stacked. `AVG_RESPONSE` kecil.
- Sticky bottom bar mobile: 2 tombol (WhatsApp, Proyek), `sm:hidden`, `pb(safe-area)`, sembunyi saat keyboard/focus input (tak ada input — aman), sembunyi di footer via IntersectionObserver.
- Footer: 3 baris kompak, back-to-top button 44px.
- PWA minimal: manifest + apple-touch-icon (SVG), theme-color sync dark/light.
DoD: tap-to-call jalan, copy ada feedback, sticky bar tak menutup konten (tambah `pb-20 sm:pb-0` di main).

### T6 — QA, perf, a11y, build
Scope: baca-saja semua + perbaikan kecil. Jalan terakhir setelah T1–T5 merge.
- `npm run build` + `npm run preview`, cek 360×740, 390×844, 768, 1280. Screenshot tiap breakpoint.
- Lighthouse mobile: Perf ≥ 90, A11y 100, Best Practices 100, SEO 100. Kontras lime/light-mode ≥ 4.5:1 untuk teks (pakai `lime-deep` di light).
- A11y: focus-visible ring, alt/label semua ikon-button, heading order H1→H2, skip-to-content link.
- Laporan `QA_MOBILE.md`: tabel breakpoint × hasil, daftar file diubah, sisa risiko.
DoD: build hijau, 4 screenshot terlampir, nol overflow, nol tap-target < 44px (lapor via DevTools).

## 4. Urutan eksekusi

1. T1 dulu (token dipakai semua). 2. T2–T5 paralel setelah T1. 3. T6 terakhir, gate rilis. Merge via PR kecil per task, konflik hanya di `index.css`/`portfolioData.js` — T1 pegang lock dua file itu.

## 5. Acceptance global

- 360px: nol scroll horizontal, nol teks terpotong, semua CTA ≥ 44px.
- Build `dist/` fresh, preview lolos Lighthouse budget di atas.
- `git status` bersih, commit pesan `redesign(mobile): <scope>`.
- README update: struktur baru + cara run + budget perf.
