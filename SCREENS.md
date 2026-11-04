# SCREENS.md — Screen Architecture & Section Blueprints
## PT Global Agra Ripta Solusindo (GARISDev) — Responsive Layout Matrix

Dokumen ini memetakan tata letak hierarki visual secara **Mobile-First** (390px), serta penyesuaian adaptifnya pada **Tablet** (768px) dan **Desktop** (1440px).

---

### Matrix Rangkuman Section

| No | Nama Section | Peran Halaman | Komponen Utama | Primary Interactivity |
|---|---|---|---|---|
| 01 | **Header & Navigation** | Akses cepat & branding | Logo GARISDev, Menu Anchor, CTA Button | Sticky header dengan backdrop blur halus |
| 02 | **Hero Section** | Penjelasan instan & konversi | Headline 2-baris, CTA Unduh PDF, Telemetry Card | Active scale, spring reveal, live status badge |
| 03 | **Trust & Legal Marquee** | Bukti legitimasi & kredibilitas | Logo Klien Resmi, Badge Legalitas Perseroan | Infinite seamless logo ticker, legal card |
| 04 | **6 Core Services** | Kapabilitas teknis enterprise | 6 Card Layanan Rekayasa IT | Hover glow terarah, stagger entrance |
| 05 | **6 Flagship Products** | Portofolio produk siap pakai | Interactive Tab Selector, Product Display Cards | Smooth tab transition, module highlights |
| 06 | **Corporate Values (SUPORTIF)** | Filosofi & budaya kerja | 7 Kartu Nilai (S-U-P-O-R-T-I-F) | Interactive accordion / kinetic scroll cards |
| 07 | **Primary Action Section** | Final lead conversion | Download Card, Metadata File PDF, Instant Button | Micro-animation progress saat klik download |
| 08 | **Footer & Headquarter** | Kontak legal & alamat fisik | Alamat TB Simatupang, Kontak Resmi, Copyright | Direct mailto & Google Maps navigation |

---

### Rincian Blueprint Per Section

#### 1. Header & Navigation Bar
- **Mobile (390px)**:
  - Tinggi: `64px`.
  - Kiri: Logo Monogram G Emblem GARISDev (`36px`).
  - Kanan: Tombol Mini "Unduh PDF" dengan ikon panah bawah (`38px` height) + Tombol Hamburger Menu (icon Lucide `Menu`).
  - Hamburger Drawer: Full-height overlay dari kanan, berisi anchor link (Layanan, Produk, Nilai, Legalitas, Kontak) dengan jarak tap minimum `48px`.
- **Tablet (768px)**:
  - Tinggi: `72px`. Logo lengkap GARISDev terlihat jelas.
  - Link navigasi mulai ditampilkan ringkas, tombol "Unduh Profil" tampil penuh.
- **Desktop (1440px)**:
  - Tinggi: `80px`.
  - Struktur 3-kolom seimbang:
    - Kiri: Logo resmi GARISDev Horizontal (Emblem + Teks).
    - Tengah: Pill navigasi minimalis tanpa border tebal (*Layanan*, *Produk Unggulan*, *Nilai SUPORTIF*, *Legalitas*, *Kontak*).
    - Kanan: Tombol Primary Action *"Unduh Profil (PDF)"* dengan efek `scale(0.97)` saat ditekan.

---

#### 2. Hero Section
- **Karakter Visual**: Gelap pekat, atmosferik, tegas, berwibawa.
- **Headline (Aturan 2 Baris)**:
  > **"Rekayasa Perangkat Lunak & Terobosan Solusi Digital"**
- **Supporting Paragraph (1 Paragraf Padat)**:
  > *"PT Global Agra Ripta Solusindo (GARISDev) merancang arsitektur sistem enterprise, produk digital terukur, dan transformasi teknologi terpercaya sejak 2014."*
- **Action Buttons**:
  1. **Primary Button**: `Unduh Profil Perusahaan (PDF)` — Background aksen violet gelap dengan teks putih tajam, ikon download Lucide.
  2. **Secondary Button**: `Eksplorasi Solusi ↓` — Border subtle, scroll halus langsung ke section produk.
- **Hero Visual Object**:
  - **Mobile**: Kartu Telemetri Kompak yang menunjukkan ringkasan performa teknis (SLA 99.9%, Uptime, Rekam Jejak 2014–Sekarang, Enkripsi Tingkat Tinggi).
  - **Desktop**: Split 55/45. Sisi kiri memuat teks penawaran dan aksi unduh; sisi kanan memuat visualisasi arsitektur interaktif GARISDev (koneksi antar modul sistem, visualisasi microservices, dan status server live).

---

#### 3. Trust Credentials & Legal Transparency
- **Bagian Klien Institusional & Enterprise**:
  - Logo klien diproses monokromatik abu-abu terang dengan opasitas `70%` dan menyala lembut saat di-hover.
  - Menampilkan klien strategis: **BNPT**, **Mabes TNI**, **Kementerian Ketenagakerjaan**, **Kementerian Pertanian**, **Jakarta Futures Exchange (JFX)**, **Mom N Jo**, **PT ISP**, **Asuransi Jasindo**, dan **PT Adinata Graha Raya**.
- **Bagian Transparansi Legalitas**:
  - Disajikan dalam kotak datar bervolume (*ground-elevated*):
    - **Nama Badan Hukum**: PT Global Agra Ripta Solusindo
    - **Akta Pendirian**: No. 394, Tanggal 29 Januari 2021 (Notaris Nurlisa Uke Desy, S.H., M.Kn.)
    - **NIB**: `124700220599`
    - **NPWP**: `41.298.684.6-017.000`
    - **SIUP**: Ketentuan Pasal 19 ayat (2) dan Pasal 32 PP No.24 Th. 2018

---

#### 4. 6 Core Services (Layanan Rekayasa IT)
Struktur penyajian 6 pilar keahlian:
1. **Digital Strategy & Consulting**: Perencanaan roadmap arsitektur teknologi, analisis kelayakan sistem, dan audit digitalisasi enterprise.
2. **Web Application Development**: Pembangunan web app berperforma tinggi, aman, scalable, dan berbasis cloud modern.
3. **Mobile App Development**: Pengembangan aplikasi iOS dan Android native/cross-platform untuk ekosistem konsumen dan enterprise.
4. **System Integration**: Menghubungkan berbagai sistem heterogen melalui API terpadu, middleware aman, dan pipeline data efisien.
5. **Dashboard & Business Intelligence**: Visualisasi data real-time, monitoring operasional, dan analitik bisnis terpusat untuk pengambilan keputusan direksi.
6. **Maintenance & Technology Support**: Pengawalan infrastruktur 24/7, pembaruan keamanan preventif, dan optimalisasi sistem berkelanjutan.
- **Layout**:
  - Mobile: Single column scroll vertikal, kartu tegap dengan padding `24px`.
  - Tablet: Grid 2 kolom seimbang.
  - Desktop: Grid 3 kolom x 2 baris dengan jarak antar kartu `24px`.

---

#### 5. 6 Flagship Products (Solusi Siap Pakai)
Section ini menampilkan 6 produk unggulan hasil riset & pengembangan terverifikasi:
1. **Wellora** (Wellness & Spa Management System):
   - *Lingkup*: Booking online, POS terintegrasi, manajemen terapis, kontrol stok produk per gerai, dan laporan operasional komprehensif.
2. **ApartHub** (Residential & Apartment Management Platform):
   - *Lingkup*: Aplikasi penghuni (resident app), tagihan otomatis (billing), reservasi fasilitas, manajemen tamu (visitor management), dan work order perawatan.
3. **TenantHub** (Tenant & Mall Management Platform):
   - *Lingkup*: Portal tenant, billing sewa & utilitas, izin kerja (*permit-to-work*), jadwal bongkar muat (*loading dock*), dan alur kepatuhan.
4. **Stayora** (Hotel Management & Guest Experience Platform):
   - *Lingkup*: Reservasi kamar, profil tamu personal, koordinasi housekeeping & room service, billing kasir hotel, dan dashboard okupansi real-time.
5. **GoAmbulan** (Healthcare On-Demand & Dispatch Platform):
   - *Lingkup*: Pemesanan armada ambulans instan, live GPS tracking, manajemen rute darurat pasien, dan monitoring operator terpusat.
6. **AIRA** (Advanced Intelligence Research & Analytics):
   - *Lingkup*: Monitoring percakapan publik, analisis sentimen berbasis AI, workspace investigasi digital, dan pelaporan intelijen otomatis.
- **Highlight Solusi Digital Lainnya**:
  - Baris ringkas di bagian bawah yang merangkum solusi teruji lainnya: *E-Government Application, Geospatial Housing Mapping (GIS), Agricultural Insurance Claim System (E-Claim Jasindo), Sistem Manajemen Aset (Matkomlek), dan Sistem Persuratan Digital*.

---

#### 6. Corporate Values — SUPORTIF
Mempresentasikan nilai-nilai inti GARISDev secara percaya diri:
- **S — Sustainability**: Menjaga kualitas layanan jangka panjang yang berkelanjutan.
- **P — Professional**: Kompetensi tinggi, efisiensi kerja, dan tanggung jawab penuh.
- **O — Observe**: Selalu mengamati perkembangan teknologi termutakhir untuk diimplementasikan.
- **R — Relationship**: Membangun kemitraan strategis yang harmonis dan saling menguntungkan.
- **T — Trust**: Menjaga integritas dan kepercayaan pelanggan serta stakeholder.
- **I — Innovation**: Menghadirkan terobosan kreatif yang memecahkan masalah nyata.
- **F — Flexible**: Adaptif terhadap dinamika industri dan kebutuhan spesifik klien.
- **Layout**:
  - Mobile: Kartu vertikal ringkas dengan inisial huruf bold aksen violet.
  - Desktop: Horizontal track interaktif atau grid 4-3 yang elegan dan seimbang.

---

#### 7. Primary Action Section — Unduh Profil Resmi (PDF)
Section khusus dengan kontras tinggi untuk memastikan konversi utama tercapai:
- **Headline**: *"Pelajari Rekam Jejak dan Solusi Lengkap Kami"*
- **Deskripsi**: *"Unduh dokumen resmi Company Profile PT Global Agra Ripta Solusindo untuk evaluasi teknis, portofolio proyek terperinci, dan proposal kemitraan."*
- **Aksi Nyata**:
  - Kartu Dokumen Interaktif yang memperlihatkan preview sampul depan Company Profile (`COMPANY PROFILE GARISDEV.pdf`).
  - Spesifikasi dokumen: `Format: PDF • Ukuran: Resmi • Bahasa: Indonesia / Teknis`.
  - Tombol Utama: **"Unduh Company Profile (PDF)"** — memicu pengunduhan instan.
  - Link Sekunder: *"Ingin berdiskusi langsung? Hubungi Relation@garisdev.co.id"*.

---

#### 8. Footer & Kontak Kantor Pusat
- **Identitas**: Wordmark GARISDev besar dan elegan pada bagian penutup.
- **Detail Kontak Resmi**:
  - **Alamat Fisik**: 18 Office Park Suite, Jl. TB. Simatupang No. 18, Rt 002/001, Kebagusan, Pasar Minggu, Jakarta Selatan, DKI Jakarta 12520.
  - **Telepon**: `(021) 80674603`
  - **Email Resmi**: `Relation@garisdev.co.id`
  - **Website**: `www.garisdev.co.id`
- **Copyright**: `© 2026 PT Global Agra Ripta Solusindo (GARISDev). Seluruh Hak Cipta Dilindungi.`
