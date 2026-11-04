'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SUPORTIF_VALUES } from '@/lib/data';

export function SectionSuportifValues() {
  return (
    <section id="nilai" className="py-20 md:py-28 bg-ground-base border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight">
              Nilai Inti Korporasi: Filosofi SUPORTIF
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-ink-secondary max-w-md">
            Delapan pilar etos kerja yang menjadi landasan integritas rekayasa, dedikasi tim, dan keunggulan teknologi GARISDev dalam setiap implementasi.
          </p>
        </div>

        {/* 8 Values Grid: Desktop 4 Columns x 2 Rows, Mobile 2 Columns x 4 Rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {SUPORTIF_VALUES.map((val, idx) => (
            <motion.div
              key={val.letter + val.title}
              initial={{ opacity: 0, transform: 'translateY(16px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.23, 1, 0.32, 1] }}
              className="group p-5 sm:p-6 rounded-2xl bg-ground-elevated hover:bg-ground-surface border border-white/5 hover:border-white/10 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-3">
                {/* Letter Badge */}
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-ground-surface border border-white/10 flex items-center justify-center font-display font-bold text-base sm:text-lg group-hover:scale-105 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{ color: val.color }}
                >
                  {val.letter}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-ink-primary group-hover:text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  {val.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
