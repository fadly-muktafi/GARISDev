'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, MessageCircle, Layers } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { BackgroundBeams } from './ui/background-beams';
import { ShimmerButton } from './ui/shimmer-button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ground-base border-b border-white/5">
      {/* Engineering grid + light beams */}
      <BackgroundBeams />

      {/* Ambient Top Spotlight (Soft Violet-Indigo #5846F6 glow at 15-20% opacity) */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] sm:w-[980px] lg:w-[1240px] h-[420px] sm:h-[500px] pointer-events-none -z-0 opacity-20 blur-[120px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, #5846F6 0%, #4338CA 40%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center text-center gap-6 md:gap-7"
        >
          {/* Headline (Enforce Max 2 Lines Across All Viewports) */}
          <h1 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-ink-primary tracking-tight leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto">
            Rekayasa Perangkat Lunak & Terobosan Solusi Digital
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-ink-secondary leading-relaxed max-w-3xl mx-auto">
            PT Global Agra Ripta Solusindo (GARISDev) merancang arsitektur sistem enterprise, produk digital terukur, dan transformasi teknologi terpercaya bagi korporasi dan institusi pemerintah.
          </p>

          {/* Dual CTAs (Centered with Shimmer Button) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <ShimmerButton
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-accent-indigo-btn via-accent-violet to-accent-indigo-btn text-white font-display font-semibold text-sm sm:text-base hover:brightness-110 hover:shadow-[0_0_28px_rgba(99,102,241,0.3)] min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 text-accent-emerald shrink-0" strokeWidth={2} />
              <span>Konsultasi Solusi</span>
            </ShimmerButton>

            <a
              href="#layanan"
              className="press-feedback w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full bg-ground-surface hover:bg-white/[0.05] text-ink-primary border border-white/10 hover:border-white/20 font-display font-medium text-sm sm:text-base transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] min-h-[48px]"
            >
              <span>Eksplorasi Solusi ↓</span>
            </a>
          </div>

          {/* Quick Proof Badges (Centered, General capabilities) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-5 text-xs sm:text-sm text-ink-secondary border-t border-white/5 w-full max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-accent-cyan" />
              <span>Cloud Native Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent-violet-light" />
              <span>Zero-Trust Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-emerald" />
              <span>Enterprise Integration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
