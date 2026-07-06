'use client';

import { useEffect, useState } from 'react';
import StockCard from './StockCard';

interface Stock {
  id: number;
  symbol: string;
  company: string;
  growth: number;
  history: number[];
}

export default function MarketGrowth() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    fetch('/api/market-growth')
      .then((res) => res.json())
      .then(setStocks);
  }, []);

  return (
    <section
      className="
        rounded-[2rem]
        bg-gradient-to-br
        from-white
        via-[#ff8bb0]
        to-primary
        py-6
        px-2
        shadow-lg
      "
    >
      {/* Header */}
      <div className="px-3 mb-6">
        <h2 className="text-2xl text-secondary">
          📈 نمودار رشد سهم‌ها
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          no-scrollbar
          snap-x
          snap-mandatory
          px-6
          pb-2
        "
      >
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="snap-start shrink-0"
          >
            <StockCard {...stock} />
          </div>
        ))}
      </div>
    </section>
  );
}