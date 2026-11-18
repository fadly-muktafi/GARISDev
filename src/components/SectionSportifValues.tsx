'use client';

import React from 'react';
import Image from 'next/image';
import { SPORTIF_VALUES } from '@/lib/data';
import { Reveal } from './ui/reveal';

const MEETING_PHOTOS = [
  {
    src: '/assets/rapat-instansi-tni-1.png',
    alt: 'Audiensi teknis dan koordinasi implementasi sistem GARISDev bersama jajaran instansi pertahanan',
    caption: 'Koordinasi teknis bersama instansi pertahanan',
  },
  {
    src: '/assets/rapat-instansi-korporat-2.png',
    alt: 'Diskusi perencanaan solusi dan transformasi digital enterprise bersama mitra korporat',
    caption: 'Konsultasi arsitektur sistem korporat',
  },
  {
    src: '/assets/rapat-instansi-tni-3.png',
    alt: 'Presentasi dan validasi sistem teknologi informasi terpadu GARISDev',
    caption: 'Validasi & evaluasi sistem informasi',
  },
];

export function SectionSportifValues() {
  return (
    <section id="nilai" className="bg-paper-deep py-20 md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              Budaya &amp; Integritas Kerja
            </span>
            <h2 className="mt-2 max-w-[24ch] text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink">
              Tata Nilai Perusahaan SPORTIF
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              GARISDev memegang teguh tata nilai SPORTIF sebagai landasan profesionalisme,
              kualitas rekayasa, dan komitmen layanan berkelanjutan dalam setiap pengembangan
              produk dan kemitraan strategis.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-14">
          {/* Kolom Kiri: 7 Nilai SPORTIF Terbuka */}
          <div className="flex flex-col gap-3.5">
            {SPORTIF_VALUES.map((item, index) => (
              <Reveal key={item.letter} delay={index * 0.04}>
                <div className="flex items-start gap-4 rounded-xl border border-line bg-white p-4 sm:p-5 shadow-2xs transition-all duration-200 hover:border-brand/35 hover:shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <span className="font-display text-[20px] font-bold leading-none">
                      {item.letter}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-[16px] sm:text-[17px] font-medium leading-snug tracking-[-0.02em] text-ink">
                      {item.letter} — {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Kolom Kanan: Kolase 3 Foto Rapat Asli */}
          <Reveal delay={0.15} className="sticky top-28">
            <div className="flex flex-col gap-4">
              {/* Foto 1 (Lebar) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-paper shadow-2xs">
                <Image
                  src={MEETING_PHOTOS[0].src}
                  alt={MEETING_PHOTOS[0].alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02]"
                />
              </div>

              {/* Grid 2 Foto Bawah */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-paper shadow-2xs">
                  <Image
                    src={MEETING_PHOTOS[1].src}
                    alt={MEETING_PHOTOS[1].alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02]"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-paper shadow-2xs">
                  <Image
                    src={MEETING_PHOTOS[2].src}
                    alt={MEETING_PHOTOS[2].alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-line/70 bg-white/70 p-3.5 backdrop-blur-xs">
                <p className="text-[11px] leading-relaxed text-ink-muted">
                  <strong className="font-semibold text-ink">Dokumentasi Kerja Nyata:</strong> Koordinasi teknis, audiensi strategis, dan evaluasi implementasi sistem GARISDev bersama kementerian, instansi pertahanan, dan mitra korporasi.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
