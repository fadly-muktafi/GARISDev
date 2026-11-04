'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Landmark,
  Briefcase,
  Sprout,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Cpu,
  Copy,
  Check,
} from 'lucide-react';
import { CLIENTS, COMPANY_INFO } from '@/lib/data';

const CLIENT_ICON_MAP = {
  shield: Shield,
  landmark: Landmark,
  briefcase: Briefcase,
  sprout: Sprout,
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  cpu: Cpu,
};

export function SectionClientsLegality() {
  const [copied, setCopied] = useState(false);

  const handleCopyNIB = () => {
    navigator.clipboard.writeText(COMPANY_INFO.nib);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  return (
    <section id="legalitas" className="py-20 md:py-28 bg-ground-base border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="font-display text-xs font-bold text-accent-violet-light tracking-wider">
            TRUST & CREDENTIALS
          </span>
          <h2 className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight">
            Dipercaya Institusi Pemerintah & Enterprise Skala Nasional
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
            Membuktikan legitimasi rekayasa dan integritas teknologi melalui kemitraan strategis jangka panjang sejak 2014.
          </p>
        </div>

        {/* 8 Client Logo Emblems Grid (Desktop 4x2, Mobile 2-cols) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {CLIENTS.map((client, idx) => {
            const IconComponent = CLIENT_ICON_MAP[client.iconName] || Shield;

            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, transform: 'translateY(16px)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.23, 1, 0.32, 1] }}
                className="group p-4 rounded-xl bg-ground-elevated hover:bg-ground-surface border border-white/5 hover:border-white/10 transition-all duration-200 flex items-center gap-3.5"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-ground-surface border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                  style={{ color: client.accentColor }}
                >
                  <IconComponent className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display font-bold text-sm text-ink-primary group-hover:text-white truncate">
                    {client.name}
                  </span>
                  <span className="font-sans text-xs text-ink-secondary truncate">
                    {client.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Widget Banner */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(16px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="p-6 md:p-8 rounded-2xl bg-ground-elevated border border-accent-amber/25 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          {/* Legal Identity Info */}
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-ground-surface border border-accent-amber/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-accent-amber" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-display font-bold text-base md:text-lg text-ink-primary">
                  {COMPANY_INFO.legalName}
                </span>
                <span className="inline-flex py-1 px-3 rounded-full bg-ground-surface border border-accent-amber/40 text-[11px] font-bold text-accent-amber tracking-wider">
                  AKTA NO. 394 TGL 29 JAN 2021
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-ink-secondary">
                Notaris: {COMPANY_INFO.notaris} • {COMPANY_INFO.siup}
              </p>
            </div>
          </div>

          {/* Registration Numbers & Copy Action */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
            {/* NIB */}
            <div className="flex flex-col">
              <span className="font-sans text-xs text-ink-secondary">
                Nomor Induk Berusaha (NIB)
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-ink-primary font-mono tracking-tight">
                {COMPANY_INFO.nib}
              </span>
            </div>

            {/* NPWP */}
            <div className="flex flex-col">
              <span className="font-sans text-xs text-ink-secondary">
                NPWP Perseroan
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-ink-primary font-mono tracking-tight">
                {COMPANY_INFO.npwp}
              </span>
            </div>

            {/* Copy NIB Button */}
            <button
              type="button"
              onClick={handleCopyNIB}
              className="press-feedback inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-ground-surface hover:bg-white/5 border border-white/10 text-xs sm:text-sm font-display font-medium text-ink-primary min-h-[44px]"
              aria-label="Salin Nomor Induk Berusaha (NIB) ke clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent-emerald" />
                  <span className="text-accent-emerald font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-ink-secondary" />
                  <span>Salin NIB</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
