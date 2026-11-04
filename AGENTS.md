# AGENTS.md — GARISDev Company Profile

Official single-page company profile & landing page for **PT Global Agra Ripta Solusindo (GARISDev)**.
Current state: **Phase 1 (MVP — Planning & Design)**. Specifications are locked; implementation is pending.

---

## Source of Truth & Session Start Order

1. `PRD.md` — Scope, personas, non-goals, and primary conversion targets.
2. `DESIGN.md` — Art direction (Dark Obsidian Luxury), design tokens, typography, and motion curves.
3. `SCREENS.md` — Mobile-first (390px) responsive layout matrix across all 8 page sections.
4. `COMPONENTS.md` — Engineering specs and micro-interactions for the 8 core UI components.
5. `garisdev.fig` — Design source canvas, managed via OpenPencil (`tab-2`, page `0:3`).

---

## Non-Negotiable Architecture Constraints

- **Strictly Single-Page (No Multi-Page Routes)**: Do not create `/about`, `/services`, `/contact`, or auth/dashboard routes (explicit non-goals in `PRD.md` §2.3). Navigation must rely exclusively on smooth anchor scrolling via Lenis.
- **Single Primary Conversion Action**: Every primary CTA (sticky header, hero CTA, bottom conversion block) must directly trigger the download of `/public/documents/COMPANY PROFILE GARISDEV.pdf`. Include tactile feedback and micro-states (`Unduh Profil` → `Menyiapkan...` → `Mengunduh...`).
- **Target Tech Stack**: Next.js 14/15 App Router (Server Components for static content, Client Components for motion), Tailwind CSS, Framer Motion (`motion` v11), `@studio-freight/lenis`, and Lucide React (`stroke 1.5px`).

---

## Anti-Slop & Craft Rules (Enforce Without Exception)

- **Headline Rule**: All headings (`h1` through `h4`) must NEVER exceed **2 lines** across all viewports (Mobile 390px, Tablet 768px, Desktop 1440px).
- **No Eyebrow / Pill Badges**: Never add floating pill badges above headings (e.g. `New · Solution` or `#1 IT Company`).
- **No Faux Monospace or Arbitrary Numbers**: Monospace is reserved strictly for real code/technical data; use sans display with tabular figures for numbers. Omit artificial indices (`01 / 02 / 03`).
- **No Perimeter Hairline Borders**: Do not enclose every card in a 1px border. Delineate depth through background tone steps:
  - `--ground-base`: `#090A0F` (pure obsidian ground)
  - `--ground-elevated`: `#11131B` (cards and elevated panels)
  - `--ground-surface`: `#181B26` (interactive elements and surfaces)
- **Gradient Discipline**: Solid dark obsidian backgrounds only. Violet-indigo gradients are reserved exclusively for the official GARISDev monogram G emblem and active indicators.

---

## Motion & Interaction Standards (`@emil-design-eng`)

- **Never Animate from `scale(0)`**: Entrance animations must begin from `scale(0.95)` with `opacity: 0` to `scale(1)` with `opacity: 1`.
- **GPU-Accelerated Transforms**: Animate `transform: "translateY(0)"` instead of Framer Motion's `y` property to prevent dropped frames on the main thread.
- **Mandatory Active Feedback**: Every clickable element (`DownloadButton`, product cards, tabs) must implement:
  ```css
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
  &:active { transform: scale(0.97); }
  ```
- **Duration Cap**: No operational UI transition may exceed `350ms`. Button feedback: `120–160ms`; card hover: `180–220ms` (`translateY(-2px)`); section reveal: `280–320ms` with `40–60ms` stagger.
- **Easings**:
  - General UI: `cubic-bezier(0.23, 1, 0.32, 1)` (`--ease-out`)
  - Mobile Drawer: `cubic-bezier(0.32, 0.72, 0, 1)` (`--ease-drawer`)
- **Accessibility**: Always include `@media (prefers-reduced-motion: reduce)` with `duration: 0.01ms` overrides.

---

## Verified Entity & Content Ground Truth

Do not invent or alter corporate facts. Use these exact verified records:
- **Legal Entity**: PT Global Agra Ripta Solusindo (Active since 2014; Akta Pendirian No. 394 tgl 29 Jan 2021 Notaris Nurlisa Uke Desy S.H., M.Kn.).
- **Registrations**: NIB `124700220599`, NPWP `41.298.684.6-017.000`, SIUP PP No. 24 Th. 2018.
- **6 Core Services**: Digital Strategy & Consulting, Web Application Development, Mobile App Development, System Integration, Dashboard & Business Intelligence, Maintenance & Technology Support.
- **6 Flagship Products**: Wellora (Spa/POS), ApartHub (Apartment Resident App), TenantHub (Mall Tenant Portal), Stayora (Hotel PMS), GoAmbulan (Ambulance Dispatch), AIRA (AI Sentiment & Public Intel).
- **7 Corporate Values (SUPORTIF)**: Sustainability, Professional, Observe, Relationship, Trust, Innovation, Flexible.
- **Official Clients**: BNPT, Mabes TNI, Kemnaker, Kementan, Jakarta Futures Exchange (JFX), Mom N Jo, PT ISP, Asuransi Jasindo, PT Adinata Graha Raya.
- **Headquarters**: 18 Office Park Suite, Jl. TB. Simatupang No. 18, Jakarta Selatan 12520. Tel: `(021) 80674603`. Email: `Relation@garisdev.co.id`.

---

## Developer Commands & Environment

- Environment: Windows (PowerShell), Node v23.3+, pnpm v12+ or npm v10+.
- Code Search: Per workspace rules, use `xerj search "<query>"` / `xerj def "<symbol>"` when searching indexed project code.
- Canvas / Design: OpenPencil MCP interacts directly with `garisdev.fig` (`tab-2`).
