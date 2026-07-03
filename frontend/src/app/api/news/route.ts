// frontend\src\app\api\news\route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const targetUrl = "https://www.mehrnews.com/rss/tp/537";
    
    // سرور Next.js درخواست را مستقیماً به مهرنیوز می‌زند
    const response = await fetch(targetUrl, {
      next: { revalidate: 3600 } // کش کردن اخبار برای ۱ ساعت جهت سرعت بیشتر
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch news' }, { status: response.status });
    }

    const xmlText = await response.text();

    // پاسخ را به صورت خام برمی‌گردانیم تا در فرانت پارس شود
    return new NextResponse(xmlText, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  } catch (error) {
    console.error('RSS Fetch Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
