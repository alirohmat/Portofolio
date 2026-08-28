// Centralized portfolio data — Operations & Deployment Dashboard theme
// Semua teks CV disimpan di sini agar komponen tetap bersih & modular

const portfolioData = {
  profile: {
    name: "ALI ROHMATULLOH",
    role: "System Implementer & Operational Specialist",
    tagline: "Status: Ready for Deployment...",
    location: "Kab. Tuban, Jatim",
    phone: "+62 821 3278 9470",
    email: "alirohmat@yahoo.com",
    bio: "Lulusan PAI yang bertransisi ke Web & System Implementer. Memadukan ketelitian operasional (admin, logistik dapur/MBG, retail) dengan kemampuan deployment sistem modern — dari manajemen data tingkat bawah hingga konfigurasi server, DNS/SSL, dan AI-assisted development. Proven zero-incident mindset di lapangan, kini diterapkan di dunia sistem digital.",
  },

  operationalLogs: [
    {
      id: "log-0",
      role: "Tukang Kebun",
      org: "MA Islamiyah Senori",
      period: "Jul 2014 - Sep 2015",
      type: "OPERATIONAL_LOG",
      focus: "Disiplin lapangan & etos kerja bottom-up",
      details:
        "Merawat kebun sekolah di MA Islamiyah Senori. Mengelola area operasional dengan fokus pada konsistensi, kerapian visual, dan manajemen sumber daya harian — fondasi disiplin operasional.",
      tags: ["Manajemen Area", "Etos Kerja", "Konsistensi"],
    },
    {
      id: "log-1",
      role: "Pelayan Toko",
      org: "Toko Sarem Mas",
      period: "Mar 2017 - Feb 2021",
      type: "OPERATIONAL_LOG",
      status: "ARCHIVED",
      focus: "Transaksi, stok, customer service",
      details:
        "Mengelola arus stok harian dan transaksi retail. Menjaga akurasi inventory di bawah tingkat selisih 1% dan melayani rata-rata 50+ transaksi/hari dengan tingkat kepuasan pelanggan tinggi.",
      tags: ["Inventory Control", "Retail Ops", "Customer Experience"],
    },
    {
      id: "log-2",
      role: "Admin",
      org: "MI Islamiyah Banin",
      period: "Nov 2021 - Jul 2023",
      type: "OPERATIONAL_LOG",
      status: "ARCHIVED",
      focus: "Data kesiswaan, arsip, keuangan",
      details:
        "Digitalisasi arsip madrasah dan manajemen keuangan. Meningkatkan akurasi data kesiswaan hingga 100% dan mempercepat waktu pencarian dokumen dari manual (jam) menjadi sistem indeks (detik).",
      tags: ["Digital Archiving", "Data Accuracy", "Financial Admin"],
    },
    {
      id: "log-3",
      role: "Staff Dapur",
      org: "SPPG Mendenrejo 005",
      period: "Jun 2026 - Aug 2026",
      type: "OPERATIONAL_LOG",
      status: "ARCHIVED",
      focus: "Zero incident food safety, sanitasi, distribusi MBG",
      details:
        "Memastikan distribusi Makanan Bergizi Gratis (MBG) untuk 100+ porsi setiap hari dengan 0 insiden sanitasi. Mengawal compliance SOP food safety ketat untuk efisiensi distribusi tepat waktu.",
      tags: ["Food Safety", "SOP Compliance", "Logistics"],
    },
  ],

  deployedSystems: [
    {
      id: "igra-senori",
      name: "Portal IGRA Senori",
      url: "https://igra-senori.web.id",
      displayUrl: "igra-senori.web.id",
      status: "LIVE",
      statusColor: "accent",
      role: "Web & System Implementer (Freelance)",
      stack: ["AI-Assisted Dev", "DNS Config", "SSL", "Domain Deploy"],
      details:
        "Membangun portal resmi IGRA Senori dari nol menggunakan AI-assisted development. Bertanggung jawab penuh: desain, development, konfigurasi DNS & SSL, hingga deploy ke production. Live dan dapat diakses publik.",
      highlights: [
        "AI-assisted development workflow",
        "Konfigurasi DNS & SSL",
        "Deployment production",
      ],
    },
    {
      id: "rdm",
      name: "Rapor Digital Madrasah (RDM)",
      url: "",
      displayUrl: "On-Premise Deployment",
      status: "DEPLOYED",
      statusColor: "accent",
      role: "System Implementer",
      stack: ["Server Config", "Instalasi", "Testing", "User Training"],
      details:
        "Instalasi dan konfigurasi server RDM, pengujian sistem secara online, serta pendampingan penggunaan untuk operator madrasah. Memastikan sistem rapor digital berjalan stabil dan siap digunakan tahun ajaran berjalan.",
      highlights: [
        "Instalasi & konfigurasi server",
        "Pengujian online end-to-end",
        "Support & handover ke operator",
      ],
    },
  ],

  education: {
    degree: "S1 Pendidikan Agama Islam (PAI)",
    institution: "IAI Al-Muhammad Cepu",
    period: "2017 - 2021",
    status: "COMPLETED",
  },

  organization: {
    role: "Staf Kebersihan & Perlengkapan",
    org: "Ponpes Mansyaul Huda 02",
    period: "Aktif",
    details: "Menjaga kebersihan, kerapian, dan kelengkapan fasilitas pondok — melatih tanggung jawab dan kepekaan operasional harian.",
  },

  techSkills: [
    { name: "AI-Assisted Web Dev", level: 90 },
    { name: "System Deployment", level: 85 },
    { name: "Domain / DNS Config", level: 85 },
    { name: "MS Excel", level: 80 },
    { name: "Data Admin", level: 88 },
  ],

  softSkills: ["Analytical", "Public Speaking", "Teamwork", "Customer Service"],

  contact: {
    location: "Kab. Tuban, Jatim",
    phone: "+62 821 3278 9470",
    email: "alirohmat@yahoo.com",
    whatsapp: "https://wa.me/6282132789470",
  },
};

export { portfolioData };
export default portfolioData;
