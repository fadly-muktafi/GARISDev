'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { DownloadButton } from './ui/download-button';

const HERO_FACTS = [
  { value: '12', label: 'Tahun aktif' },
  { value: '6', label: 'Platform' },
  { value: '9+', label: 'Institusi' },
];

export function HeroSection() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: 'translateY(16px)' },
          animate: { opacity: 1, transform: 'translateY(0px)' },
          transition: { duration: 0.32, delay, ease: [0.23, 1, 0.32, 1] },
        };

  return (
    <section id="atas" className="relative bg-paper pt-16 md:pt-20">
      <div className="shell">
        <motion.div
          {...rise(0.02)}
          className="flex items-center justify-between gap-4 border-b border-line pb-4 pt-6 text-[10px] uppercase tracking-[0.18em] text-ink-faint"
        >
          <span className="truncate sm:hidden">Jakarta, Indonesia</span>
          <span className="hidden truncate sm:inline">{COMPANY_INFO.legalName}</span>
          <span className="tnum shrink-0">Est. 2014</span>
        </motion.div>

        <div className="grid gap-10 pb-14 pt-10 md:pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-16">
          <div>
            <motion.h1
              {...rise(0.08)}
              className="max-w-[14ch] font-display text-[clamp(2.2rem,8.6vw,3.6rem)] font-medium leading-[0.94] tracking-[-0.05em] lg:max-w-none lg:text-[clamp(3rem,4.6vw,4.4rem)]"
            >
              Rekayasa digital,
              <br />
              <span className="font-serif font-normal italic tracking-[-0.02em]">
                skala nasional
              </span>
              <span className="text-brand">.</span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-7 max-w-[40ch] text-[15px] leading-relaxed text-ink-muted lg:text-[16px]"
            >
              Kami membangun sistem enterprise, platform operasional, dan
              integrasi data untuk institusi yang tidak boleh berhenti.
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <DownloadButton variant="brand" showMeta />
              <a
                href="#layanan"
                className="press group inline-flex min-h-[52px] items-center justify-center gap-2 px-2 text-[13px] font-medium text-ink-soft hover:text-ink sm:justify-start"
              >
                <span className="link-underline">Lihat kapabilitas</span>
                <ArrowDown
                  className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </motion.div>

            <motion.dl
              {...rise(0.3)}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-5"
            >
              {HERO_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="tnum font-display text-[19px] font-medium leading-none tracking-[-0.02em] text-ink lg:text-[22px]">
                    {fact.value}
                  </dd>
                  <dd className="mt-2 text-[9px] uppercase leading-tight tracking-[0.14em] text-ink-faint lg:text-[10px]">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.figure {...rise(0.2)} className="group relative">
            <div className="relative aspect-[5/6] w-full overflow-hidden bg-paper-deep sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-auto lg:h-[min(64vh,600px)]">
              <Image
                src="/assets/photos/hero-office.jpg"
                alt="Ruang rapat GARISDev dengan meja kerja panjang dan cahaya alami"
                fill
                priority
                sizes="(min-width: 1024px) 47vw, 100vw"
                className="object-cover object-center transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.015]"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.16em] text-ink-faint">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              Kantor pusat, Jakarta Selatan
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
