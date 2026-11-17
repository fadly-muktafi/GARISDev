import React from 'react';
import {
  Compass,
  Globe,
  Smartphone,
  GitMerge,
  LayoutDashboard,
  Wrench,
} from 'lucide-react';
import { CORE_SERVICES } from '@/lib/data';
import { Reveal } from './ui/reveal';

const SERVICE_ICON_MAP = {
  compass: Compass,
  globe: Globe,
  smartphone: Smartphone,
  'git-merge': GitMerge,
  'layout-dashboard': LayoutDashboard,
  wrench: Wrench,
};

export function SectionCoreServices() {
  return (
    <section id="layanan" className="bg-paper-deep py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="max-w-[22ch] text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              Layanan rekayasa teknologi dan produk digital
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              Sebagai mitra teknologi end-to-end, GARISDev menggabungkan strategi teknologi,
              pengembangan aplikasi terpadu, integrasi sistem, dan inovasi untuk menghasilkan
              solusi yang praktis, scalable, serta sesuai kebutuhan bisnis nyata.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {CORE_SERVICES.map((service, index) => {
            const Icon = SERVICE_ICON_MAP[service.iconName] || Compass;

            return (
              <Reveal
                key={service.title}
                delay={(index % 3) * 0.05}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col bg-paper p-7 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white md:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
                  />

                  <Icon
                    className="h-[22px] w-[22px] text-ink-soft transition-colors duration-200 group-hover:text-brand"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />

                  <h3 className="mt-7 max-w-[18ch] font-display text-[19px] font-medium leading-snug tracking-[-0.02em] md:text-[20px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
