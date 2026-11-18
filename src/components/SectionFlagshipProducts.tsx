'use client';

import React from 'react';
import { FLAGSHIP_PRODUCTS, OTHER_DIGITAL_SOLUTIONS } from '@/lib/data';
import { Reveal } from './ui/reveal';

export function SectionFlagshipProducts() {
  return (
    <section id="produk" className="bg-paper py-20 text-ink md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              7 Platform Unggulan Siap Pakai
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              Solusi perangkat lunak terintegrasi yang dirancang khusus untuk memecahkan tantangan operasional spesifik di berbagai sektor industri: perhotelan, hunian vertikal, pusat perbelanjaan, hingga manajemen ambulans.
            </p>
          </Reveal>
        </div>

        {/* 7 Products 2-Column Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLAGSHIP_PRODUCTS.map((product, index) => {
            const isLast = index === FLAGSHIP_PRODUCTS.length - 1; // 7th product (AIRA)

            return (
              <Reveal
                key={product.id}
                delay={(index % 2) * 0.05}
                className={isLast ? 'md:col-span-2' : ''}
              >
                <article className="flex h-full flex-col justify-between rounded-lg border border-line bg-white p-6 sm:p-8 transition-colors duration-200 hover:border-brand/40">
                  <div>
                    <h3 className="font-display text-[21px] font-semibold tracking-[-0.025em] text-ink sm:text-[23px]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-brand">
                      {product.subheading}
                    </p>
                    <p className="mt-3.5 text-[14px] leading-relaxed text-slate-700">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line/60 pt-4">
                    <p className="text-[13px] leading-relaxed text-neutral-600">
                      <span className="font-semibold text-ink">Cakupan fitur:</span>{' '}
                      {product.modules.join(', ')}.
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Solusi Digital Lainnya (Katalog 15 Sistem) */}
        <div className="mt-20 border-t border-line pt-16 md:mt-24 md:pt-20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
            <Reveal>
              <h3 className="text-balance font-display text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
                Solusi Digital Lainnya
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="max-w-[44ch] text-[13.5px] leading-relaxed text-ink-muted lg:text-[14.5px]">
                Katalog sistem informasi operasional yang siap disesuaikan dan diintegrasikan dengan infrastruktur teknologi organisasi Anda.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 rounded-lg border border-line bg-white p-6 sm:p-8 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-3.5">
              {OTHER_DIGITAL_SOLUTIONS.map((solution) => (
                <div
                  key={solution}
                  className="border-l-2 border-neutral-300 pl-3 py-1 text-[13.5px] font-medium text-neutral-800 transition-colors hover:border-brand"
                >
                  {solution}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
