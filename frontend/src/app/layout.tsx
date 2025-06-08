import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'optional',
});

export const metadata: Metadata = {
  title: 'SungIl_Portfolio',
  description: 'WantedJobApply',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nanumGothic.className}>{children}</body>
    </html>
  );
}
