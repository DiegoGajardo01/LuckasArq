import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LanguageProvider } from '@/contexts/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuckasArq",
  description: "Página web de Luckas Gajardo, arquitecto Chileno",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: "Arquitectura, renders, urbanismo, interiorismo"
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