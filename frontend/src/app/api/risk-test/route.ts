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
        component: "number",
        name: "investmentAmount",
        label: "حداقل مبلغ تمایل به سرمایه‌گذاری",
        placeholder: "مثلاً ۱۰۰,۰۰۰,۰۰۰ تومان",
        required: true,
      },
      {
        id: 2,
        component: "number",
        name: "cashSavings",
        label: "کل پس‌انداز نقدی",
        placeholder: "اختیاری",
        required: false,
        helperText:
          "صرفاً جهت ارائه پیشنهادهای سرمایه‌گذاری آتی",
      },
      {
        id: 3,
        component: "radio",
        name: "investmentPeriod",
        label: "دوره مورد تمایل سرمایه‌گذاری",
        required: true,

        options: [
          "کوتاه‌مدت (۱ تا ۳ سال)",
          "میان‌مدت (۳ تا ۶ سال)",
          "بلندمدت (بیش از ۶ سال)",
        ],
      },
      {
        id: 4,
        component: "radio",
        name: "multiPortfolio",
        label: "تمایل به تشکیل چند سبد سرمایه‌گذاری مجزا",
        required: true,

        options: [
          "دارم",
          "ندارم",
        ],
      },
      {
        id: 5,
        component: "radio",
        name: "investmentOpportunities",
        label: "تمایل به اطلاع از به‌روزترین فرصت‌های سرمایه‌گذاری",
        required: true,

        options: [
          "دارم",
          "ندارم",
        ],
      },
      {
        id: 6,
        component: "radio",
        name: "portfolioNotification",
        label: "تمایل به اطلاع لحظه‌ای از وضعیت سبد سرمایه‌گذاری",
        required: true,

        options: [
          "دارم",
          "ندارم",
        ],
      },
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