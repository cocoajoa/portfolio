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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vk4noJi8ax0ijFGGDTW4jlz2wGu3sd9z01yW3DmIBnA"
        />
      </head>
      <body className={nanumGothic.className}>{children}</body>
    </html>
  );
}
