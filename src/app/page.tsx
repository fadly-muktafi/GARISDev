import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SectionClients } from '@/components/SectionClients';
import { SectionCoreServices } from '@/components/SectionCoreServices';
import { SectionFlagshipProducts } from '@/components/SectionFlagshipProducts';
import { SectionSportifValues } from '@/components/SectionSportifValues';
import { SectionPrimaryAction } from '@/components/SectionPrimaryAction';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SectionClients />
        <SectionCoreServices />
        <SectionFlagshipProducts />
        <SectionSportifValues />
        <SectionPrimaryAction />
      </main>

      <Footer />
    </div>
  );
}
