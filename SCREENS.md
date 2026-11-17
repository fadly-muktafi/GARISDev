# SCREENS.md — Screen Architecture & Section Blueprints
## PT Global Agra Ripta Solusindo (GARISDev) — Responsive Layout Matrix

Dokumen ini memetakan tata letak **Mobile-First** (390px), **Tablet** (768px), dan **Desktop** (1440px) sesuai implementasi di `src/components/`.

---

### Matrix Rangkuman Section

| No | Section | Peran | Komponen Utama | Interaksi |
|---|---|---|---|---|
| 01 | Header & Navigation | Branding + konversi | Logo, 5 anchor link, tombol PDF, hamburger | Adaptive transparent → paper, active section |
| 02 | Hero | Klaim + konversi | Foto ruang rapat, panel crimson, h1 2 baris, 3 statistik | Reveal bertahap, micro-state unduh |
| 03 | Klien | Bukti kredibilitas | Marquee 9 logo institusi, roster 9 klien | Marquee pause on hover |
| 04 | Layanan | Kapabilitas | 6 baris layanan dengan hairline atas | Hover ikon + judul crimson |
| 05 | Interlude | Jeda editorial | Foto koridor + kutipan serif | — |
| 06 | Produk | Portofolio | Rail 7 filter, 6 kartu gelap dengan blueprint UI | Tab filter (framer layout) |
| 07 | Nilai SUPORTIF | Filosofi | Rail 8 huruf, panel judul + deskripsi | Tab per huruf |
| 08 | Company Profile | Konversi utama | Kontak 3 baris, kartu dokumen PDF | Unduh 4 state |
| 09 | Footer | Legal + kontak | 4 kolom info, wordmark raksasa | Anchor ke atas |

---

### Rincian Blueprint

#### 1. Header & Navigation
- **Mobile (390px)** — tinggi `64px`; logo `h-6` kiri; tombol `Profil PDF` (40px) + hamburger 40×40 kanan. Saat di atas hero: latar transparan, logo putih, tombol `paper`. Setelah scroll > 32px: latar `paper/95` + blur, logo gelap, tombol `crimson`.
- **Tablet (768px)** — nav masih disembunyikan (breakpoint `lg`), hamburger tetap; tombol menampilkan ukuran file `11,7 MB`.
- **Desktop (1440px)** — tinggi `80px`; nav 5 tautan di tengah dengan underline aktif (`link-underline`); tombol PDF di kanan.
- **Drawer** — panel kanan `max-w-[420px]`, nav 26px dengan divider, CTA unduh di bawah, kontak legal. Escape menutup, Tab terkurung di dalam panel.

#### 2. Hero
- **Mobile** — grid vertikal: foto `36svh` di atas, panel `crimson` di bawah. Urutan: kicker nama legal → `h1` 2 baris → paragraf → CTA penuh + link "Lihat kapabilitas" → 3 statistik.
- **Desktop** — split `1.12fr / 0.88fr` setinggi `100svh`; foto kiri dengan caption `EST. 2014 — JAKARTA, INDONESIA`, panel crimson kanan.
- **Konten**:
  - `h1`: "Rekayasa digital, *skala nasional.*" (baris kedua Instrument Serif italic)
  - Paragraf: "Kami membangun sistem enterprise, platform operasional, dan integrasi data untuk institusi yang tidak boleh berhenti."
  - Statistik: `12` Tahun beroperasi · `6` Platform flagship · `9+` Institusi nasional.
- **Scrim**: gradien `ink` horizontal (desktop) / vertikal (mobile) + pita 96px di bawah header untuk keterbacaan nav putih.

#### 3. Klien & Mitra Strategis
- **Header** — `h2` "Institusi yang menuntut keandalan mutlak." (maks 2 baris) + paragraf kanan.
- **Logo wall** — marquee 9 klien, tinggi `h-12` mobile / `h-14` desktop, mask 8% tepi, 58 detik, pause saat hover.
- **Roster** — daftar teks 9 institusi: 2 kolom di mobile (nama saja), 3 kolom di `sm+` (nama + kategori), hairline per baris.
- **Klien**: BNPT RI, Mabes TNI, Kemnaker RI, JFX Exchange, PT ISP, Asuransi Jasindo, Mom N Jo, Kementan RI, PT Adinata Graha Raya.

#### 4. Layanan (6 Core Services)
- Latar `paper-deep`; header 2 kolom.
- Grid: 1 kolom mobile → 2 kolom `lg`. Setiap baris: ikon 22px (`stroke 1.25`) + judul 19px + deskripsi + deretan tag; divider hairline di atas tiap baris (bukan border keliling).
- Hover: ikon bergeser `0.5` dan berubah crimson bersama judul.

#### 5. Interlude
- Foto koridor setinggi `54svh` (mobile) / `64svh` (desktop), scrim `ink` 85% bawah.
- Kutipan Instrument Serif italic + label "Filosofi rekayasa GARISDev".

#### 6. Produk Flagship
- Latar `night`. Header: kicker `Platform`, `h2` "Enam platform. Siap beroperasi.", paragraf kanan.
- **Filter rail**: 7 tombol (Semua + 6 kategori) dengan `aria-pressed`. Mobile: scroll horizontal dengan fade mask; `md+`: wrap sehingga semua kategori terlihat; aktif = underline crimson.
- **Grid kartu**: 1 kolom mobile → 2 kolom `md` → 3 kolom `xl`. Kartu `min-h-[380px]` (mobile) / `360px` (desktop), latar `night-elevated`, hover `night-surface`.
- **Isi kartu**: label kategori → jendela blueprint UI (CSS) di kanan atas → nama produk → deskripsi → modul. Kartu **tidak** memakai affordance panah karena tidak ada halaman detail.
- **Penutup**: baris "Solusi teruji lainnya" (E-Government, GIS, Jasindo Claim, Matkomlek).

#### 7. Nilai SUPORTIF
- Rail huruf: 4 kolom mobile (2 baris) → 8 kolom `sm+`; huruf tidak aktif `ink/50`, aktif crimson dengan garis 32px.
- Panel: judul serif italic kiri, deskripsi kanan (`md:grid-cols-[0.4fr_0.6fr]`), tinggi minimum 164px agar tidak melompat saat berganti huruf.
- 8 nilai: Sustainability, **Unggul**, Professional, Observe, Relationship, Trust, Innovation, Flexible.

#### 8. Company Profile (Primary Action)
- Latar `crimson`, teks `paper`.
- Kiri: kicker, `h2` "Bawa presisi ini ke meja Anda.", paragraf, lalu 3 baris kontak (Email / Telepon / WhatsApp) dengan panah ↗, plus alamat.
- Kanan: kartu dokumen `paper` `max-w-[460px]` — bar hitam 4px, logo, `PDF · 2026`, nama legal, tabel 4 sel (Format, Ukuran, Bahasa, Edisi), tombol `Unduh Company Profile`, catatan "Tanpa formulir. Unduhan langsung."

#### 9. Footer
- Latar `night`; grid 4 kolom `lg`: identitas + kontak, Navigasi, Platform, Legalitas.
- Wordmark `GARISDEV.` dengan titik crimson, `clamp(3.5rem, 17vw, 15.5rem)`.
- Bar bawah: copyright 2026, "Jakarta, Indonesia", tautan "Ke atas".

---

### Aturan Verifikasi Responsif

| Aturan | 390px | 768px | 1440px |
|---|---|---|---|
| `h1`/`h2` maksimum baris | 2 | 2 | 2 |
| Padding shell | 20px | 32px | 48px |
| Grid produk | 1 | 2 | 3 |
| Grid layanan | 1 | 1 | 2 |
| Rail huruf SUPORTIF | 4 | 8 | 8 |
| Nav utama | drawer | drawer | inline |
| Tinggi header | 64px | 64px | 80px |

Cek ulang setiap perubahan dengan `tsc --noEmit`, `next build`, dan screenshot 390/768/1440.
