'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Globe,
  Smartphone,
  GitMerge,
  LayoutDashboard,
  Wrench,
} from 'lucide-react';
import { CORE_SERVICES } from '@/lib/data';

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
    <section id="layanan" className="py-20 md:py-28 bg-ground-base border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-display text-xs font-bold text-accent-violet-light tracking-wider">
              KAPABILITAS PERSEROAN
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight">
              Kapabilitas Rekayasa Teknologi Enterprise
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-ink-secondary max-w-md">
            Enam pilar layanan terintegrasi dari perancangan arsitektur sistem, pembangunan aplikasi modern, hingga pengawalan operasional infrastruktur 24/7.
          </p>
        </div>

        {/* 6 Services Grid (3 Cols on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, idx) => {
            const IconComponent = SERVICE_ICON_MAP[service.iconName] || Compass;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.32, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="group p-7 rounded-2xl bg-ground-elevated hover:bg-ground-surface border border-white/5 hover:border-white/10 transition-all duration-200 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-ground-surface border border-white/10 flex items-center justify-center text-accent-violet-light group-hover:scale-105 group-hover:text-accent-cyan transition-all">
                    <IconComponent className="w-6 h-6" strokeWidth={1.8} />
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-ink-primary group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="py-1 px-2.5 rounded-md bg-ground-surface text-ink-secondary text-xs font-mono border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
