import type { Metadata, Viewport } from 'next';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'PT Global Agra Ripta Solusindo (GARISDev) — Official Company Profile',
  description:
    'Profil resmi PT Global Agra Ripta Solusindo (GARISDev). Rekayasa perangkat lunak enterprise, arsitektur sistem cloud native, dan ekosistem platform digital flagship teruji sejak 2014.',
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
    title: 'PT Global Agra Ripta Solusindo (GARISDev) — Official Company Profile',
    description:
      'Rekayasa perangkat lunak enterprise, arsitektur sistem cloud native, dan ekosistem platform digital flagship teruji sejak 2014.',
    url: 'https://garisdev.co.id',
    siteName: 'GARISDev',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/assets/garisdev-logo-white-cropped.png',
        width: 1200,
        height: 630,
        alt: 'GARISDev Corporate Emblem and Wordmark',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#090A0F',
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
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ground-base text-ink-primary font-sans selection:bg-accent-indigo-btn selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
