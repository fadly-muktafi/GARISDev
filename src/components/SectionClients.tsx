import React from 'react';
import Image from 'next/image';
import { CLIENTS, STRATEGIC_PROJECTS } from '@/lib/data';
import { InfiniteMarquee } from './ui/infinite-marquee';
import { Reveal } from './ui/reveal';

export function SectionClients() {
  return (
    <section id="klien" className="bg-paper pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="max-w-[22ch] text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              Kemitraan strategis dan klien terpercaya
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[44ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              Sejak tahun 2014, GARISDev dipercaya berbagai kementerian, instansi pertahanan,
              lembaga pemerintah, serta korporasi nasional dalam mengembangkan dan mengelola
              solusi teknologi informasi yang andal.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-faint">Klien &amp; mitra strategis</span>
            <span className="tnum hidden text-[11px] text-ink-faint sm:block">2014 / 2026</span>
          </div>
          <div className="rule mt-4" />

          <InfiniteMarquee duration={58} className="py-6 md:py-9">
            {CLIENTS.map((client) => {
              const isMomNJo = client.logo.includes('07_mom_n_jo') || client.name.toLowerCase().includes('mom n jo');
              return (
                <div
                  key={client.name}
                  className="group/logo flex h-12 w-24 shrink-0 items-center justify-center sm:h-14 sm:w-40"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={400}
                    height={160}
                    className={`max-h-7 w-auto max-w-[92px] object-contain transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:max-h-10 sm:max-w-[132px] ${
                      isMomNJo
                        ? 'brightness-0 opacity-70 hover:opacity-100 group-hover/logo:opacity-100'
                        : 'opacity-80 mix-blend-multiply grayscale group-hover/logo:opacity-100 group-hover/logo:grayscale-0'
                    }`}
                  />
                </div>
              );
            })}
          </InfiniteMarquee>
        </div>

        <div className="rule" />

        <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 sm:gap-x-10">
          {CLIENTS.map((client) => (
            <li
              key={client.name}
              className="flex flex-col gap-1 border-b border-line py-3.5 sm:py-5"
            >
              <span className="text-[13px] font-medium tracking-[-0.01em] text-ink">
                {client.name}
              </span>
              <span className="hidden text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint sm:block">
                {client.category}
              </span>
            </li>
          ))}
        </ul>

        {/* Sub-Section: Rekam Jejak Implementasi & Proyek Strategis */}
        <div className="mt-20 border-t border-line pt-16 md:mt-28 md:pt-20">
          <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
            <Reveal>
              <h3 className="text-balance font-display text-[clamp(1.75rem,3.8vw,2.85rem)] font-medium leading-[1.06] tracking-[-0.03em] text-ink">
                Rekam Jejak Implementasi &amp; Proyek Strategis
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="max-w-[44ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
                Solusi teknologi berstandar tinggi yang berhasil diimplementasikan di instansi pertahanan, lembaga pemerintah non-kementerian, bursa berjangka, dan korporasi terkemuka.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
            {STRATEGIC_PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.04}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline py-6 transition-colors duration-150 hover:bg-paper-deep/30 px-2 sm:px-0">
                  <div className="md:col-span-4">
                    <h4 className="font-display text-[17px] font-semibold tracking-[-0.015em] text-ink sm:text-[18px]">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-[13px] text-neutral-500">
                      {project.client}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="tnum text-[14px] font-medium text-neutral-600">
                      {project.year}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[14px] leading-relaxed text-slate-700">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
