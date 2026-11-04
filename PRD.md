# Product Requirements Document (PRD)
## PT Global Agra Ripta Solusindo (GARISDev) — Official Single-Page Company Profile

---

### 1. Executive Summary

- **Problem Statement**:
  Meskipun PT Global Agra Ripta Solusindo (GARISDev) memiliki jam terbang rekayasa IT sejak 2014 dengan portofolio tingkat tinggi (seperti sistem Mabes TNI, BNPT, JFX, Mom N Jo, hingga Asuransi Jasindo), kehadiran digital publik perusahaan belum memiliki touchpoint web modern yang merefleksikan skala, prestise, dan kapabilitas teknis enterprise secara terpadu.
- **Proposed Solution**:
  Membangun website *single-page company profile & landing page* kelas dunia beraliran **Dark Obsidian Luxury** dengan arsitektur *mobile-first*, didukung *smooth scrolling* (Lenis), koreografi gerak tingkat lanjut (Framer Motion), dan arsitektur Next.js + Tailwind CSS yang sangat ringan (*sub-second initial load*). Website ini menonjolkan 6 pilar layanan rekayasa, 6 produk *flagship*, rekam jejak legalitas, serta menjadikan pengunduhan resmi dokumen profil korporat (**Company Profile PDF**) sebagai aksi konversi utama (*single primary action*).
- **Success Criteria**:
  1. **Lighthouse Performance Score**: $\ge 92$ pada mobile dan $\ge 98$ pada desktop (FCP $< 1.2\text{s}$, LCP $< 2.0\text{s}$, CLS $= 0$).
  2. **Company Profile Download Conversion Rate**: $\ge 8.5\%$ dari total pengunjung unik melakukan *click-to-download* dokumen profil resmi.
  3. **Interaction Snappiness & Smoothness**: 60fps *consistent frame-rate* pada animasi scroll Lenis dan transisi kartu interaktif tanpa *dropped frames* di perangkat mobile kelas menengah.
  4. **Full Responsive Fidelity**: Skor kepatuhan tata letak 100% pada *viewport* 390px (Mobile), 768px (Tablet), dan 1440px (Desktop Wide).

---

### 2. User Experience & Functionality

#### 2.1 User Personas
1. **B2B Enterprise Decision Maker (C-Level / VP / Head of IT)**:
   - *Karakter*: Efisien, mencari rekam jejak nyata, kepatuhan legal, dan kapabilitas arsitektur sistem skala besar.
   - *Kebutuhan*: Memvalidasi kredibilitas GARISDev dalam hitungan 15 detik pertama, melihat produk serupa dengan industri mereka, dan mengunduh profil resmi perusahaan untuk diajukan dalam rapat dewan direksi.
2. **Government & Institutional Procurement Officer (Pejabat Pengadaan / PPK / Tim Teknis)**:
   - *Karakter*: Sangat teliti terhadap legalitas resmi, kepatuhan regulasi, pengalaman instansi pemerintah, dan stabilitas vendor.
   - *Kebutuhan*: Memeriksa nomor legalitas (NIB, SIUP, NPWP, Akta Notaris), memeriksa riwayat proyek sektor publik (TNI, BNPT, Kementerian), dan mengunduh dokumen legalitas/profil resmi.
3. **Prospective Commercial Client & Startup Founder**:
   - *Karakter*: Fokus pada kecepatan eksekusi, estetika produk digital modern, integrasi API, dan dukungan purna jual (*maintenance*).
   - *Kebutuhan*: Mengeksplorasi solusi *ready-to-deploy* (Wellora, ApartHub, TenantHub) dan membuka jalur komunikasi cepat.

#### 2.2 User Stories & Acceptance Criteria

- **Story 1 (Primary Conversion - Download Company Profile)**:
  - *Story*: Sebagai calon klien institusional/enterprise, saya ingin dapat langsung mengunduh dokumen resmi Company Profile GARISDev dalam format PDF berkualitas tinggi dengan satu klik agar saya dapat menyimpannya dan membagikannya ke tim internal.
  - *Acceptance Criteria*:
    - Tombol unduh selalu dapat diakses dari sticky navigation header dan section konversi khusus di bagian bawah halaman.
    - Mengklik tombol unduh langsung memicu unduhan file `COMPANY PROFILE GARISDEV.pdf` tanpa *redirect* yang membingungkan atau *broken link*.
    - Terdapat feedback animasi *active state* (`scale(0.97)`) dan indikator unduhan *micro-state* (misal: "Mengunduh Dokumen..." $\rightarrow$ "Tersimpan").

- **Story 2 (Visual Validation & Trust Signals)**:
  - *Story*: Sebagai calon partner, saya ingin melihat logo resmi GARISDev, tagline perusahaan, data legalitas perseroan, dan daftar klien ternama segera setelah membuka website agar saya langsung yakin bahwa GARISDev adalah entitas resmi dan kredibel.
  - *Acceptance Criteria*:
    - Logo GARISDev (Dark/White Emblem) terpasang tajam dalam format SVG/vector atau high-res asset tanpa blur di layar Retina.
    - Section *Trust Credentials* menampilkan logo klien prestisius (BNPT, Mabes TNI, Kemnaker, Kementan, JFX, Mom N Jo, PT ISP, Asuransi Jasindo, PT Adinata Graha Raya).
    - Data legalitas (PT Global Agra Ripta Solusindo, Akta Pendirian No. 394 tgl 29 Jan 2021 Notaris Nurlisa Uke Desy S.H. M.Kn., NIB: 124700220599, NPWP: 41.298.684.6-017.000) disajikan rapi, transparan, dan terverifikasi.

- **Story 3 (Exploration of 6 Flagship Products & 6 Core Services)**:
  - *Story*: Sebagai pengunjung, saya ingin menjelajahi 6 pilar layanan rekayasa IT dan 6 produk unggulan (Wellora, ApartHub, TenantHub, Stayora, GoAmbulan, AIRA) secara ringkas dan interaktif tanpa berpindah halaman (*single-page*).
  - *Acceptance Criteria*:
    - Halaman menyajikan 6 pilar layanan (Digital Strategy, Web App, Mobile App, System Integration, BI & Dashboard, Maintenance & Tech Support).
    - Section produk menyajikan 6 *Flagship Products* dengan deskripsi modul, target industri, dan keunggulan operasional.
    - Tata letak responsif: kartu produk dapat digeser horizontal atau di-tap secara natural di mobile, dan tersusun dalam grid presisi di desktop.

- **Story 4 (Corporate Values - SUPORTIF)**:
  - *Story*: Sebagai stakeholder, saya ingin memahami etos kerja dan nilai dasar GARISDev (SUPORTIF: Sustainability, Professional, Observe, Relationship, Trust, Innovation, Flexible) agar dapat menilai kecocokan budaya kerja sama.
  - *Acceptance Criteria*:
    - Nilai SUPORTIF disajikan sebagai kartu interaktif yang informatif, bukan sekadar daftar teks biasa.
    - Teks jelas, kontras tinggi terhadap latar obsidian, dan mudah dibaca di layar smartphone.

#### 2.3 Non-Goals (Batasan Rilis v1.0)
- **Bukan Sistem Multi-Page**: Seluruh navigasi adalah *single-page scroll* dengan anchor links halus (Lenis), tanpa halaman `/about`, `/services`, atau `/contact` terpisah.
- **Bukan E-Commerce / Transaksi Langsung**: Website tidak menyediakan keranjang belanja, *payment gateway*, atau sistem langganan SaaS instan di website (penjualan bersifat B2B konsultatif).
- **Bukan Portal Client Login**: Tidak ada autentikasi pengguna atau dashboard internal pada landing page ini.
- **Bukan Form Registrasi yang Panjang**: Menghindari form berbelit-belit yang menghambat alur; fokus aksi adalah pengunduhan dokumen profil dan direct connect via WhatsApp/Email resmi.

---

### 3. AI System & Interactive Features

- **Interactive Telemetry Visualizer**: Komponen visual dinamis di hero section yang menampilkan simulasi metrik uptime, arsitektur microservices, dan enkripsi data untuk memberikan kesan "rekayasa teknologi berkecepatan tinggi".
- **Dynamic Solution Matcher (Optional Micro-Tool)**: Modul interaktif mini sederhana (1-klik selector industri: "Healthcare", "Property", "GovTech", "Hospitality") yang langsung menyorot produk flagship yang relevan tanpa reload halaman.

---

### 4. Technical Specifications

#### 4.1 Architecture & Stack
- **Framework**: Next.js 14/15 (App Router, Server Components untuk konten statis demi SEO maksimal, Client Components untuk interaktivitas motion).
- **Styling**: Tailwind CSS v3/v4 dengan konfigurasi tema khusus Obsidian Luxury (`bg-obsidian-950`, `text-slate-100`, aksen `violet-electric` dan `amber-gold`).
- **Animation Engine**:
  - `framer-motion` (atau `motion` v11) untuk deklarasi transisi komponen, stagger entrance, dan hardware-accelerated transforms (`transform: "translateY()"`).
  - `@studio-freight/lenis` (Lenis Scroll) untuk inisiasi smooth momentum scrolling di desktop dan mobile.
- **Icons & Assets**:
  - Lucide React untuk ikon fungsional yang ramping (*stroke 1.5px*).
  - Vektor SVG resmi untuk logo GARISDev.
- **Domain**: `garisdev.co.id` & `www.garisdev.co.id`
- **Hosting & Infrastructure**: Self-hosted Server (Linux VPS / Dedicated Server milik perusahaan)
  - **Build Output**: Next.js Standalone Build (`output: 'standalone'` pada `next.config.js`) untuk meminimalkan ukuran dependensi dan memori RAM server.
  - **Process Management**: PM2 cluster mode atau Docker Container untuk *zero-downtime reload* dan pemulihan otomatis (*auto-restart*).
  - **Web Server & Reverse Proxy**: Nginx dengan konfigurasi HTTP/2, gzip/brotli compression, serta caching aset statis `/public` dan `/_next/static/`.
  - **Security & SSL/TLS**: Let's Encrypt SSL Certbot dengan auto-renewal, HSTS enabled, dan proteksi reverse proxy firewall (UFW/Fail2ban).

#### 4.2 Integration Points
- **Dokumen Statis**: Penyimpanan lokal teroptimasi untuk `COMPANY PROFILE GARISDEV.pdf` di `/public/documents/` dengan *Content-Disposition* untuk pengunduhan instan.
- **Komunikasi**: Link `mailto:Relation@garisdev.co.id` dengan subjek otomatis *"Inquiry: Konsultasi Solusi IT & Profil GARISDev"*, dan link WhatsApp Business resmi.
- **Google Maps**: Embed rute terkurasi atau link lokasi presisi ke *18 Office Park Suite, Jl. TB. Simatupang No. 18, Jakarta Selatan*.

#### 4.3 Security & Privacy
- Zero user data collection pada v1.0 (tidak ada data pribadi sensitif yang disimpan ke database).
- Header keamanan standar: Content Security Policy (CSP), X-Frame-Options: DENY, X-Content-Type-Options: nosniff.
- Full HTTPS / SSL enforcement.

---

### 5. Risks & Roadmap

#### 5.1 Phased Rollout
- **Phase 1 (MVP — Saat Ini)**:
  - Finalisasi PRD.md, DESIGN.md, SCREENS.md, dan COMPONENTS.md.
  - Perancangan UI/UX presisi pada file `garisdev.fig` menggunakan OpenPencil / OpenCode.
  - Pembangunan landing page Next.js + Tailwind + Framer Motion + Lenis sesuai design token yang disepakati.
  - Deployment ke self-hosted server dengan Nginx reverse proxy dan domain `garisdev.co.id`.
- **Phase 2 (v1.1)**:
  - Penambahan interactive product demo previews (interaktif modal untuk mockup UI Wellora, ApartHub, dan AIRA).
  - Tracking analitik pengunduhan (Google Analytics 4 / PostHog custom event).
- **Phase 3 (v2.0)**:
  - Multi-language switcher (Bahasa Indonesia & English) untuk kebutuhan klien multinasional.

#### 5.2 Technical Risks & Mitigations
- **Risiko Penurunan Performa akibat Animasi Berlebih**:
  - *Mitigasi*: Menjalankan prinsip Emil Kowalski; hanya menganimasikan `transform` dan `opacity` yang diakselerasi GPU. Menonaktifkan animasi berat pada perangkat dengan preferensi `prefers-reduced-motion` atau layar daya rendah.
- **Risiko Beban Ukuran File PDF**:
  - *Mitigasi*: Melakukan kompresi lossless pada dokumen PDF profil agar ukuran unduhan tetap di bawah 4MB untuk kecepatan akses mobile.
- **Risiko Manajemen Server Mandiri**:
  - *Mitigasi*: Menyiapkan konfigurasi Nginx reverse proxy dan Next.js standalone build yang terisolasi serta auto-restart PM2/Docker agar server stabil 24/7 tanpa kebocoran memori.
