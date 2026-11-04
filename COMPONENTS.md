# COMPONENTS.md — Component Registry & Engineering Specs
## PT Global Agra Ripta Solusindo (GARISDev) — Interactive UI Elements

Dokumen ini mendefinisikan spesifikasi komponen kode, token perilaku interaksi, serta audit craft berdasarkan kaidah `@emil-design-eng` dan `@ui-taste`.

---

### 1. Emil Kowalski UI Craft Review Table (Mandatory Standard)

| Before | After | Why |
|---|---|---|
| `transition: all 300ms` | `transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1), opacity 160ms ease-out` | Menghindari overhead performa browser pada properti `all`; tentukan properti spesifik |
| `transform: scale(0)` pada modal/popover | `transform: scale(0.95); opacity: 0` | Benda fisik di dunia nyata tidak muncul dari nol; `scale(0.95)` memberikan ilusi kehadiran natural |
| `ease-in` pada dropdown/drawer | `cubic-bezier(0.32, 0.72, 0, 1)` | `ease-in` membuat UI terasa lambat dan lagging; kurva responsif memberikan feedback instan |
| Tidak ada feedback saat tombol ditekan | `transform: scale(0.97)` pada `:active` | Memberikan kepastian taktil bahwa input sentuhan/klik pengguna telah didengar oleh aplikasi |
| Animasi Framer Motion menggunakan `x` / `y` | Menggunakan `transform: "translateY(16px)"` | Memaksa hardware-acceleration di GPU tanpa drop-frame di main thread saat halaman me-render DOM |
| Tooltip selalu memiliki delay statis | Delay pada tooltip pertama, namun instan (`0ms`) pada tooltip kedua | Menghindari animasi berulang yang membuat pengguna merasa lambat saat menelusuri toolbar |
| Modal membesar dari titik acuan sembarang | `transform-origin: center` pada modal, origin-aware pada popover | Modal harus stabil di tengah layar, sedangkan popover mekar dari tombol pemicunya |

---

### 2. Component Registry & Technical Specs

#### 2.1 Primary Action Button (`DownloadButton`)
Komponen tombol paling vital di halaman, bertugas memicu pengunduhan dokumen resmi Company Profile PDF.

- **Props**:
  - `variant`: `'primary'` (violet gradient accent) | `'secondary'` (obsidian surface) | `'ghost'` (borderless).
  - `size`: `'sm'` (38px - mobile nav) | `'md'` (44px - standard) | `'lg'` (52px - hero & CTA).
  - `icon`: Lucide icon (`Download`, `ArrowRight`, `FileText`).
  - `label`: String teks aksi.
- **Interaksi & Motion**:
  ```css
  .btn-download {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 600;
    border-radius: 9999px; /* Pill luxury shape */
    transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1),
                background-color 160ms ease-out,
                box-shadow 200ms ease-out;
  }
  .btn-download:hover {
    box-shadow: 0 0 24px rgba(99, 102, 241, 0.25);
  }
  .btn-download:active {
    transform: scale(0.97);
  }
  ```
- **Micro-State Behavior**:
  Saat diklik, teks berubah sementara selama 1200ms:
  `"Unduh Profil (PDF)"` $\rightarrow$ `"Menyiapkan Dokumen..."` $\rightarrow$ `"Mengunduh..."` $\rightarrow$ kembali normal.

---

#### 2.2 Navigation Bar (`Navbar`) & Mobile Drawer
Header sticky dengan visual *scrim glass* gelap tanpa efek blur tebal yang berat.

- **Struktur**:
  ```jsx
  <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <LogoMark />
      <DesktopNavLinks />
      <ActionGroup />
    </nav>
  </header>
  ```
- **Perilaku Scroll**:
  - Posisi `scrollY === 0`: Transparan, menyatu dengan latar belakang Hero.
  - Posisi `scrollY > 24px`: Berubah menjadi latar obsidian semi-pekat (`rgba(9, 10, 15, 0.85)`) dengan `backdrop-filter: blur(12px)` dan border bawah subtle `rgba(255, 255, 255, 0.05)`.
- **Mobile Drawer**:
  - Animasi slide dari samping kanan dengan kurva `--ease-drawer` (`cubic-bezier(0.32, 0.72, 0, 1)`).
  - Background overlay gelap dengan opasitas `0.7` yang dapat di-tap untuk menutup seketika.
  - Jarak target sentuh menu mobile minimal `48px` untuk kenyamanan jempol (*thumb-zone friendly*).

---

#### 2.3 Flagship Product Showcase Card (`ProductCard`)
Komponen visual untuk mempresentasikan 6 produk unggulan (Wellora, ApartHub, TenantHub, Stayora, GoAmbulan, AIRA).

- **Struktur Kartu**:
  1. **Header**: Nama produk (`h3`, tegap), industri sasaran (misal: "Residential & Property Management").
  2. **Deskripsi Solusi**: 2–3 kalimat lugas mengenai masalah operasional yang dipecahkan.
  3. **Feature Tags (Pill Minimalis)**: Modul-modul kunci (misal: `Billing Otomatis`, `Visitor Pass`, `Work Order`, `Executive Dashboard`).
  4. **Live Metric / Platform Indicator**: Label status kesiapan (misal: `Web & Mobile App`, `Cloud Native`, `Enterprise Ready`).
- **State & Transisi**:
  - Latar kartu: `--ground-elevated` (`#11131B`).
  - Hover: Border berubah halus dari `rgba(255, 255, 255, 0.06)` menjadi `rgba(99, 102, 241, 0.35)`.
  - Transform saat hover: `transform: translateY(-2px)` (sangat halus, tanpa gerakan melompat drastis).

---

#### 2.4 Service Pillar Card (`ServiceCard`)
Menampilkan 6 pilar layanan rekayasa IT GARISDev.

- **Visual Style**:
  - Datar (*flat*), tenang, dan elegan.
  - Ikon rekayasa minimalis dengan garis ramping (*1.5px stroke width*).
  - Judul layanan tebal (`1.25rem`), deskripsi ringkas berbobot 400 (`0.95rem`), warna `--ink-secondary`.
- **Stagger Effect**:
  Menggunakan Framer Motion `variants` dengan stagger `0.06s` antar kartu saat section memasuki viewport:
  ```jsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, transform: "translateY(16px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
    }
  };
  ```

---

#### 2.5 Corporate Value Card (`ValueCard`) — Nilai SUPORTIF
Menampilkan 7 pilar etos kerja perseroan (Sustainability, Professional, Observe, Relationship, Trust, Innovation, Flexible).

- **Anatomi**:
  - Monogram huruf besar berkarakter (S, P, O, R, T, I, F) dengan aksen warna violet pudar di sudut kanan atas.
  - Nama nilai dalam font tebal.
  - Penjelasan 1 kalimat mengenai bagaimana nilai tersebut diwujudkan dalam pengerjaan proyek klien.

---

#### 2.6 Trust & Legal Verification Widget (`LegalWidget`)
Komponen kepatuhan dan legitimasi legalitas korporasi.

- **Data Grid**:
  - Mengelompokkan NIB, NPWP, Akta Notaris, dan SIUP dalam format tabular dua kolom yang bersih.
  - Dilengkapi tombol satu-klik *"Salin NIB"* dengan feedback teks *"Tersalin!"* (menggunakan `navigator.clipboard`).

---

#### 2.7 Interactive Telemetry Visualizer (`HeroTelemetry`)
Widget visual di Hero Section untuk memberikan kesan rekayasa sistem berkecepatan tinggi:
- Menampilkan grafik SVG minimalis dengan garis telemetri live (animasi *dashoffset* lembut).
- Indikator status sistem: Titik hijau berdenyut halus (*pulsing green dot*) dengan teks `"GARISDev Infrastructure • All Systems Operational"`.
- Angka metrik tabular: Uptime `99.98%`, Tahun Pengalaman `2014–Present`, Solusi Sektor `Enterprise & GovTech`.

---

#### 2.8 Smooth Scroll Wrapper (`SmoothScroll`)
Komponen pembungkus utama aplikasi Next.js menggunakan Lenis.

```jsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```
