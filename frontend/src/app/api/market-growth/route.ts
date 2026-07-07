// frontend\src\app\api\market-growth\route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    charts: [
      {
        id: 1,
        title: 'سهم‌های خریداری شده',

        stocks: [
          {
            id: 1,
            name: 'سهم ۱',
            color: '#e22d5b',

            history: [
              { date: 'فروردین', growth: 30 },
              { date: 'اردیبهشت', growth: 8 },
              { date: 'خرداد', growth: 19 },
              { date: 'تیر', growth: 28 },
              { date: 'مرداد', growth: 40 },
            ],
          },

          {
            id: 2,
            name: 'سهم ۲',
            color: '#ff7300',

            history: [
              { date: 'اردیبهشت', growth: 20 },
              { date: 'خرداد', growth: 28 },
              { date: 'تیر', growth: 35 },
              { date: 'مرداد', growth: 45 },
            ],
          },

          {
            id: 3,
            name: 'سهم ۳',
            color: '#16a34a',

            history: [
              { date: 'خرداد', growth: 14 },
              { date: 'تیر', growth: 6 },
              { date: 'مرداد', growth: 5 },
            ],
          },
        ],
      },

      {
        id: 2,
        title: "خرید پله‌ای",

        stocks: [
          {
            id: 1,
            name: "سهم ۱",
            color: "#e22d5b",

            targetPrice: "245,000 تومان",

            history: [
              {
                step: "پله اول",
                growth: 10,
                buyPercent: 50,
              },
              {
                step: "پله دوم",
                growth: 12,
                buyPercent: 25,
              },
              {
                step: "پله سوم",
                growth: 35,
                buyPercent: 25,
              },
              {
                step: "پله چهارم",
                growth: 28,
                buyPercent: 100,
              },
            ],
          },

          {
            id: 2,
            name: "سهم ۲",
            color: "#ff7300",

            targetPrice: "198,000 تومان",

            history: [
              { step: "پله اول", growth: 4, buyPercent: 30 },
              { step: "پله دوم", growth: 10, buyPercent: 30 },
              { step: "پله سوم", growth: 45, buyPercent: 40 },
              // { step: "تارگت", growth: 40, buyPercent: 100 },
            ],
          },

          {
            id: 3,
            name: "سهم ۳",
            color: "#16a34a",

            targetPrice: "312,000 تومان",

            history: [
              { step: "پله اول", growth: 20, buyPercent: 25 },
              { step: "پله دوم", growth: 8, buyPercent: 35 },
              { step: "پله سوم", growth: 20, buyPercent: 40 },
              // { step: "تارگت", growth: 37, buyPercent: 100 },
            ],
          },
        ],
      }
    ],
  });
}