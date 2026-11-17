'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/data';
import { DownloadButton } from './ui/download-button';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const lenis = useLenis();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Keep keyboard focus inside the drawer while it is open.
  useEffect(() => {
    if (!isOpen) return;

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleTab);
    return () => window.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.1, offset: -80 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 240);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/45 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            initial={{ transform: 'translateX(100%)' }}
            animate={{ transform: 'translateX(0%)' }}
            exit={{ transform: 'translateX(100%)' }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="relative z-10 flex h-full w-full max-w-[420px] flex-col justify-between overflow-y-auto bg-paper p-6 text-ink shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
          >
            <div>
              <div className="flex items-center justify-between">
                <a href="#" onClick={onClose} aria-label="GARISDev, kembali ke atas">
                  <Image
                    src="/assets/garisdev-logo-dark-cropped.png"
                    alt="GARISDev"
                    width={1053}
                    height={279}
                    sizes="110px"
                    className="h-6 w-auto object-contain"
                  />
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup menu"
                  autoFocus
                  className="press flex h-10 w-10 items-center justify-center border border-line text-ink hover:border-ink focus-visible:outline-none"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="mt-12 flex flex-col" aria-label="Menu utama">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="group flex items-center justify-between border-t border-line py-5 text-left last:border-b"
                  >
                    <span className="font-display text-[26px] font-medium leading-none tracking-[-0.03em] transition-colors duration-200 group-hover:text-brand">
                      {item.label}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-ink-faint transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:text-brand"
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              <DownloadButton variant="brand" className="w-full" />

              <div className="flex flex-col gap-2 border-t border-line pt-5 text-[12px] text-ink-muted">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="link-underline w-fit text-ink-soft hover:text-ink"
                >
                  {COMPANY_INFO.email}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="link-underline w-fit text-ink-soft hover:text-ink"
                >
                  {COMPANY_INFO.phone}
                </a>
                <span className="pt-2 text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
