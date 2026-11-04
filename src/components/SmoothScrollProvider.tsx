'use client';

import React, { ReactNode, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

interface Props {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}

/**
 * AnchorScroll — routes every in-page `#hash` link through Lenis so the jump
 * becomes a gliding scroll that respects each section's `scroll-mt` (fixed
 * header clearance). Modified clicks (new tab, etc.) keep native behaviour.
 */
function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const id = decodeURIComponent(href.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (id && !target) return;

      event.preventDefault();
      lenis.scrollTo(target ?? 0, { duration: 1.1 });

      if (id) {
        window.history.replaceState(null, '', `#${id}`);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [lenis]);

  return null;
}
