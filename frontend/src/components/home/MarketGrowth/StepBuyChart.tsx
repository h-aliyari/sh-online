'use client';

import { useState } from 'react';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';

import { Menu, X } from 'lucide-react';

interface History {
  step: string;
  growth: number;
  buyPercent: number;
}

interface Stock {
  id: number;
  name: string;
  color: string;
  targetPrice: string;
  history: History[];
}

interface Props {
  title: string;
  stocks: Stock[];
}

export default function StepBuyChart({
  title,
  stocks,
}: Props) {
  const [selected, setSelected] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const stock = stocks[selected];

  return (
    <div>

      {/* عنوان نمودار */}

      <h3
        className="
        text-lg
        font-bold
        text-secondary
        mb-3
        px-1
        "
      >
        {title}
      </h3>

      <div
        className="
        rounded-3xl
        bg-white
        border
        border-black/10
        p-4
        relative
        "
      >

        {/* Header */}

        <div className="flex items-start justify-between mb-5">

          <div>

            <div className="text-sm text-black/50">

              تارگت کل

            </div>

            <div
              className="
              mt-1
              text-3xl
              font-black
              text-primary
              "
            >
              {stock.targetPrice}
            </div>

          </div>

          <div className="relative">

            <button
              onClick={() =>
                setOpenMenu((prev) => !prev)
              }
            >
              {openMenu ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

            {openMenu && (

              <div
                className="
                absolute
                left-0
                top-9
                w-40
                overflow-hidden
                rounded-2xl
                border
                bg-white
                shadow-xl
                z-20
                "
              >

                {stocks.map((item, index) => (

                  <button
                    key={item.id}
                    onClick={() => {

                      setSelected(index);

                      setOpenMenu(false);

                    }}
                    className="
                    w-full
                    px-4
                    py-3
                    text-right
                    text-black/70
                    hover:bg-primary/10
                    transition
                    "
                  >
                    {item.name}
                  </button>

                ))}

              </div>

            )}

          </div>

        </div>

        <ResponsiveContainer
          width="100%"
          height={170}
        >

          <LineChart
            data={stock.history}
            margin={{
              top: 5,
              right: 25,
              left: -4,
              bottom: 0,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.2}
            />

            <XAxis
              dataKey="step"
              tick={{ fontSize: 11 }}
            />

            <YAxis
              width={28}
              unit="%"
              tick={{ fontSize: 11 }}
            />

            <Tooltip
              formatter={(value) => [
                `${value}%`,
                'رشد',
              ]}
            />

            <Line
              type="monotone"
              dataKey="growth"
              stroke={stock.color}
              strokeWidth={3}
              dot={{
                r: 6,
                fill: stock.color,
              }}
              activeDot={{
                r: 8,
              }}
            >

              <LabelList
                dataKey="buyPercent"
                position="bottom"
                offset={12}
                formatter={(value) => `${value}% خرید`}
                style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fill: '#333',
                }}
                />

            </Line>

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}