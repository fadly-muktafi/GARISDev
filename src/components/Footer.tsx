import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowUp, Download } from 'lucide-react';
import {
  COMPANY_INFO,
  COMPANY_PROFILE,
  CORE_SERVICES,
  FLAGSHIP_PRODUCTS,
} from '@/lib/data';

const COLUMN_LABEL =
  'text-[10px] uppercase tracking-[0.18em] text-paper/40 font-semibold';

export function Footer() {
  return (
    <footer className="bg-night pt-16 text-paper md:pt-20">
      <div className="shell">
        {/* Bagian Atas: CTA Banner Visi Resmi */}
        <div className="flex flex-col gap-8 border-b border-paper/10 pb-12 lg:flex-row lg:items-center lg:justify-between md:pb-16">
          <div className="max-w-[48ch]">
            <span className="text-[10px] uppercase tracking-[0.18em] text-brand-light font-semibold">
              Visi Perseroan
            </span>
            <p className="mt-2 text-balance font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.03em] text-paper">
              &ldquo;Menjadi mitra teknologi terpercaya yang mendorong transformasi digital dan pertumbuhan berkelanjutan.&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#kontak"
              className="press inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-brand px-5 text-[12.5px] font-medium tracking-[-0.01em] text-paper transition-colors duration-200 hover:bg-brand-deep"
            >
              <span>Hubungi Tim Kami</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>

            <a
              href={COMPANY_PROFILE.href}
              download={COMPANY_PROFILE.fileName}
              className="press inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-paper/20 px-5 text-[12.5px] font-medium tracking-[-0.01em] text-paper/85 transition-colors duration-200 hover:border-paper hover:text-paper"
            >
              <Download className="h-4 w-4" strokeWidth={1.5} />
              <span>Unduh Company Profile</span>
            </a>
          </div>
        </div>

        {/* Bagian Tengah: Grid 4 Kolom Proporsional */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 pb-14">
          {/* Kolom 1: Identitas & Alamat */}
          <div>
            <Image
              src="/assets/garisdev-logo-white-cropped.png"
              alt="GARISDev, PT Global Agra Ripta Solusindo"
              width={1053}
              height={279}
              sizes="140px"
              className="h-7 w-auto object-contain"
            />
            <p className="mt-5 text-[13px] font-semibold text-paper/90">
              {COMPANY_INFO.legalName}
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-paper/60">
              {COMPANY_INFO.address}
            </p>
            <p className="mt-4 text-[11px] text-paper/40">
              Beroperasi sejak 2014 di Jakarta Selatan, Indonesia.
            </p>
          </div>

          {/* Kolom 2: Layanan Utama */}
          <div>
            <p className={`${COLUMN_LABEL} border-t border-paper/15 pt-3`}>
              Layanan Utama
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {CORE_SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href="#layanan"
                    className="link-underline text-[12.5px] leading-snug text-paper/70 hover:text-paper"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Produk & Solusi */}
          <div>
            <p className={`${COLUMN_LABEL} border-t border-paper/15 pt-3`}>
              Produk &amp; Solusi
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FLAGSHIP_PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href="#produk"
                    className="link-underline text-[12.5px] leading-snug text-paper/70 hover:text-paper"
                  >
                    {product.name} — <span className="text-paper/45">{product.subheading}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#produk"
                  className="link-underline text-[12.5px] leading-snug text-brand-light hover:text-paper"
                >
                  + E-Government &amp; GIS Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak Resmi */}
          <div>
            <p className={`${COLUMN_LABEL} border-t border-paper/15 pt-3`}>
              Kontak Resmi
            </p>
            <div className="mt-4 flex flex-col gap-3 text-[12.5px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.14em] text-paper/40 block">
                  Telepon Kantor
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}`}
                  className="link-underline mt-0.5 inline-block text-paper/80 hover:text-paper"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.14em] text-paper/40 block">
                  WhatsApp Konsultasi
                </span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-0.5 inline-block text-paper/80 hover:text-paper"
                >
                  {COMPANY_INFO.whatsapp}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.14em] text-paper/40 block">
                  Email
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="link-underline mt-0.5 inline-block text-paper/80 hover:text-paper"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.14em] text-paper/40 block">
                  Website
                </span>
                <a
                  href={COMPANY_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-0.5 inline-block text-paper/80 hover:text-paper"
                >
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Baris Hak Cipta & Kembali ke Atas */}
        <div className="flex flex-col gap-3 border-t border-paper/10 py-6 text-[11px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 PT Global Agra Ripta Solusindo (GARISDev). Seluruh Hak Cipta Dilindungi.
          </span>
          <div className="flex items-center gap-6">
            <span>Jakarta Selatan, Indonesia</span>
            <a
              href="#atas"
              className="press inline-flex items-center gap-1.5 font-medium text-paper/70 hover:text-paper"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
