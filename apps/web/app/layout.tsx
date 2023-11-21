import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dušan Miletić - Frontend Developer',
  description:
    'Personal website of Dušan Miletić, Frontend Developer and Architect focusing on React Ecosystem.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-6">{children}</div>
      </body>
    </html>
  );
}
