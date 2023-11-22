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
      <body className={`${inter.className} bg-zinc-950 text-zinc-400`}>
        <div
          className="mx-6 mt-16
          md:max-w-2xl md:mx-auto md:mt-24
          lg:max-w-3xl lg:mt-28 
          xl:flex xl:justify-between xl:gap-12 xl:max-w-5xl xl:mt-0"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
