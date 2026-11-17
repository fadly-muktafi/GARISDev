# COMPONENTS.md — Component Registry & Engineering Specs
## PT Global Agra Ripta Solusindo (GARISDev) — Interactive UI Elements

Spesifikasi komponen yang benar-benar ada di `src/components/`, beserta token perilaku interaksi berdasarkan `@emil-design-eng` dan `@ui-taste`.

---

### 1. Emil Kowalski UI Craft Review Table (Mandatory Standard)

| Before | After | Why |
|---|---|---|
| `transition: all 300ms` | properti spesifik, `160–220ms` | Menghindari biaya compositing untuk properti yang tidak berubah |
| `transform: scale(0)` pada entrance | `opacity: 0` + `translateY(16–18px)` | Benda nyata tidak muncul dari ketiadaan |
| `ease-in` pada drawer | `cubic-bezier(0.32, 0.72, 0, 1)` | Kurva responsif memberi feedback instan |
| Tanpa feedback saat ditekan | `.press:active { transform: scale(0.97) }` | Kepastian taktil bahwa input diterima |
| Framer Motion `x`/`y` | `transform: "translateY(...)"` | GPU-only, tanpa drop frame di main thread |
| Border 1px keliling kartu | divider horizontal + tone latar | Menghindari "sangkar" visual |
| Label abu 9px `#9B958A` | `ink-faint #6B655B` | Kontras 2.5:1 → 4.8:1 (lolos AA) |

---

### 2. Component Registry

#### 2.1 `DownloadButton` — `ui/download-button.tsx`
Satu-satunya aksi konversi. Selalu `<a href={COMPANY_PROFILE.href} download>` — bukan JavaScript handler, agar tetap bekerja tanpa JS.

- **Props**: `variant` (`ink` | `paper` | `crimson` | `outline`), `compact`, `label`, `showMeta`, `className`.
- **State machine** (`aria-live="polite"`):
  `idle → preparing (420ms) → downloading (830ms) → done (2150ms) → idle`
  Label: `Unduh Profil` → `Menyiapkan…` → `Mengunduh…` → `Tersimpan`.
- **Ikon**: `ArrowDownToLine` → `Loader2` (spin) → `Check`, `strokeWidth 1.5`.
- **Bentuk**: sudut tegas (bukan pill), tinggi minimum 52px (44px di header), `text 13px/500`.
- **Feedback**: `.press` (`scale 0.97` pada `:active`), ikon bergeser `translateY(2px)` saat hover.
- **Metadata**: ukuran file `11,7 MB` ditampilkan `opacity-80`, disembunyikan di bawah `sm`.

#### 2.2 `Header` — `Header.tsx`
- **Perilaku**: `scrollY > 32` menukar state. Transparan (logo putih, teks `paper/80`, tombol `paper`) → `paper/95` + `backdrop-blur-md` + `border-b line` (logo gelap, teks `ink-soft`, tombol `crimson`).
- **Active section**: `IntersectionObserver` dengan `rootMargin: '-35% 0px -55% 0px'`; link aktif memakai `data-active` pada `.link-underline`.
- **Transisi**: `transition-[background-color,border-color,box-shadow] 300ms`.
- **Breakpoint**: nav inline hanya `lg+`; di bawahnya tombol hamburger 40×40.

#### 2.3 `MobileDrawer` — `MobileDrawer.tsx`
- Slide dari kanan, `translateX(100%) → 0`, `320ms`, `--ease-drawer`.
- Overlay `ink/45` + `backdrop-blur-sm`, klik untuk menutup.
- Saat terbuka: `body.overflow = hidden` dan `lenis.stop()`; ditutup: `lenis.start()`.
- **Keyboard**: `Escape` menutup, `autoFocus` pada tombol tutup, focus trap manual pada `Tab`/`Shift+Tab`, `role="dialog"` + `aria-modal`.
- **Navigasi**: tombol per section memanggil `lenis.scrollTo(target, { duration: 1.1 })` setelah drawer mulai menutup (240ms).

#### 2.4 `HeroSection` — `HeroSection.tsx`
- `motion.div` bertahap (`0.05 → 0.30s`, stagger 60ms) dengan `transform: translateY(16px) → 0`.
- `useReducedMotion()` melepas seluruh `initial`/`animate`.
- Foto `next/image priority` + dua scrim (gradien arah teks + pita 96px di bawah header).
- Statistik memakai `.tnum`.

#### 2.5 `SectionClients` + `InfiniteMarquee` — `SectionClients.tsx`, `ui/infinite-marquee.tsx`
- Marquee: dua `.marquee__group` identik, `translate3d(0 → -50%)` linear, durasi via CSS variable `--marquee-duration` (58s), `will-change: transform`, pause saat hover, mask 8% kiri/kanan.
- Logo: `grayscale`, `mix-blend-multiply`, `opacity 80%` → `100%` saat hover grup; `max-h-7` mobile / `max-h-10` desktop.
- Roster klien: `<ul>` 2 kolom mobile (nama saja) / 3 kolom `sm+` (nama + kategori), `border-b line` per item.

#### 2.6 `SectionCoreServices` — `SectionCoreServices.tsx`
- Grid 1 → 2 kolom (`lg`), tiap item `grid-cols-[auto_1fr]` dengan ikon Lucide `strokeWidth 1.25`.
- Divider `border-t line` per baris; stagger `Reveal` `(index % 2) * 0.05s`.
- Hover: ikon `translateX(2px)` + crimson, judul crimson.

#### 2.7 `SectionFlagshipProducts` + `ProductPreview`
- **Filter**: `role="group"` + `aria-pressed` (ini filter, bukan tab panel); state `activeCategory`; hasil difilter di klien. Animasi grid memakai `<motion.div layout>` + `AnimatePresence mode="popLayout"` (`240ms`). Exit memakai `scale(0.98)`, tidak pernah `scale(0)`.
- **Kartu**: `article` non-interaktif (tanpa panah) — tidak ada halaman detail, jadi tidak ada affordance palsu. Hover hanya mengubah tone latar, memindahkan blueprint, dan menarik garis crimson di tepi bawah.
- **`ProductPreview`**: blueprint antarmuka dari CSS murni (`chart` | `list` | `map`), `aria-hidden`, `pointer-events-none`. Posisi `absolute` kanan-atas, `top-14` mobile / `top-9` desktop, `max-h-[124px] overflow-hidden` di mobile agar tidak pernah menabrak judul kartu.

#### 2.8 `SectionSuportifValues` — `SectionSuportifValues.tsx`
- 8 huruf = 8 nilai (SUPORTIF): S, U, P, O, R, T, I, F — termasuk **Unggul**.
- Rail `role="tablist"` dengan roving tabindex (`0` hanya pada huruf aktif, panah kiri/kanan, Home/End): 4 kolom mobile, 8 kolom `sm+`; huruf tidak aktif `ink/50`, aktif `crimson` + garis 32px.
- Panel `role="tabpanel"` + `aria-labelledby` ke tab aktif, dengan `AnimatePresence mode="wait"`: masuk `translateY(8px)`, keluar `translateY(-6px)`, `200ms`; `md:min-h-[164px]` mencegah layout shift.

#### 2.9 `SectionPrimaryAction` — `SectionPrimaryAction.tsx`
- Latar `crimson`; 3 baris kontak (`mailto:`, `tel:`, WhatsApp `target="_blank"`) dengan `border-t paper/25` dan panah ↗ yang bergeser saat hover.
- Kartu dokumen: `paper` `max-w-[460px]`, bar hitam 4px di atas, tabel 2×2 (`Format`, `Ukuran`, `Bahasa`, `Edisi`) memakai `.tnum`, lalu `DownloadButton variant="ink"`.

#### 2.10 `Footer` — `Footer.tsx`
- Grid 2 kolom mobile → 4 kolom `lg` (`1.5fr .85fr .85fr 1.1fr`).
- Wordmark `GARISDEV.` `clamp(3.5rem, 17vw, 15.5rem)`, titik crimson, `aria-hidden`.
- Data legalitas dari `CREDENTIALS`; bar bawah memuat copyright dan tautan "Ke atas".

#### 2.11 `Reveal` — `ui/reveal.tsx`
- `whileInView`, `once: true`, `margin: '-60px'`, `320ms`, `translateY(18px) → 0`.
- `useReducedMotion()` → render `<div>` polos tanpa style animasi.

#### 2.12 `SmoothScrollProvider`
- Lenis: `duration 1.15`, easing Expo-out, `smoothWheel`, `touchMultiplier 1.5`, RAF loop, cleanup `lenis.destroy()`.
- Menghormati `prefers-reduced-motion` lewat aturan CSS global (`scroll-behavior: auto`).

---

### 3. Design Token Checklist untuk Komponen Baru

1. Latar hanya dari `paper` / `paper-deep` / `night` / `night-elevated` / `crimson`.
2. Teks memakai `ink`, `ink-soft`, `ink-muted`, `ink-faint` (bukan hex baru).
3. Setiap elemen klik memakai `.press` atau `active:scale-[0.97]`.
4. Setiap transisi ≤ `350ms` dengan `cubic-bezier(0.23, 1, 0.32, 1)`.
5. Setiap komponen client-side yang beranimasi memeriksa `useReducedMotion()`.
6. Ikon Lucide selalu `strokeWidth 1.5` (1.25 untuk ikon layanan 22px).
7. Tidak menambah route baru — semua navigasi adalah anchor `#id`.
