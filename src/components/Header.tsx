'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { DownloadButton } from './DownloadButton';
import { MobileDrawer } from './MobileDrawer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]',
          isScrolled
            ? 'bg-ground-base/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3 md:py-4'
            : 'bg-transparent border-b border-transparent py-4 md:py-5'
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigasi Utama">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-display font-medium text-sm text-ink-secondary hover:text-ink-primary transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Primary CTA */}
            <div className="hidden sm:block">
              <DownloadButton
                label="Unduh Profil (PDF)"
                variant="nav"
                size="md"
              />
            </div>

            {/* Mobile Compact CTA */}
            <div className="block sm:hidden">
              <DownloadButton
                label="Unduh PDF"
                variant="nav"
                size="sm"
                className="text-xs px-3 py-2 min-h-[44px]"
              />
            </div>

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
