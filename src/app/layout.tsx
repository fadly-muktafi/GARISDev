import type { Metadata, Viewport } from 'next';
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GARISDev | Pengembangan Perangkat Lunak & Rekayasa Teknologi Informasi',
  description:
    'PT Global Agra Ripta Solusindo (GARISDev) memfokuskan diri pada pengembangan software dan rekayasa teknologi informasi untuk menghadirkan solusi digital yang praktis, scalable, serta terintegrasi sejak 2014.',
  keywords: [
    'GARISDev',
    'PT Global Agra Ripta Solusindo',
    'Software Engineering Indonesia',
    'Enterprise IT Consultant',
    'Custom Web & Mobile Development',
    'Wellora',
    'ApartHub',
    'TenantHub',
    'Stayora',
    'GoAmbulan',
    'AIRA',
    'Jakarta IT Company',
  ],
  authors: [{ name: 'PT Global Agra Ripta Solusindo' }],
  metadataBase: new URL('https://garisdev.co.id'),
  alternates: {
    canonical: 'https://garisdev.co.id',
  },
  openGraph: {
    title: 'GARISDev | Pengembangan Perangkat Lunak & Rekayasa Teknologi Informasi',
    description:
      'Solusi pengembangan software dan rekayasa teknologi informasi untuk korporasi serta institusi pemerintah Indonesia sejak 2014.',
    url: 'https://garisdev.co.id',
    siteName: 'GARISDev',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'GARISDev, PT Global Agra Ripta Solusindo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GARISDev | Rekayasa Digital, Skala Nasional',
    description:
      'Sistem enterprise, platform operasional, dan integrasi data untuk korporasi serta institusi pemerintah Indonesia sejak 2014.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'GARISDev, PT Global Agra Ripta Solusindo',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#F6F4EF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${interTight.variable} ${instrumentSerif.variable}`}>
      <body className="bg-paper font-sans text-ink selection:bg-brand selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
