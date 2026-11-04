'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS, FLAGSHIP_PRODUCTS } from '@/lib/data';

export function Footer() {
  return (
    <footer id="kontak" className="bg-ground-base border-t border-white/5 pt-16 pb-12 text-ink-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Address Column (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Image
              src="/assets/garisdev-logo-white-cropped.png"
              alt="GARISDev — PT Global Agra Ripta Solusindo"
              width={1053}
              height={279}
              sizes="(min-width: 768px) 162px, 146px"
              className="h-9 md:h-10 w-auto self-start object-contain"
            />

            <p className="font-sans text-sm text-ink-secondary leading-relaxed max-w-sm">
              Mitra rekayasa perangkat lunak enterprise, integrasi sistem heterogen, dan arsitektur transformasi digital tepercaya bagi korporasi dan institusi pemerintah sejak 2014.
            </p>

            <div className="flex flex-col gap-2.5 text-xs sm:text-sm pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-violet-light shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-ink-primary transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-accent-emerald shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-primary transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  {COMPANY_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-magenta-light shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-ink-primary transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column (Col 6-8) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-display font-bold text-sm text-ink-primary tracking-wider">
              NAVIGASI UTAMA
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-ink-primary transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] inline-flex items-center gap-1.5 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={COMPANY_INFO.pdfPath}
                  download={COMPANY_INFO.pdfFilename}
                  className="text-accent-violet-light hover:text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] font-medium inline-flex items-center gap-1.5"
                >
                  <span>Unduh Dokumen Profil (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Flagship Platforms Column (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-display font-bold text-sm text-ink-primary tracking-wider">
              SOLUSI DIGITAL FLAGSHIP
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {FLAGSHIP_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#produk"
                    className="hover:text-ink-primary transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] block py-1"
                  >
                    <span className="font-medium text-ink-primary">{prod.name}</span>
                    <span className="block text-[11px] text-ink-muted truncate">
                      {prod.badge}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <span>
            © 2026 {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName}). Seluruh Hak Cipta Dilindungi Undang-Undang.
          </span>
          <div className="flex items-center gap-4">
            <span>NIB: {COMPANY_INFO.nib}</span>
            <span>•</span>
            <span>NPWP: {COMPANY_INFO.npwp}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
