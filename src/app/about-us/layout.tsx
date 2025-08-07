import React from 'react';
import '../../styles/index.css';
import Header2 from '@/components/common/Header2';
import Footer from '@/components/common/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Welcome to Acutaas Chemicals Limited',
  description:
    'Acutaas Chemicals Limited privately own company was established in 2004. Complementing the Global Healthcare effort Chemicals Limited an indian Pharma Company has reported strong initiatives in 2004 and announced firm plans for itself to emerge as an Advance Pharma intermediate manufacturing company and company has developed a series of advance pharma intermediates for latest API and NCE.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header2 />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
