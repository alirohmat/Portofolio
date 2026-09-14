# Portofolio — ALI ROHMATULLOH

**System Implementer & Operational Specialist** — Ops-console theme, lime accent.

Portofolio pribadi ALI ROHMATULLOH (Kab. Tuban, Jatim) — dari operasional lapangan (admin, logistik dapur/MBG, retail) hingga deployment sistem digital.

## ✨ Features

- **Ops-console redesign** — dark default, lime glow, Space Grotesk display + JetBrains Mono labels
- **Dark/Light Mode** — toggle Sun/Moon di Navbar, persist via `localStorage`, default `dark`
- **Sections:**
  - `Hero` — status pill `Ready for Deployment`, display type besar, stat cards (0 incident / 100% arsip / 2 system), marquee stack
  - `OperationalLogs` — vertical timeline 4 peran + nomor urut + tag
  - `DeployedSystems` — 2 kartu (Portal IGRA Senori `LIVE` + RDM `DEPLOYED`), stack chips, highlights checklist
  - `TechStack` — `core_competency.sh` progress bars + `soft_protocols[]` grid + education & organization cards
  - `Contact` — phone/email/base rows + copy button + WhatsApp & Email CTA
- **Tech Stack:** Vite + React (JSX) + Tailwind CSS + Framer Motion + Lucide React
- **Responsive** + SEO meta + JSON-LD Person

## 🚀 Quick Start

```bash
npm install
npm run dev -- --host 0.0.0.0   # http://localhost:5173
npm run build                    # → dist/
npm run preview
```

## 🌗 Dark/Light Mode

- Hook: `src/hooks/useTheme.js` — `useState` + `useEffect` (apply `html.dark` + `localStorage`), default `dark`
- Tailwind: `darkMode: 'class'`
- CSS vars di `src/index.css` — `:root` (light) & `.dark` (dark)
- Toggle di `Navbar.jsx` — `Sun` saat dark, `Moon` saat light
- Light-mode accent text pakai `text-lime-deep` agar kontras, dark-mode pakai `text-lime`

## 📁 Structure

```
src/
├── components/
│   ├── layout/ (Navbar, Footer, BackgroundGrid)
│   ├── sections/ (Hero, OperationalLogs, DeployedSystems, TechStack, Contact)
│   └── ui/ (Card, StatusBadge, SectionHeading, ErrorBoundary)
├── data/portfolioData.js
├── hooks/ (useTheme)
├── App.jsx
└── index.css
```

Catatan: `public/icons.svg` dan `src/assets/` (hero.png, react.svg, vite.svg) tidak dipakai komponen mana pun.

## 🔗 Live Projects

- Portal IGRA Senori: https://igra-senori.web.id — AI-assisted dev, DNS/SSL
- RDM (Rapor Digital Madrasah) — instalasi & konfigurasi server

## 📦 Deploy

- **Vercel:** connect GitHub `alirohmat/Portofolio` → auto deploy, atau drag `dist/`
- **Netlify:** connect GitHub atau drag `dist/`
- **VPS/Nginx:** `npm run build` → upload `dist/` → Nginx `root /var/www/portofolio` + Certbot SSL (mirip IGRA Senori)

## 👤 Contact

Kab. Tuban, Jatim | +62 821 3278 9470 | alirohmat@yahoo.com

---

Built with ❤️ — Operations mindset, Deployment execution
