import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  COMPANY_INFO,
  FLAGSHIP_PRODUCTS,
  NAV_ITEMS,
} from '@/lib/data';

const COLUMN_LABEL =
  'text-[10px] uppercase tracking-[0.18em] text-paper/40';

export function Footer() {
  return (
    <footer className="bg-night pt-16 text-paper md:pt-20">
      <div className="shell">
        <div className="flex flex-col gap-8 border-b border-paper/10 pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
          <h2 className="max-w-[22ch] text-balance font-display text-[clamp(1.7rem,4.2vw,3rem)] font-medium leading-[1.05] tracking-[-0.035em]">
            Mitra teknologi terpercaya untuk transformasi digital berkelanjutan
          </h2>

          <a
            href="#kontak"
            className="press group inline-flex w-fit items-center gap-3 border-b border-paper/25 pb-2 text-[11px] uppercase tracking-[0.16em] text-paper/70 hover:border-paper hover:text-paper"
          >
            Hubungi kami
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.2fr] lg:gap-14">
          <div>
            <Image
              src="/assets/garisdev-logo-white-cropped.png"
              alt="GARISDev, PT Global Agra Ripta Solusindo"
              width={1053}
              height={279}
              sizes="130px"
              className="h-7 w-auto object-contain"
            />
            <p className="mt-6 max-w-[36ch] text-[13px] leading-relaxed text-paper/60">
              Mitra rekayasa perangkat lunak enterprise untuk korporasi dan
              institusi pemerintah Indonesia. Beroperasi sejak 2014.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-[12px]">
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit max-w-[38ch] leading-relaxed text-paper/70 hover:text-paper"
              >
                {COMPANY_INFO.address}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}`}
                className="link-underline w-fit text-paper/70 hover:text-paper"
              >
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="link-underline w-fit text-paper/70 hover:text-paper"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <nav aria-label="Navigasi footer">
            <p className={`${COLUMN_LABEL} border-t border-paper/15 pt-4`}>Navigasi</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="link-underline text-[12.5px] text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={`${COLUMN_LABEL} border-t border-paper/15 pt-4`}>Platform Unggulan</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {FLAGSHIP_PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href="#produk"
                    className="link-underline text-[12.5px] text-paper/75 hover:text-paper"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden md:mt-20" aria-hidden="true">
          <p className="select-none font-display text-[clamp(2.6rem,25vw,22rem)] font-medium leading-[0.76] tracking-[-0.06em] text-paper">
            GARISDEV
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-paper/10 pt-5 text-[10px] uppercase tracking-[0.14em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 {COMPANY_INFO.legalName}. Seluruh hak cipta dilindungi.
          </span>
          <div className="flex items-center gap-5">
            <span>Jakarta, Indonesia</span>
            <a
              href="#atas"
              className="press inline-flex items-center gap-1 text-paper/60 hover:text-paper"
            >
              Ke atas
              <ArrowUpRight className="h-3 w-3 -rotate-45" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
