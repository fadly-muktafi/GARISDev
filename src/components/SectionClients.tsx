import React from 'react';
import Image from 'next/image';
import { CLIENTS } from '@/lib/data';
import { InfiniteMarquee } from './ui/infinite-marquee';
import { Reveal } from './ui/reveal';

export function SectionClients() {
  return (
    <section id="klien" className="bg-paper pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="max-w-[22ch] text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              Institusi yang menuntut keandalan mutlak.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[42ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              Sejak 2014, GARISDev dipercaya lembaga negara dan korporasi nasional
              untuk membangun sistem yang harus tetap bekerja, tanpa toleransi
              terhadap kegagalan.
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
      </div>
    </section>
  );
}
