import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SectionClientsLegality } from '@/components/SectionClientsLegality';
import { SectionCoreServices } from '@/components/SectionCoreServices';
import { SectionFlagshipProducts } from '@/components/SectionFlagshipProducts';
import { SectionSuportifValues } from '@/components/SectionSuportifValues';
import { SectionPrimaryAction } from '@/components/SectionPrimaryAction';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-ground-base flex flex-col selection:bg-accent-indigo-btn selection:text-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Single-Page Blueprint */}
      <main className="flex-1 flex flex-col">
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Section 3: Trust & Legal */}
        <SectionClientsLegality />

        {/* Section 4: Core Services */}
        <SectionCoreServices />

        {/* Section 5: Flagship Products */}
        <SectionFlagshipProducts />

        {/* Section 6: Corporate Values (Filosofi SUPORTIF) */}
        <SectionSuportifValues />

        {/* Section 7: Primary Conversion Action */}
        <SectionPrimaryAction />
      </main>

      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}
