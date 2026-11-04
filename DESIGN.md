# DESIGN.md — Design System & Art Direction
## PT Global Agra Ripta Solusindo (GARISDev) — Dark Obsidian Luxury

---

### 1. The Core Idea & Art Direction

#### 1.1 The Idea
> **"Pada halaman ini, presisi garis geometris dan kurva monogram GARISDev bertransformasi menjadi kisi interaktif (*telemetry grid*) dan penanda arah aliran data rekayasa enterprise."**

- **Competitor Test**: Jika nama perusahaan diganti dengan kompetitor konsultan IT biasa, konsep ini tidak akan bekerja. Lambang GARISDev dibentuk dari dua garis sirkular presisi yang saling bertaut (*monogram G*) dengan warna transisi ungu-violet ke biru elektrik. Struktur geometris ini yang menjadi bahasa visual utama (*visual motif*) di seluruh elemen layout, pembatas section, dan visualisasi produk.

#### 1.2 The Anti-Slop House Rules (Berdasarkan `@design-taste-frontend`)
Website ini dirancang secara radikal untuk menghindari "AI generic slop" dengan aturan ketat:
1. **Headline Rule**: Setiap judul (`h1` s/d `h4`) maksimal terdiri dari **2 baris** pada semua ukuran layar (*mobile, tablet, desktop*). Kalimat padat, lugas, bertenaga.
2. **Tanpa Eyebrows / Pill Badges Klise**: Tidak menggunakan badge pill mengambang di atas headline ("*New · Solution*", "*#1 IT Company*"). Informasi krusial diletakkan langsung di dalam kalimat pembuka atau heading.
3. **Tanpa Monospace Buatan**: Monospace hanya digunakan untuk data kode riil atau nilai teknis spesifik. Teks biasa dan angka korporat menggunakan font display/sans berkelas dengan *tabular figures*.
4. **Tanpa Penomoran Indeks Murahan**: Menghilangkan penomoran dekoratif artifisial seperti `01 / 02 / 03` atau `(001)`. Urutan dijelaskan oleh posisi visual, skala, dan substansi teks.
5. **Tanpa Border Hairline Berulang**: Menghindari border 1px abu-abu tipis yang membungkus setiap elemen seperti sangkar. Struktur dipisahkan oleh langkah tone latar (*background tone steps*), ritme ruang (*generous whitespace*), dan kontras permukaan.
6. **Tanpa Gradient Sembarangan**: Warna latar belakang bersifat solid pekat (Obsidian Black). Aksen gradien violet-indigo hanya direservasi khusus untuk lambang monogram logo GARISDev asli dan indikator aksen terpilih.
7. **Tanpa Shadow Mengambang Statis**: Tidak ada drop shadow besar atau efek glow berlebihan saat elemen dalam kondisi diam (*at rest*). Bayangan halus hanya muncul pada elemen yang benar-benar melayang (*floating dropdown/modal*).

---

### 2. Design Tokens & Color System

Palet warna dibangun di atas estetika **Dark Obsidian Luxury** yang tenang, berwibawa, dan tidak silau:

```css
:root {
  /* Surface Grounds (Obsidian Steps) */
  --ground-base: #090A0F;       /* Obsidian Pelet Murni - Background Utama */
  --ground-elevated: #11131B;   /* Slate Deep - Permukaan Card & Panel */
  --ground-surface: #181B26;    /* Soft Slate - State Interaktif & Dropdown */
  --ground-overlay: rgba(9, 10, 15, 0.85); /* Scrim untuk Sticky Navigation */

  /* Ink & Typography */
  --ink-primary: #F8FAFC;      /* High Contrast Titanium White - Judul & Teks Utama */
  --ink-secondary: #94A3B8;    /* Muted Slate - Deskripsi & Metadata */
  --ink-tertiary: #64748B;     /* Deep Steel - Label Sekunder & Footnote */

  /* Brand Accents (From Official GARISDev Identity) */
  --accent-violet: #6366F1;     /* Electric Indigo - Aksen Interaksi Utama */
  --accent-magenta: #9333EA;    /* Royal Purple - Refleksi Monogram GARISDev */
  --accent-cyan: #38BDF8;       /* Deep Sky Cyan - Aksen Sekunder & Status Live */
  --accent-amber: #F59E0B;      /* Warm Gold - Aksen Prestise & Sertifikasi Legal */

  /* Borders & Dividers (Subtle, Tonally Matched) */
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-active: rgba(99, 102, 241, 0.4);
}
```

---

### 3. Typography Hierarchy

Maksimal 2 keluarga huruf (*Two typefaces maximum*):
- **Display & Heading**: `Plus Jakarta Sans` atau `Cabinet Grotesk` (Weight: 700 / 800, Tracking: `-0.03em`, Leading: `0.95–1.05`). Menampilkan kesan rekayasa modern yang tegap dan percaya diri.
- **Body & Controls**: `Inter` atau `Plus Jakarta Sans` (Weight: 400 / 500, Tracking: `-0.01em`, Leading: `1.55–1.6`). Terbaca sangat jernih di ukuran kecil layar smartphone.

#### Type Scale:
- **Hero Title (`h1`)**:
  - Mobile (390px): `2.5rem` (40px), leading `1.05`, maks 2 baris.
  - Desktop (1440px): `4.75rem` (76px), leading `0.98`, maks 2 baris.
- **Section Heading (`h2`)**:
  - Mobile: `1.875rem` (30px), leading `1.15`.
  - Desktop: `2.75rem` (44px), leading `1.08`.
- **Card / Sub-heading (`h3`)**:
  - Mobile: `1.25rem` (20px), leading `1.2`.
  - Desktop: `1.5rem` (24px), leading `1.25`.
- **Body Text (`p`)**:
  - Ukuran: `1rem` (16px) hingga `1.125rem` (18px) di desktop.
  - Warna: `--ink-primary` untuk kalimat pernyataan, `--ink-secondary` untuk paragraf pendukung.

---

### 4. Motion & Animation Decisions (`@emil-design-eng`)

Semua animasi dirancang dengan rasa (*craft sensibility*) tingkat tinggi agar tidak terasa lambat atau menghambat interaksi.

#### 4.1 Custom Easing Curves & Durations
```css
/* Emil Kowalski Core Easings */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);       /* Responsif, gerakan berhenti anggun */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);   /* Aliran natural untuk transisi layout */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);    /* Kurva pegas responsif untuk mobile drawer */
```

#### 4.2 Aturan Gerak Inti
1. **Aturan Durasi**:
   - Feedback tombol / klik: `120ms – 160ms` (`ease-out`).
   - Card hover / fokus: `180ms – 220ms`.
   - Section reveal / modal: `280ms – 320ms`.
   - **Tidak ada animasi UI operasional yang melebihi 350ms**.
2. **Active State Feedback**:
   - Seluruh elemen yang dapat diklik (tombol, tab produk, kartu download) WAJIB memiliki efek:
     ```css
     transition: transform 160ms var(--ease-out);
     &:active { transform: scale(0.97); }
     ```
3. **No Scale(0) Entrances**:
   - Elemen yang muncul TIDAK PERNAH dianimasikan dari `scale(0)` (karena benda nyata tidak muncul dari ketiadaan).
   - Selalu mulai dari `scale(0.95)` dan `opacity: 0` menuju `scale(1)` dan `opacity: 1`.
4. **Staggered Orchestration**:
   - Elemen dalam daftar kartu muncul berurutan dengan jeda singkat `40ms – 60ms` antar elemen, tidak muncul serentak dan tidak jeda terlalu lama.
5. **Hardware-Accelerated Framer Motion**:
   - Menggunakan properti `transform: "translateY(0)"` alih-alih `y` agar diproses langsung oleh GPU tanpa *dropping frame* di main thread.

#### 4.3 Lenis Smooth Scroll Configuration
```javascript
const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});
```

#### 4.4 Reduced Motion Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### 5. Layout Grid & Asymmetry Rules

- **Margin Luar Seimbang**: Margin kiri dan kanan selalu identik di setiap ukuran layar (`1.25rem` / 20px pada mobile; `4rem` / 64px pada desktop lebar).
- **Asymmetric Internal Balance**: Ketidaksimetrisan hanya terjadi di dalam grid (misal: kolom teks di sebelah kiri diimbangi oleh kartu telemetri interaktif di sebelah kanan), tidak pernah membuat satu sisi layar terasa kosong melompong.
- **Section Spacing**: Jarak antar section adalah `100px – 160px` di desktop, dan `64px – 80px` di mobile.
