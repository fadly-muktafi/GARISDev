'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';
import { MobileDrawer } from './MobileDrawer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('klien');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active link intersection observer for smooth sliding pill
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
          'bg-ground-base/80 backdrop-blur-md border-b border-white/[0.08]',
          isScrolled
            ? 'py-3 md:py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'py-4 md:py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="press-feedback flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet-light rounded-lg"
            aria-label="PT Global Agra Ripta Solusindo (GARISDev) Beranda"
          >
            <Image
              src="/assets/garisdev-icon-cropped.png"
              alt=""
              width={525}
              height={515}
              priority
              sizes="(min-width: 768px) 36px, 32px"
              className="h-8 md:h-9 w-auto shrink-0 object-contain"
            />
            <span className="font-display font-bold text-lg md:text-xl text-ink-primary tracking-tight group-hover:text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
              GARISDev
            </span>
          </a>

          {/* Desktop Navigation Links with Framer Motion Sliding Pill */}
          <nav
            className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-ground-elevated/60 border border-white/[0.06] backdrop-blur-sm"
            aria-label="Navigasi Utama"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    'relative px-4 py-1.5 rounded-full text-xs font-display font-medium transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:text-white',
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-ink-secondary hover:text-ink-primary'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navActivePill"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12] shadow-[0_0_12px_rgba(99,102,241,0.2)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Primary CTA */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press-feedback hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-accent-indigo-btn via-accent-violet to-accent-indigo-btn hover:brightness-110 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4 text-accent-emerald shrink-0" strokeWidth={2} />
              <span>Konsultasi Proyek</span>
            </a>

            {/* Mobile Compact CTA */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press-feedback inline-flex sm:hidden items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-accent-indigo-btn via-accent-violet to-accent-indigo-btn hover:brightness-110 rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] min-h-[44px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-accent-emerald shrink-0" strokeWidth={2} />
              <span>Konsultasi</span>
            </a>

            {/* Hamburger Button (Mobile / Tablet) */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Buka menu navigasi"
              className="press-feedback lg:hidden w-11 h-11 rounded-xl bg-ground-surface border border-white/10 hover:bg-white/[0.05] hover:border-white/20 flex items-center justify-center text-ink-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet-light"
            >
              <Menu className="w-5 h-5 text-ink-primary" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Component */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
