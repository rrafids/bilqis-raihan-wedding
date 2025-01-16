import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bilqis & Raihan Wedding',
  description: 'The Wedding of Bilqis & Raihan',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://raw.githubusercontent.com/rrafids/bilqis-raihan-wedding/master/public/image/favico.ico',
        href: 'https://raw.githubusercontent.com/rrafids/bilqis-raihan-wedding/master/public/image/favico.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='icon'
          href='https://raw.githubusercontent.com/rrafids/bilqis-raihan-wedding/master/public/image/favico.ico'
          sizes='any'
        />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
