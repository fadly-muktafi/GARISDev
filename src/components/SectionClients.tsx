import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
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
            {CLIENTS.map((client) => (
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
                  className="max-h-7 w-auto max-w-[92px] object-contain opacity-80 mix-blend-multiply grayscale transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/logo:opacity-100 group-hover/logo:grayscale-0 sm:max-h-10 sm:max-w-[132px]"
                />
              </div>
            ))}
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
              <span className="text-[10px] uppercase tracking-[0.18em] text-brand font-semibold">
                Portofolio Proyek Nyata
              </span>
              <h3 className="mt-2 text-balance font-display text-[clamp(1.75rem,3.8vw,2.85rem)] font-medium leading-[1.06] tracking-[-0.03em] text-ink">
                Rekam Jejak Implementasi &amp; Proyek Strategis
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="max-w-[44ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
                Solusi teknologi berstandar tinggi yang berhasil diimplementasikan di instansi pertahanan, lembaga pemerintah non-kementerian, bursa berjangka, dan korporasi terkemuka.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STRATEGIC_PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 0.06}>
                <article className="group flex h-full flex-col justify-between bg-white p-6 sm:p-7 border border-line transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand/40 hover:shadow-sm">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-brand">
                        {project.category}
                      </span>
                      <span className="tnum rounded bg-paper px-2 py-0.5 text-[11px] font-medium text-ink">
                        {project.year}
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-[18px] font-medium leading-snug tracking-[-0.02em] text-ink md:text-[19px]">
                      {project.title}
                    </h4>

                    <p className="mt-1 text-[11.5px] font-medium text-ink-faint">
                      {project.client}
                    </p>

                    <p className="mt-3.5 text-[13px] leading-relaxed text-ink-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-line/60 pt-4 text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand" strokeWidth={1.75} aria-hidden="true" />
                    <span>Sistem Terverifikasi</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
