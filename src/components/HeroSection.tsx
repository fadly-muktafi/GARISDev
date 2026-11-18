'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DownloadButton } from './ui/download-button';

const HERO_FACTS = [
  { value: 'Sejak 2014', label: 'Pengalaman Rekayasa IT' },
  { value: '7 Platform', label: 'Produk Flagship Siap Pakai' },
  { value: '15+ Solusi', label: 'Sistem Enterprise & E-Gov' },
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
          <span className="truncate">PT GLOBAL AGRA RIPTA SOLUSINDO · BERPENGALAMAN SEJAK 2014</span>
          <span className="tnum shrink-0 hidden sm:inline">Jakarta Selatan</span>
        </motion.div>

        <div className="grid gap-10 pb-14 pt-8 md:pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14 lg:pb-20 lg:pt-10">
          <div>
            <motion.h1
              {...rise(0.08)}
              className="font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink"
            >
              Mitra Pengembangan Perangkat Lunak &amp; Integrasi Sistem untuk Pemerintahan, BUMN, dan Korporasi
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-[50ch] text-[15px] leading-relaxed text-slate-700 lg:text-[16px]"
            >
              Berlokasi di Jakarta Selatan dengan pengalaman teknis sejak tahun 2014, GARISDev menghadirkan pengembangan aplikasi web dan mobile, sistem E-Government, integrasi data enterprise, serta dashboard analitik yang efektif, aman, dan terukur bagi pelanggan maupun stakeholder.
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="mt-9 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"
            >
              <a
                href="#kontak"
                className="press inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-brand px-6 text-[13px] font-medium tracking-[-0.01em] text-paper transition-colors duration-200 hover:bg-brand-deep"
              >
                <span>Diskusikan Kebutuhan Sistem</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>

              <DownloadButton
                variant="outline"
                label="Unduh Company Profile (PDF)"
                showMeta
                className="bg-transparent hover:bg-white"
              />
            </motion.div>

            <motion.dl
              {...rise(0.3)}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-5"
            >
              {HERO_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="tnum font-display text-[17px] font-medium leading-none tracking-[-0.02em] text-ink lg:text-[21px]">
                    {fact.value}
                  </dd>
                  <dd className="mt-2 text-[9px] uppercase leading-tight tracking-[0.14em] text-ink-faint lg:text-[10px]">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.figure {...rise(0.2)} className="group relative w-full">
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-line/60 bg-white p-3 shadow-sm sm:aspect-[16/11] md:p-5 lg:aspect-auto lg:h-[500px] xl:h-[520px]">
              <Image
                src="/assets/mockup-dashboard-mobile-garisdev.png"
                alt="Ekosistem Dashboard Eksekutif & Aplikasi Mobile Operasional GARISDev"
                fill
                priority
                sizes="(min-width: 1024px) 47vw, 100vw"
                className="object-contain p-2 sm:p-4 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.015]"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-ink-faint">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              Ekosistem Dashboard Eksekutif &amp; Aplikasi Mobile Operasional GARISDev
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
