'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, CheckCircle, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { DownloadButton } from './DownloadButton';

export function SectionPrimaryAction() {
  return (
    <section className="py-20 md:py-28 bg-ground-base border-b border-white/5 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-ground-elevated border border-accent-violet/30 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-12"
        >
          {/* Left Column: CTA Pitch */}
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-ground-surface border border-accent-violet/30 self-start shadow-sm">
              <FileText className="w-4 h-4 text-accent-violet-light" />
              <span className="font-display text-xs font-bold text-accent-violet-light tracking-wider">
                DOKUMEN RESMI PERSEROAN
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight leading-tight">
              Pelajari Rekam Jejak & Kapabilitas Lengkap Kami
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
              Unduh dokumen resmi Company Profile PT Global Agra Ripta Solusindo untuk evaluasi teknis arsitektur, rekam jejak kemitraan strategis, dan proposal integrasi enterprise.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <DownloadButton
                label="Unduh Company Profile (PDF)"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base justify-center shadow-indigo-500/20"
              />

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="press-feedback inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-ground-surface hover:bg-ground-base border border-accent-emerald/40 hover:border-accent-emerald/70 text-ink-primary font-display font-semibold text-sm sm:text-base transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 text-accent-emerald" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* Direct Email Link */}
            <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm text-ink-secondary">
              <Mail className="w-4 h-4 text-ink-muted" />
              <span>
                Ingin konsultasi langsung? Hubungi representatif kami di{' '}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-accent-violet-light hover:underline font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: Physical Document Visual Card */}
          <div className="w-full lg:w-[420px] rounded-2xl bg-ground-surface border border-white/10 p-6 sm:p-8 flex flex-col justify-between gap-8 shadow-xl">
            {/* Spec Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-violet" />
                <span className="font-display font-bold text-xs text-ink-primary tracking-wider">
                  GARISDEV OFFICIAL SPEC
                </span>
              </div>
              <span className="py-0.5 px-2 rounded bg-ground-base border border-accent-violet/30 font-display text-[11px] font-bold text-accent-violet-light">
                PDF 2026
              </span>
            </div>

            {/* Document Core Meta */}
            <div className="flex flex-col gap-2 py-2">
              <span className="font-display font-bold text-[11px] text-ink-secondary tracking-widest">
                PT GLOBAL AGRA RIPTA SOLUSINDO
              </span>
              <h3 className="font-display font-bold text-2xl text-ink-primary tracking-tight">
                COMPANY PROFILE
              </h3>
              <p className="font-sans text-xs text-ink-secondary leading-relaxed pt-1">
                Enterprise Software Engineering, Architecture Strategy, & 6 Flagship Platform Ecosystem.
              </p>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
              <div className="flex items-center gap-2 text-accent-emerald font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Perseroan</span>
              </div>
              <span className="text-ink-muted font-mono">Ref: GRSDV-2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
