import { NextResponse } from 'next/server';

export async function GET() {
  // داده‌های تستی (Mock Data) برای تست ظاهر صفحه
  const mockArticles = [
    {
      id: 1,
      title: "آینده بازار ارزهای دیجیتال در سال ۲۰۲۶",
      content: "در این مقاله به بررسی روند تغییرات بازار کریپتوکارنسی و تاثیر تکنولوژی‌های جدید بر قیمت‌ها می‌پردازیم...",
      image_url: "https://picsum.photos/seed/crypto/800/400",
      pub_date: "1405/04/01"
    },
    {
      id: 2,
      title: "چگونه مدیریت مالی هوشمندانه را شروع کنیم؟",
      content: "مدیریت منابع مالی یکی از مهم‌ترین گام‌ها برای رسیدن به استقلال مالی است. در اینجا ۵ استراتژی اصلی را بررسی می‌کنیم...",
      image_url: "https://picsum.photos/seed/finance/800/400",
      pub_date: "1405/04/05"
    },
    {
      id: 3,
      title: "تاثیر هوش مصنوعی بر دنیای اقتصاد",
      content: "هوش مصنوعی چگونه در حال تغییر دادن الگوهای مصرف و تولید در بازارهای جهانی است؟ بررسی عمیق نقش الگوریتم‌ها...",
      image_url: "https://picsum.photos/seed/ai/800/400",
      pub_date: "1405/04/10"
    },
    {
      id: 4,
      title: "امنیت در تراکنش‌های بلاک‌چین",
      content: "چگونه می‌توانیم از دارایی‌های دیجیتال خود در برابر حملات سایبری محافظت کنیم؟ نکات حیاتی برای کاربران...",
      image_url: "https://picsum.photos/seed/security/800/400",
      pub_date: "1405/04/12"
    }
  ];

  // شبیه‌سازی تأخیر شبکه (اختیاری - برای اینکه حالت Loading را بهتر ببینی)
  // اگر می‌خواهی بلافاصله لود شود، این بخش را حذف کن
  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json(mockArticles);
}
