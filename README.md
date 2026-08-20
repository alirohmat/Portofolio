# Portofolio — ALI ROHMATULLOH

**System Implementer & Operational Specialist** — Operations & Deployment Dashboard

Portofolio pribadi ALI ROHMATULLOH (Kab. Tuban, Jatim) — merepresentasikan perjalanan dari operasional lapangan (admin, logistik dapur/MBG, retail) hingga deployment sistem digital.

## ✨ Features

- **Operations & Deployment Dashboard** theme — bukan portofolio kaku, tapi interaktif & sistemik
- **Dark/Light Mode** — toggle Sun/Moon di Navbar, persist via `localStorage`, ikut `prefers-color-scheme`, smooth `300ms`
- **Sections:**
  - `Hero` — System Status + `TerminalText` typing `Status: Ready for Deployment...` + metrics `[SYS: ONLINE] [UPTIME: 99.9%] [LAST DEPLOY: RDM MODULE]`
  - `Operational Logs` — timeline cards (SPPG Mendenrejo 005, MI Islamiyah Banin, Toko Sarem Mas)
  - `Deployed Systems` — Active Nodes (Portal IGRA Senori `igra-senori.web.id` **LIVE** + RDM) dengan `StatusBadge` pulse & hover scale
  - `Tech & Soft Modules` — Hard Modules (progress bar) + Soft Protocols (badges)
  - `Contact` — Phone/Mail/MapPin + Download CV + WhatsApp
- **Tech Stack:** Vite + React (JSX) + Tailwind CSS + Framer Motion + Lucide React
- **Responsive** + WCAG contrast + SEO meta

## 🚀 Quick Start

```bash
npm install
npm run dev -- --host 0.0.0.0   # http://localhost:5173
npm run build                    # → dist/
npm run preview
```

## 🌗 Dark/Light Mode

- Hook: `src/hooks/useTheme.js` — `useState` + `useEffect` (apply `html.dark` + `localStorage` + `matchMedia` listener)
- Tailwind: `darkMode: 'class'`
- CSS vars di `src/index.css` — `:root` (light) & `.dark` (dark) + `transition 300ms`
- Toggle di `Navbar.jsx` — `Sun` saat dark, `Moon` saat light

## 📁 Structure

```
src/
├── assets/
├── components/
│   ├── layout/ (Navbar, Footer, BackgroundGrid)
│   ├── sections/ (Hero, OperationalLogs, DeployedSystems, TechStack, Contact)
│   └── ui/ (Card, StatusBadge, TerminalText)
├── data/portfolioData.js
├── hooks/ (useTheme, useScrollSpy)
├── App.jsx
└── index.css
```

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
