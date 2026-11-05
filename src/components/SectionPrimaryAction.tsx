'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export function SectionPrimaryAction() {
  return (
    <section id="kontak" className="py-20 md:py-28 bg-ground-base border-b border-white/5 relative overflow-hidden scroll-mt-20">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-ground-elevated border border-white/10 shadow-2xl flex flex-col items-center text-center gap-6"
        >
          {/* Headline (Enforce max 2 lines) */}
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight leading-tight max-w-2xl">
            Siap Mentransformasi Ekosistem Digital Bisnis Anda?
          </h2>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed max-w-xl">
            Diskusikan kebutuhan arsitektur sistem, pengembangan aplikasi, dan integrasi teknologi bersama tim rekayasa GARISDev.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press-feedback w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full bg-gradient-to-r from-accent-indigo-btn via-accent-violet to-accent-indigo-btn text-white font-display font-semibold text-sm sm:text-base hover:brightness-110 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 text-accent-emerald shrink-0" strokeWidth={2} />
              <span>Konsultasi via WhatsApp</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="press-feedback w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full bg-ground-surface hover:bg-white/[0.05] border border-white/10 hover:border-white/20 text-ink-primary font-display font-semibold text-sm sm:text-base transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] min-h-[48px]"
            >
              <Mail className="w-5 h-5 text-accent-violet-light shrink-0" strokeWidth={2} />
              <span>Kirim Email Resmi</span>
            </a>
          </div>

          {/* Micro text */}
          <div className="pt-2 text-xs text-ink-muted">
            Konsultasi langsung bersama Principal Engineer • Respons cepat di jam kerja
          </div>
        </motion.div>
      </div>
    </section>
  );
}
