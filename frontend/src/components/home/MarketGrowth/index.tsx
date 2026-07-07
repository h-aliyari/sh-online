'use client';

import { useEffect, useRef, useState } from 'react';

import StockChart from './StockChart';
import StepBuyChart from './StepBuyChart';

interface GrowthHistory {
  date: string;
  growth: number;
}

interface StepHistory {
  step: string;
  value: number;
}

interface Stock {
  id: number;
  name: string;
  color: string;

  history: GrowthHistory[] | StepHistory[];
}

interface Chart {
  id: number;
  title: string;
  targetPrice?: string;
  stocks: Stock[];
}

export default function MarketGrowth() {
  const [charts, setCharts] = useState<Chart[]>([]);
  const [current, setCurrent] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/market-growth')
      .then((res) => res.json())
      .then((data) => setCharts(data.charts));
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const index = Math.round(
      sliderRef.current.scrollLeft /
        sliderRef.current.clientWidth
    );

    setCurrent(index);
  };

  if (!charts.length) {
    return (
      <div
        className="
        rounded-4xl
        bg-linear-to-br
        from-white
        via-[#ffe8ef]
        to-primary
        p-6
        text-center
        "
      >
        در حال دریافت اطلاعات...
      </div>
    );
  }

  return (
    <section
      className="
      rounded-4xl
      bg-linear-to-br
      from-white
      via-[#ffe8ef]
      to-primary
      p-5
      shadow-lg
      "
    >
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="
        flex
        overflow-x-auto
        snap-x
        snap-mandatory
        no-scrollbar
        scroll-smooth
        "
      >
        {/* نمودار اول */}

        <div
          className="
          min-w-full
          snap-center
          "
        >
          <h2 className="text-xl font-bold mb-5">
            {charts[0].title}
          </h2>

          <StockChart
            stocks={charts[0].stocks as any}
          />
        </div>

        {/* نمودار دوم */}

        <div
          className="
          min-w-full
          snap-center
          "
        >
          <StepBuyChart
            title={charts[1].title}
            stocks={charts[1].stocks as any}
          />
        </div>
      </div>

      {/* Indicator */}

      <div className="flex justify-center gap-2 mt-5">
        {[0, 1].map((item) => (
          <button
            key={item}
            onClick={() => {
              sliderRef.current?.scrollTo({
                left:
                  item *
                  sliderRef.current.clientWidth,
                behavior: 'smooth',
              });
            }}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300

              ${
                current === item
                  ? 'w-8 bg-primary'
                  : 'w-2.5 bg-white'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}