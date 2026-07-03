// frontend\src\app\layout.tsx
'use client';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Test_Widget from '@/components/layout/Test-Widget';
import { ThemeProvider } from '../context/ThemeContext';
import useTheme from "@/hooks/useTheme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { isDarkMode } = useTheme();

  return (
    <html lang="fa" dir="rtl">
      <body className={isDarkMode ? 'dark-mode' : ''}>
        <ThemeProvider>
          <Header />
          <main className="container mx-auto px-4 pt-4 pb-32">
            {children}
          </main>
          <Test_Widget />
          <Footer />
        </ThemeProvider>
      </body >
    </html >
  );
}