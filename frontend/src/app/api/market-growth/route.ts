// frontend\src\app\api\market-growth\route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      symbol: 'فملی',
      company: 'ملی صنایع مس',
      growth: 4.82,
      history: [12, 15, 18, 15, 21, 24, 29]

    },
    {
      id: 2,
      symbol: 'خودرو',
      company: 'ایران خودرو',
      growth: 3.91,
      history: [19, 12, 13, 16, 18, 21, 17]
    },
    {
      id: 3,
      symbol: 'شستا',
      company: 'تامین اجتماعی',
      growth: 2.74,
      history: [6, 7, 10, 12, 13, 15, 18]
    },
    {
      id: 4,
      symbol: 'فارس',
      company: 'پتروشیمی خلیج فارس',
      growth: 2.35,
      history: [9, 12, 13, 14, 16, 19, 27]
    },
  ]);
}