import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LanguageProvider } from '@/contexts/LanguageContext';
import StructuredData from '@/components/StructuredData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luckasarq.com';
const siteName = 'LuckasArq - Arquitectura y Diseño';
const defaultDescription = 'Luckas Gajardo, arquitecto chileno especializado en diseño arquitectónico, diseño de interiores, regularización de viviendas, levantamientos 3D con drones y proyectos eléctricos SEC. Servicios profesionales de arquitectura en Chile.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  keywords: [
    'arquitecto',
    'arquitectura',
    'diseño arquitectónico',
    'diseño de interiores',
    'arquitecto chileno',
    'regularización de viviendas',
    'levantamientos 3D',
    'drones arquitectura',
    'proyectos eléctricos SEC',
    'renders arquitectónicos',
    'urbanismo',
    'interiorismo',
    'arquitectura residencial',
    'arquitectura comercial',
    'DOM',
    'OGUC',
    'fotogrametría',
    'modelo 3D'
  ],
  authors: [{ name: 'Luckas Gajardo' }],
  creator: 'Luckas Gajardo',
  publisher: 'LuckasArq',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'LuckasArq - Arquitectura y Diseño',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: defaultDescription,
    images: [`${siteUrl}/img/og-image.jpg`],
    creator: '@luckas.arq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'es-CL': siteUrl,
      'en': `${siteUrl}/en`,
    },
  },
  verification: {
    // Agregar cuando tengas Google Search Console
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <LanguageProvider>
          <StructuredData />
          <Header/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}