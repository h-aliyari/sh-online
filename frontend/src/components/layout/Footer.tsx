// frontend/src/components/layout/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const menuItems = [
    { name: 'شبکه دانش مالی', icon: '🧠', href: '/modules/network' },
    { name: 'پنل آموزشی', icon: '🎓', href: '/modules/academy' },
    { name: 'دیجیتال مگ', icon: '📰', href: '/modules/magazine' },
    { name: 'مشاوره', icon: '📊', href: '/modules/consulting' },
    { name: 'رتبه‌بندی', icon: '🏆', href: '/modules/ranking' },
  ];

  return (
    <nav className="fixed bottom-6 left-6 right-6 bg-primary backdrop-blur-xl border border-white/50 h-20 flex items-center px-2 z-50 shadow-2xl shadow-primary/40 rounded-4xl overflow-x-auto no-scrollbar">
      <div className="flex items-center justify-around w-full gap-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center justify-center w-16 h-16 transition-all active:scale-90 group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="text-[10px] sm:text-[11px] font-black text-white mt-1 truncate w-full text-center">
              {item.name}
            </span>

            <div className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Footer;