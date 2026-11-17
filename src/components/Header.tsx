'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { MobileDrawer } from './MobileDrawer';
import { DownloadButton } from './ui/download-button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
      if (window.scrollY < 240) setActiveSection('');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
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
          'fixed inset-x-0 top-0 z-40 bg-paper transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
          isScrolled ? 'border-b border-line' : 'border-b border-transparent'
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
          <a
            href="#"
            aria-label="GARISDev, kembali ke atas"
            className="press flex shrink-0 items-center focus-visible:outline-none"
          >
            <Image
              src="/assets/garisdev-logo-dark-cropped.png"
              alt="GARISDev"
              width={1053}
              height={279}
              priority
              sizes="120px"
              className="h-6 w-auto object-contain md:h-7"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                data-active={activeSection === item.id}
                onClick={() => setActiveSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={cn(
                  'link-underline text-[13px] font-medium tracking-[-0.01em]',
                  activeSection === item.id
                    ? 'text-brand'
                    : 'text-ink-soft hover:text-ink'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <DownloadButton
              compact
              showMeta
              variant="brand"
              className="min-h-[40px] px-4 text-[12px] sm:min-h-[44px] sm:px-5 sm:text-[13px]"
            />

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Buka menu navigasi"
              className="press flex h-10 w-10 items-center justify-center border border-line text-ink hover:border-ink focus-visible:outline-none lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
