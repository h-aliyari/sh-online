import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    intro: {
      title: "تست ریسک‌پذیری",
      description:
        "این آزمون با بررسی شخصیت سرمایه‌گذاری و اطلاعات مالی شما، مناسب‌ترین سبد سرمایه‌گذاری را پیشنهاد می‌دهد.",
      duration: "حدود ... دقیقه",
      steps: 2,
    },

    fearGreed: [
      {
        id: 1,
        question: "اگر ارزش سرمایه شما طی یک هفته ۲۰٪ کاهش پیدا کند، چه کاری انجام می‌دهید؟",
        options: [
          {
            id: 1,
            text: "همه دارایی را می‌فروشم",
            score: 1,
          },
          {
            id: 2,
            text: "بخشی را می‌فروشم",
            score: 2,
          },
          {
            id: 3,
            text: "صبر می‌کنم",
            score: 3,
          },
          {
            id: 4,
            text: "دوباره خرید می‌کنم",
            score: 4,
          },
        ],
      },
      {
        id: 2,
        question: "سوال دوم",
        options: [
          {
            id: 1,
            text: "همه دارایی را می‌فروشم",
            score: 1,
          },
          {
            id: 2,
            text: "بخشی را می‌فروشم",
            score: 2,
          },
          {
            id: 3,
            text: "صبر می‌کنم",
            score: 3,
          },
          {
            id: 4,
            text: "دوباره خرید می‌کنم",
            score: 4,
          },
        ],
      },
    ],

    financialInfo: [
      {
        id: 1,
        type: "number",
        name: "income",
        label: "درآمد ماهانه",
        placeholder: "مثلاً ۵۰,۰۰۰,۰۰۰"
      },
      {
        id: 2,
        type: "number",
        name: "assets",
        label: "ارزش تقریبی دارایی",
        placeholder: "مثلاً ۱ میلیارد"
      },
      {
        id: 3,
        type: "select",
        name: "goal",
        label: "هدف سرمایه‌گذاری",
        options: [
          "حفظ سرمایه",
          "رشد سرمایه",
          "درآمد ماهانه"
        ]
      }
    ],
    result: {
      riskLevel: "ریسک‌پذیری متوسط",
      score: 78,

      portfolio: [
        {
          group: "سهام بانکی",
          percent: 35,
        },
        {
          group: "پتروشیمی",
          percent: 25,
        },
        {
          group: "فلزات اساسی",
          percent: 20,
        },
        {
          group: "درآمد ثابت",
          percent: 20,
        },
      ],

      expectedReturn: "۳۲٪",

      aiAnalysis:
        "بر اساس تحلیل رفتار سرمایه‌گذاری و اطلاعات مالی، شخصیت شما ریسک‌پذیری متوسط رو به بالا دارد. پیشنهاد می‌شود بخش عمده سرمایه در صنایع بانکی، پتروشیمی و فلزات اساسی سرمایه‌گذاری شود و بخشی نیز در صندوق‌های درآمد ثابت برای کنترل ریسک نگهداری گردد."
    }
  });
}