'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENTS } from '@/lib/data';
import { InfiniteMarquee } from './ui/infinite-marquee';

export function SectionClients() {
  return (
    <section id="klien" className="py-20 md:py-28 bg-ground-base border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight">
            Dipercaya Institusi Pemerintah & Enterprise Skala Nasional
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
            Membuktikan legitimasi rekayasa dan integritas teknologi melalui kemitraan strategis jangka panjang sejak 2014.
          </p>
        </div>

        {/* Client logo emblems — infinite smooth marquee with vignette edges */}
        <div className="flex flex-col gap-4">
          <span className="font-display text-xs font-semibold tracking-wider text-ink-muted">
            Klien & Mitra Strategis
          </span>

          <InfiniteMarquee duration={38}>
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="group/logo flex items-center justify-center h-16 w-40 md:w-48 px-3 shrink-0"
              >
                <Image
                  src={client.logo}
                  alt={`Logo Resmi ${client.name}`}
                  width={400}
                  height={160}
                  className="max-h-11 md:max-h-12 w-auto object-contain transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] filter grayscale-[70%] invert-[0.3] brightness-[1.5] opacity-80 hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:opacity-100 hover:scale-105 group-hover/logo:grayscale-0 group-hover/logo:invert-0 group-hover/logo:brightness-100 group-hover/logo:opacity-100 group-hover/logo:scale-105 cursor-pointer"
                />
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}
