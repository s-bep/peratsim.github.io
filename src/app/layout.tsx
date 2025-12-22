import type { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.peratsim.com'),
  title: {
    default: 'Pératsim Innovation - Partenaire technologique pour votre transformation digitale',
    template: '%s | Pératsim Innovation',
  },
  description:
    'Voir plus clair, agir plus juste. Solutions logicielles, infrastructures, cybersécurité, automatisation et conseil stratégique pour votre excellence opérationnelle. Expert en transformation digitale au Burkina Faso.',
  keywords: [
    'Pératsim Innovation',
    'Développement logiciel',
    'Cybersécurité',
    'Automatisation',
    'Robotique',
    'Infrastructure réseaux',
    'Consulting',
    'Formation',
    'Transformation digitale',
    'IA',
    'Innovation technologique',
    'Ouagadougou',
  ],
  authors: [{ name: 'Pératsim Innovation' }],
  creator: 'Pératsim Innovation',
  publisher: 'Pératsim Innovation',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.peratsim.com',
    siteName: 'Pératsim Innovation',
    title: 'Pératsim Innovation - Solutions IA Premium',
    description:
      'Solutions d\'Intelligence Artificielle, développement logiciel et automatisation de classe mondiale.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pératsim Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pératsim Innovation',
    description: 'Solutions IA & Automatisation Premium',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1e4d8b" />
        <meta name="geo.region" content="BF" />
        <meta name="geo.placename" content="Ouagadougou" />
        <meta name="geo.position" content="12.3714;-1.5197" />
        <meta name="ICBM" content="12.3714, -1.5197" />
        <link rel="canonical" href="https://www.peratsim.com" />
        <link rel="alternate" hrefLang="fr" href="https://www.peratsim.com" />
      </head>
      <body className="bg-white text-neutral-900">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
