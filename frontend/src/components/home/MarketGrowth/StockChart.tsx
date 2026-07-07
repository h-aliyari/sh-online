// frontend\src\components\home\MarketGrowth\StockChart.tsx
'use client';

import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
} from 'recharts';

interface HistoryItem {
  date: string;
  growth: number;
}

interface Stock {
  id: number;
  name: string;
  color: string;
  history: HistoryItem[];
}

interface Props {
  stocks: Stock[];
}

const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
];

export default function StockChart({
  stocks,
}: Props) {
  // تبدیل داده‌ها به فرمت مناسب Recharts
  const chartData = months.map((month) => {
    const row: Record<string, string | number | null> = {
      date: month,
    };

    stocks.forEach((stock) => {
      const point = stock.history.find(
        (item) => item.date === month
      );

      row[stock.name] = point
        ? point.growth
        : null;
    });

    return row;
  });

  return (
    <div
      className="
      rounded-3xl
      bg-white
      border
      border-black/10
      p-4
      "
    >
      {/* Legend */}

      <div className="flex flex-wrap gap-5 mb-4">

        {stocks.map((stock) => (

          <div
            key={stock.id}
            className="flex items-center gap-2"
          >

            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: stock.color,
              }}
            />

            <span className="text-sm text-black/70">
              {stock.name}
            </span>

          </div>

        ))}

      </div>

      <ResponsiveContainer
        width="100%"
        height={210}
      >
        <ComposedChart
          data={chartData}
          margin={{
          top: 5,
          right: 5,
          left: -25,
          bottom: 0,
        }}
        >
          <defs>

            <linearGradient
              id="growthGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#16a34a"
                stopOpacity={0.35}
              />

              <stop
                offset="100%"
                stopColor="#16a34a"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            opacity={0.25}
          />

          <XAxis
            dataKey="date"
            tick={{
              fontSize: 12,
            }}
          />

          <YAxis
            unit="%"
            tick={{
              fontSize: 12,
            }}
          />

          {stocks.map((stock) => (

            <Line
              key={stock.id}
              type="monotone"
              dataKey={stock.name}
              stroke={stock.color}
              strokeWidth={3}
              dot={{
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
              connectNulls={false}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}