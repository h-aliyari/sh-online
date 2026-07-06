'use client';

import StockChart from './StockChart';

interface Props {
  symbol: string;
  company: string;
  growth: number;
  history: number[];
}

export default function StockCard({
  symbol,
  company,
  growth,
  history,
}: Props) {
  const positive = growth >= 0;

  return (
    <div
      className="
        min-w-[255px]
        rounded-[1.8rem]
        bg-white
        border
        border-white/70
        shadow-md
        p-5
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        "
    >
      <div className="flex justify-between items-start">

        <div>

          <h3 className="font-bold text-lg">
            {symbol}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {company}
          </p>

        </div>

        <div
          className={`
            px-3
            py-1.5
            rounded-full
            text-sm
            font-bold
            ${
              positive
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }
          `}
        >
          {positive ? '▲' : '▼'} {Math.abs(growth)}%
        </div>

      </div>

      <div className="mt-4 h-[70px]">
        <StockChart history={history} />
      </div>
    </div>
  );
}