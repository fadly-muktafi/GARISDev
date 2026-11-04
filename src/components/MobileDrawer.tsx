'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import {
  X,
  ChevronRight,
  Layers,
  Box,
  Compass,
  ShieldCheck,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/data';
import { DownloadButton } from './DownloadButton';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ICONS = [
  { icon: Layers, color: '#818CF8' },
  { icon: Box, color: '#38BDF8' },
  { icon: Compass, color: '#C084FC' },
  { icon: ShieldCheck, color: '#F59E0B' },
  { icon: Phone, color: '#22C55E' },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const lenis = useLenis();

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    // Let the drawer unmount and body scroll restore, then glide with Lenis
    setTimeout(() => {
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 220);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-ground-base/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ transform: 'translateX(100%)' }}
            animate={{ transform: 'translateX(0%)' }}
            exit={{ transform: 'translateX(100%)' }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="relative z-10 w-full max-w-[390px] h-full bg-ground-base border-l border-white/10 p-5 flex flex-col justify-between overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
          >
            {/* Top Container */}
            <div className="flex flex-col gap-5">
              {/* Header: Brand & Close Button */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-ground-surface border border-accent-violet/20 flex items-center justify-center p-1.5 shadow-sm">
                    <Image
                      src="/assets/garisdev-icon-cropped.png"
                      alt="GARISDev Emblem"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-display font-bold text-lg text-ink-primary tracking-tight">
                    GARISDev
                  </span>
                </div>

                {/* Close Button X (44x44px Touch Target) */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup menu navigasi"
                  className="press-feedback w-11 h-11 rounded-xl bg-ground-surface border border-white/10 flex items-center justify-center text-ink-primary hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet-light"
                >
                  <X className="w-5 h-5 text-ink-primary" strokeWidth={2} />
                </button>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-ground-elevated border border-white/5 self-start">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                <span className="font-sans text-xs font-medium text-ink-secondary tracking-wider">
                  NAVIGASI SISTEM PERSEROAN
                </span>
              </div>

              {/* Vertical Menu Items */}
              <nav className="flex flex-col gap-2" aria-label="Menu Utama">
                {NAV_ITEMS.map((item, idx) => {
                  const IconComponent = MENU_ICONS[idx]?.icon || Layers;
                  const color = MENU_ICONS[idx]?.color || '#818CF8';

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="press-feedback w-full min-h-[52px] flex items-center justify-between py-3.5 px-4 rounded-xl bg-ground-elevated hover:bg-ground-surface border border-white/5 hover:border-white/10 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg bg-ground-surface flex items-center justify-center shrink-0 border border-white/5"
                          style={{ color }}
                        >
                          <IconComponent className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <span className="font-display font-semibold text-sm text-ink-primary">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-ink-muted" strokeWidth={2} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
              {/* Primary Action Button */}
              <DownloadButton
                label="Unduh Profil Perusahaan (PDF)"
                variant="drawer"
                size="lg"
                className="w-full text-sm"
              />

              {/* Secondary WhatsApp Action */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="press-feedback w-full min-h-[48px] py-3 px-4 rounded-xl bg-ground-surface hover:bg-ground-elevated border border-accent-emerald/30 hover:border-accent-emerald/60 flex items-center justify-center gap-2 font-display font-semibold text-sm text-ink-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent-emerald" strokeWidth={2} />
                <span>Konsultasi WhatsApp</span>
              </a>

              {/* Corporate Footer Meta */}
              <div className="flex items-center justify-between pt-2 text-xs text-ink-muted">
                <span>PT Global Agra Ripta Solusindo</span>
                <span className="text-accent-violet-light font-mono">NIB: 124700220599</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
