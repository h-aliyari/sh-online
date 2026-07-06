// src/components/home/HotOpportunities.tsx
'use client';
import React from "react";
import useTheme from '../../hooks/useTheme';

const HotOpportunities = () => {
  const { primaryColor, backgroundColor, textColor } = useTheme();

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center px-2">
        <h2 className="font-bold text-secondary border-r-4 border-primary pr-2 leading-none">
          فرصت‌های داغ🔥
        </h2>
        <span className="text-[10px] text-primary font-bold">مشاهده همه</span>
      </div>
      <div className="bg-white border-2 border-dashed border-gray-100 rounded-3xl h-36 flex flex-col items-center justify-center text-gray-400 gap-2 font-medium">
         {/* <span className="text-2xl">🔥</span> */}
         <p className="text-[11px]" >فرصتهای جدید سرمایه گذاری به زودی ...</p>
      </div>
    </section>
  );
};

export default HotOpportunities;