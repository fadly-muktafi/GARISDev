# DESIGN.md — Design System & Art Direction
## PT Global Agra Ripta Solusindo (GARISDev) — Light Editorial Premium

---

### 1. The Core Idea & Art Direction

#### 1.1 The Idea
> **"GARISDev diformalkan seperti laporan tahunan sebuah institusi: kertas gading, tipografi hitam besar, satu warna tinta merah, dan fotografi ruang kerja yang tenang."**

Situs ini bukan katalog teknologi. Ia adalah *dokumen resmi* yang bisa dibaca dalam 60 detik. Seluruh halaman dibangun dari tiga bahan saja — kertas (`paper`), tinta (`ink`), dan satu aksen merah tua (`crimson`) — ditambah fotografi interior kantor sebagai satu-satunya elemen fotografis.

- **Competitor Test**: Jika nama perusahaan diganti dengan konsultan IT lain, desain ini tetap berdiri, tetapi tidak akan *terasa* GARISDev. Yang mengikatnya adalah kombinasi: ritme editorial (kicker → judul → paragraf), angka tabular yang tenang, marquee logo institusi negara, dan aksen merah yang hanya muncul pada aksi konversi dan status aktif.
- **Referensi arah**: struktur dan ritme *"Classic Innovation Agency"* (POFO / ThemeZaa) — hero fotografi penuh, tipografi besar, logo wall, penomoran visi — diangkat dengan tipografi modern dan palet yang jauh lebih disiplin.

#### 1.2 The Anti-Slop House Rules
1. **Headline Rule**: Setiap `h1`–`h4` maksimal **2 baris** di 390px, 768px, dan 1440px. Gunakan `text-balance` dan `max-w-[Nch]`; jangan pernah membiarkan judul pecah 3 baris.
2. **Tanpa Eyebrow / Pill Badge**: Tidak ada badge melayang ("*New · Solution*", "*#1 IT Company*"). Label kecil di atas judul hanya berupa *kicker* teks polos berhuruf kapital ber-tracking lebar, tanpa bingkai.
3. **Tanpa Monospace Buatan**: Monospace hanya untuk kode/data teknis riil. Angka korporat memakai sans display dengan `font-variant-numeric: tabular-nums` (kelas `.tnum`).
4. **Tanpa Indeks Dekoratif**: Tidak ada penomoran `01 / 02 / 03` atau `(001)`. Urutan dijelaskan oleh posisi, skala, dan isi.
5. **Tanpa Border Hairline Keliling**: Kartu tidak dibingkai 1px. Kedalaman dibangun dari langkah tone latar (`paper` → `paper-deep` → `night-elevated` → `night-surface`) dan ruang kosong. Garis hanya dipakai sebagai *divider horizontal* (`.rule`), bukan kandang.
6. **Disiplin Gradien**: Latar selalu solid. Gradien hanya boleh dipakai sebagai *scrim* di atas foto untuk keterbacaan teks — tidak pernah sebagai dekorasi latar.
7. **Tanpa Shadow Statis**: Tidak ada drop shadow/glow saat diam. Shadow hanya pada panel yang benar-benar mengambang (mobile drawer).
8. **Kontras Minimum**: Teks kecil (≤13px) wajib ≥ 4.5:1; teks besar (≥24px) ≥ 3:1. Warna "faint" bukan alasan untuk membuat label tidak terbaca.

---

### 2. Design Tokens & Color System

Palet **Light Editorial Premium** — kertas hangat, tinta hampir hitam, satu aksen oxblood:

```css
:root {
  /* Grounds */
  --paper:        #F6F4EF;   /* Latar utama — kertas gading */
  --paper-deep:   #EDE9E1;   /* Section bergantian (Layanan) */
  --paper-dim:    #E4DFD5;   /* Permukaan dalam kertas */
  --night:        #0E0D0B;   /* Section gelap (Produk, Footer) */
  --night-elev:   #171411;   /* Kartu di atas night */
  --night-surface:#201C17;   /* Hover kartu */

  /* Ink */
  --ink:          #14120F;   /* Judul & teks utama (15.9:1 di paper) */
  --ink-soft:     #3D3932;   /* Paragraf penekanan (9.5:1) */
  --ink-muted:    #514C44;   /* Paragraf pendukung (7.0:1) */
  --ink-faint:    #6B655B;   /* Label mikro ≤11px (4.8:1 di paper-deep) */

  /* Accent — satu-satunya warna */
  --crimson:      #A8132C;   /* Aksi konversi, status aktif, aksen monogram */
  --crimson-deep: #7C0D20;   /* Hover tombol crimson */
  --crimson-light:#C2404F;   /* Garis & detail halus */

  /* Lines */
  --line:         rgba(20, 18, 15, 0.14);   /* divider di kertas */
  --line-light:   rgba(246, 244, 239, 0.16);/* divider di night */
}
```

**Aturan pemakaian warna**
- `crimson` hanya untuk: tombol unduh, status nav aktif, underline tab aktif, huruf SUPORTIF aktif, dan titik pada wordmark footer. Tidak untuk dekorasi latar.
- Di atas `crimson`, teks memakai `paper` dengan opasitas **≥ 75%** untuk label dan **≥ 85%** untuk paragraf.
- Di atas `night`, teks memakai `paper` dengan opasitas **≥ 55%** untuk label dan **≥ 65%** untuk paragraf.
- Logo klien ditampilkan `grayscale` + `mix-blend-multiply` di atas kertas, `opacity 80%` saat diam, penuh saat hover.

---

### 3. Typography Hierarchy

Dua keluarga huruf, tidak lebih:

- **Display & Teks**: `Inter Tight` (variable, via `next/font/google`). Netral, rapat, modern — membawa kesan dokumen teknis yang tenang.
- **Aksen Editorial**: `Instrument Serif Italic` (weight 400). **Hanya** untuk satu frasa per layar: baris kedua hero, judul nilai SUPORTIF, dan kutipan interlude. Tidak pernah untuk teks berjalan.

#### Type Scale (nilai implementasi)
| Peran | Mobile (390) | Desktop (1440) | Leading / Tracking |
|---|---|---|---|
| Hero `h1` | `clamp(2.3rem, 7vw, 3.5rem)` | `clamp(2.9rem, 4vw, 3.6rem)` | `0.98` / `-0.045em` |
| Section `h2` | `clamp(1.85rem, 4.2vw, 3.15rem)` | sama | `1.04` / `-0.035em` |
| Card name `h3` | `clamp(1.7rem, 2.4vw, 2rem)` | sama | `1.0` / `-0.035em` |
| Service `h3` | `19px` | `19px` | `snug` / `-0.02em` |
| Body | `14px` | `15px` | `1.625` |
| Card body | `12.5px` | `12.5px` | `1.625` |
| Kicker / label | `10px` | `11px` | uppercase, `0.22em` |
| Meta mikro | `9.5px` | `9.5px` | uppercase, `0.15em` |

**Aturan tipografi**
- Judul selalu `font-medium` (500), bukan bold — kemewahan datang dari ukuran dan ruang, bukan ketebalan.
- Negative tracking hanya pada ukuran display; teks kecil selalu positif/normal.
- Angka statistik dan metadata dokumen memakai `.tnum`.
- Italic serif tidak boleh dipakai pada teks < 1.6rem.

---

### 4. Motion & Animation Decisions (`@emil-design-eng`)

#### 4.1 Easing & Durasi
```css
--ease-out:    cubic-bezier(0.23, 1, 0.32, 1);   /* default seluruh UI */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);   /* mobile drawer */
```
- Feedback tombol / klik: `120–160ms`
- Hover kartu & link: `180–220ms`
- Reveal section: `280–320ms`, stagger `40–60ms`
- **Tidak ada animasi UI operasional > 350ms** (marquee logo dikecualikan — itu ambient, bukan UI).

#### 4.2 Aturan Gerak Inti
1. **Active feedback wajib** pada setiap elemen klik:
   ```css
   transition: transform 160ms var(--ease-out);
   &:active { transform: scale(0.97); }
   ```
   Diimplementasikan lewat kelas utilitas `.press`.
2. **Tidak pernah `scale(0)`**: entrance selalu `opacity 0 → 1` dengan `translateY(16–18px) → 0`, atau `scale(0.95) → 1`.
3. **GPU-only**: Framer Motion menganimasikan `transform: "translateY(0)"`, bukan shorthand `y`.
4. **Reveal sekali**: `whileInView` + `viewport={{ once: true, margin: '-60px' }}`. Konten tidak pernah berkedip saat scroll balik.
5. **Transformasi panel nilai**: `AnimatePresence mode="wait"`, `200ms`, `translateY(8px)` masuk / `-6px` keluar.
6. **Marquee klien**: dua track identik, `translate3d(-50%)` linear, 58 detik, pause saat hover, mask 8% di kedua tepi.

#### 4.3 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .marquee__track { animation: none !important; }
  .marquee { overflow-x: auto; mask-image: none; }
  .press:active { transform: none; }
}
```
Komponen yang memakai Framer Motion memeriksa `useReducedMotion()` dan melepas `initial`/`animate`.

---

### 5. Layout Grid & Composition

- **Shell**: `max-width: 1320px`, padding `20px` (mobile) → `32px` (sm) → `48px` (lg).
- **Section rhythm**: `py-20` (80px) di mobile, `py-28` (112px) di desktop. Nilai dijaga konsisten agar halaman terasa seperti satu dokumen.
- **Grid asimetris**: header section memakai `lg:grid-cols-[1.3fr_0.7fr]` — judul lebar di kiri, paragraf pengantar sempit di kanan, keduanya `items-end`.
- **Anchor offset**: setiap section memakai `scroll-mt-24` (96px) agar judul tidak tertutup header 64–80px.
- **Urutan ground** (ritme terang–gelap):

| # | Section | Latar |
|---|---|---|
| 1 | Hero | foto + panel `crimson` |
| 2 | Klien | `paper` |
| 3 | Layanan | `paper-deep` |
| 4 | Interlude | foto gelap + kutipan |
| 5 | Produk | `night` |
| 6 | Nilai SUPORTIF | `paper` |
| 7 | Company Profile / Kontak | `crimson` |
| 8 | Footer | `night` |

---

### 6. Photography

- Dua foto saja, keduanya interior kantor bernuansa netral-hangat: `hero-office.jpg` (ruang rapat) dan `interlude-office.jpg` (koridor kaca).
- Foto selalu `object-cover`, tidak pernah diberi filter warna.
- Scrim hanya untuk keterbacaan: gradien `ink` 20–55% di sisi teks, plus pita 96px di bawah header agar navigasi putih tetap terbaca di atas langit-langit terang.
- Tidak ada stok foto produk. Produk divisualkan sebagai *blueprint* antarmuka (CSS murni) di dalam kartu gelap.
