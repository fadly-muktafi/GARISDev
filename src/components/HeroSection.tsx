'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Server, Cpu } from 'lucide-react';
import { DownloadButton } from './DownloadButton';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ground-base border-b border-white/5">
      {/* Background Subtle Gradient Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-ground-elevated border border-accent-violet/30 self-start shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
              <span className="font-display text-xs font-bold text-accent-violet-light tracking-wider">
                REKAYASA ENTERPRISE SEJAK 2014
              </span>
            </div>

            {/* Headline (Enforce Max 2 Lines Across All Viewports) */}
            <h1 className="font-display font-bold text-[25px] sm:text-4xl md:text-5xl lg:text-[46px] text-ink-primary tracking-tight leading-[1.2] sm:leading-[1.15]">
              Rekayasa Perangkat Lunak & Terobosan Solusi Digital
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
              PT Global Agra Ripta Solusindo (GARISDev) merancang arsitektur sistem enterprise, produk digital terukur, dan transformasi teknologi terpercaya bagi korporasi dan institusi pemerintah.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <DownloadButton
                label="Unduh Profil Perusahaan (PDF)"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base justify-center shadow-indigo-500/20"
              />

              <a
                href="#produk"
                className="press-feedback inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-ground-surface hover:bg-ground-elevated text-ink-primary border border-white/10 hover:border-white/20 font-display font-medium text-sm sm:text-base transition-colors"
              >
                <span>Eksplorasi Solusi</span>
                <ArrowRight className="w-4 h-4 text-accent-cyan" strokeWidth={2} />
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-ink-secondary border-t border-white/5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                <span>NIB Terverifikasi Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-accent-cyan" />
                <span>Cloud Native Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-violet-light" />
                <span>Zero-Trust Security</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Enterprise Telemetry Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5"
          >
            <div className="w-full rounded-2xl bg-ground-elevated border border-white/10 p-5 sm:p-6 shadow-2xl flex flex-col gap-6">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-ground-surface border border-white/10 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-accent-emerald" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-xs text-ink-primary block">
                      GARISDEV CORE TELEMETRY
                    </span>
                    <span className="font-sans text-[11px] text-ink-secondary">
                      Live Operational Cluster
                    </span>
                  </div>
                </div>

                {/* Pulse Status */}
                <div className="flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-ground-surface border border-accent-emerald/30">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-accent-emerald tracking-wide">
                    ALL SYSTEMS ONLINE
                  </span>
                </div>
              </div>

              {/* 4 Core Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 rounded-xl bg-ground-surface border border-white/5 flex flex-col gap-1">
                  <span className="font-sans text-xs text-ink-secondary">Uptime SLA</span>
                  <span className="font-display font-bold text-xl sm:text-2xl text-ink-primary tracking-tight">
                    99.98%
                  </span>
                  <span className="text-[11px] text-accent-emerald font-medium">
                    High-Availability
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-ground-surface border border-white/5 flex flex-col gap-1">
                  <span className="font-sans text-xs text-ink-secondary">Pengalaman</span>
                  <span className="font-display font-bold text-xl sm:text-2xl text-ink-primary tracking-tight">
                    2014-Now
                  </span>
                  <span className="text-[11px] text-accent-cyan font-medium">
                    10+ Tahun Rekayasa
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-ground-surface border border-white/5 flex flex-col gap-1">
                  <span className="font-sans text-xs text-ink-secondary">Solusi Flagship</span>
                  <span className="font-display font-bold text-xl sm:text-2xl text-ink-primary tracking-tight">
                    6 Platform
                  </span>
                  <span className="text-[11px] text-accent-violet-light font-medium">
                    Enterprise Ready
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-ground-surface border border-white/5 flex flex-col gap-1">
                  <span className="font-sans text-xs text-ink-secondary">Legalitas Resmi</span>
                  <span className="font-display font-bold text-xl sm:text-2xl text-ink-primary tracking-tight">
                    Akta 394
                  </span>
                  <span className="text-[11px] text-accent-amber font-medium">
                    Kemenkumham RI
                  </span>
                </div>
              </div>

              {/* Verified Security Standard Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-ink-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-violet" />
                  <span>Arsitektur Microservices</span>
                </div>
                <span className="font-mono text-accent-violet-light font-medium">
                  ISO Compliance Ready
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
