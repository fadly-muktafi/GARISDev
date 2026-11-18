'use client';

import React from 'react';
import { Reveal } from './ui/reveal';

const TECH_MATRIX = [
  {
    category: 'Pengembangan Web & Mobile',
    items: ['Android', 'iOS Apple Developer', 'Flutter', 'Laravel', 'Goravel', 'Inertia.js'],
  },
  {
    category: 'Basis Data Enterprise',
    items: ['Oracle Database', 'Microsoft SQL Server', 'Tibero Database', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Business Intelligence & Analitik',
    items: ['Tableau', 'IBM Cognos'],
  },
  {
    category: 'Infrastruktur, Jaringan & Komunikasi',
    items: ['Linux', 'Dell Server', 'MikroTik', 'Cloudflare', 'Tailscale', 'Asterisk'],
  },
];

export function SectionTechnologyCapability() {
  return (
    <section id="teknologi" className="bg-paper py-20 md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink">
              Teknologi &amp; Kapabilitas Infrastruktur
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              &ldquo;Trusted collaboration across industries to accelerate digital transformation.&rdquo; Penguasaan teknologi berstandar enterprise yang siap diimplementasikan dan diintegrasikan dengan sistem eksisting organisasi Anda.
            </p>
          </Reveal>
        </div>

        {/* Matriks Spesifikasi Teknologi 4 Baris Horizontal */}
        <div className="mt-14 divide-y divide-neutral-200 border-y border-neutral-200">
          {TECH_MATRIX.map((row, index) => (
            <Reveal key={row.category} delay={index * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center">
                <div className="md:col-span-4 lg:col-span-3">
                  <h3 className="font-display text-[16px] sm:text-[17px] font-semibold text-ink">
                    {row.category}
                  </h3>
                </div>

                <div className="md:col-span-8 lg:col-span-9 flex flex-wrap gap-2">
                  {row.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 bg-white border border-neutral-200 text-neutral-800 text-sm font-medium rounded-md shadow-2xs transition-colors hover:border-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
