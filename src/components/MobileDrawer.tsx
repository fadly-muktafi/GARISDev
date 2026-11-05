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
  Building2,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/data';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ICONS = [
  { icon: Building2, color: '#38BDF8' },
  { icon: Layers, color: '#818CF8' },
  { icon: Box, color: '#60A5FA' },
  { icon: Compass, color: '#C084FC' },
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
                  <Image
                    src="/assets/garisdev-icon-cropped.png"
                    alt=""
                    width={525}
                    height={515}
                    sizes="36px"
                    className="h-9 w-auto shrink-0 object-contain"
                  />
                  <span className="font-display font-bold text-lg text-ink-primary tracking-tight">
                    GARISDev
                  </span>
                </div>

                {/* Close Button X (44x44px Touch Target) */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup menu navigasi"
                  className="press-feedback w-11 h-11 rounded-xl bg-ground-surface border border-white/10 flex items-center justify-center text-ink-primary hover:bg-white/[0.05] hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet-light"
                >
                  <X className="w-5 h-5 text-ink-primary" strokeWidth={2} />
                </button>
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
                      className="press-feedback w-full min-h-[52px] flex items-center justify-between py-3.5 px-4 rounded-xl bg-ground-elevated hover:bg-ground-surface border border-white/5 hover:border-white/10 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] text-left"
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
              {/* WhatsApp Consultation Action */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="press-feedback w-full min-h-[48px] py-3 px-4 rounded-xl bg-gradient-to-r from-accent-indigo-btn via-accent-violet to-accent-indigo-btn text-white flex items-center justify-center gap-2 font-display font-semibold text-sm hover:brightness-110 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <MessageCircle className="w-4 h-4 text-accent-emerald" strokeWidth={2} />
                <span>Konsultasi WhatsApp</span>
              </a>

              {/* Corporate Footer Meta */}
              <div className="flex items-center justify-center pt-2 text-xs text-ink-muted">
                <span>PT Global Agra Ripta Solusindo</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
