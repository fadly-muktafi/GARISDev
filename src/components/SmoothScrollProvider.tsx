'use client';

import React, { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

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
      {children}
    </ReactLenis>
  );
}
