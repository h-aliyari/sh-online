'use client';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface Props {
  history: number[];
}

export default function StockChart({ history }: Props) {

  const data = history.map((value, index) => ({
    index,
    value,
  }));

  const positive = history.at(-1)! >= history[0];

  return (
    <ResponsiveContainer width="100%" height={85}>
      <AreaChart data={data}>

        <defs>

          <linearGradient
            id={positive ? 'greenGradient' : 'redGradient'}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor={positive ? '#10b981' : '#ef4444'}
              stopOpacity={0.45}
            />

            <stop
              offset="95%"
              stopColor={positive ? '#10b981' : '#ef4444'}
              stopOpacity={0}
            />

          </linearGradient>

        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke={positive ? '#10b981' : '#ef4444'}
          strokeWidth={3}
          fill={`url(#${positive ? 'greenGradient' : 'redGradient'})`}
        />

      </AreaChart>
    </ResponsiveContainer>
  );
}