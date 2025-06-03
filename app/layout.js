import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AIntBroke',
  description: 'Automated AI Finance Planner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-blue-50 w-full py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by vatsi</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
