// frontend\src\components\layout\Header.tsx
'use client';
import Link from 'next/link';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <header className="bg-black/15 backdrop-blur-md h-16 flex items-center justify-between px-6 sticky top-0 z-50 border-b border-gray-100">

      <nav className="flex gap-5 items-center">
        {/* تغییر تم */}
        {isDarkMode ? (
          <button onClick={toggleTheme} className="text-white px-0 py-2 rounded-md hover:bg-blue-500">
            ☀️
          </button>
        ) : (
          <button onClick={toggleTheme} className="text-white px-0 py-2 rounded-md hover:bg-red-500">
            🌙
          </button>
        )}
        <Link href="/user" className="text-secondary/70 font-medium text-sm hover:text-primary transition-colors">
          👤
        </Link>
        <Link href="/" className="text-secondary font-bold text-sm hover:text-primary transition-colors">
          خانه
        </Link>
        <Link href="/about" className="text-secondary/70 font-medium text-sm hover:text-primary transition-colors">
          درباره ما
        </Link>
      </nav>

      {/* بالا سمت چپ: اسم برند با فونت خاص */}
      <div>
        <Link href="/" className="flex flex-col items-end">
          <span className="text-primary font-black text-xl italic tracking-tighter leading-none">
            Sharik Online
          </span>
          <span className="text-[8px] text-secondary/40 font-bold uppercase tracking-widest">
            Investment Partner
          </span>
        </Link>
      </div>

    </header>
  );
};

export default Header;