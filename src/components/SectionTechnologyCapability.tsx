'use client';

import React from 'react';
import { Smartphone, Database, BarChart3, Server } from 'lucide-react';
import { TECH_CAPABILITIES } from '@/lib/data';
import { Reveal } from './ui/reveal';

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  'Mobile & Web Framework': Smartphone,
  'Enterprise Database': Database,
  'Business Intelligence & Analytics': BarChart3,
  'Infrastructure, Network & Communication': Server,
};

export function SectionTechnologyCapability() {
  return (
    <section id="teknologi" className="bg-paper py-20 md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              Stack &amp; Ekosistem Teknologi
            </span>
            <h2 className="mt-2 text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink">
              Teknologi &amp; Kapabilitas Infrastruktur
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              &ldquo;Trusted collaboration across industries to accelerate digital transformation.&rdquo; Penguasaan teknologi berstandar enterprise yang siap diimplementasikan dan diintegrasikan dengan sistem eksisting organisasi Anda.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_CAPABILITIES.map((group, index) => {
            const Icon = CATEGORY_ICON_MAP[group.category] || Server;

            return (
              <Reveal key={group.category} delay={index * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-white p-6 shadow-2xs transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand/40 hover:shadow-sm">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-4 font-display text-[17px] font-medium leading-snug tracking-[-0.02em] text-ink">
                      {group.category}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line/60 pt-4">
                    <span className="mb-2 block text-[9.5px] font-semibold uppercase tracking-[0.15em] text-ink-faint">
                      Teknologi Utama:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded bg-paper px-2.5 py-1 text-[11.5px] font-medium text-ink"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
