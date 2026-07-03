'use client';
import Link from 'next/link';
import Image from 'next/image';
const Test_Widget = () => {
  return (
    <div className="fixed bottom-33 right-8 h-15 w-15 bg-primary shadow-2xl shadow-primary/40 rounded-full flex items-center justify-center">
      <Link href="/risk-test" className="flex items-center justify-center h-full w-full">
        {/* پرانت دایره‌ای که عکس رو دایره‌ای می‌کنه */}
        <div className="h-full w-full overflow-hidden rounded-full flex items-center justify-center">
          <Image
            src="/assets/pics/Logo-circule.png"
            alt="Test"
            width={64}
            height={64}
            className="object-contain"
            priority
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const textSpan = document.createElement('span');
                textSpan.className = 'text-white text-xs font-bold';
                textSpan.textContent = 'Test';
                parent.appendChild(textSpan);
              }
            }}
          />
          {/* متن Test به عنوان فلش‌بک */}
          <span className="text-white text-xs font-bold hidden">Test</span>
        </div>
      </Link>
    </div>
  );
};
export default Test_Widget;