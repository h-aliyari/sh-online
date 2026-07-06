'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface IntroData {
  intro: {
    title: string;
    description: string;
    duration: string;
    steps: number;
  };
}

export default function RiskTestPage() {

  const [data, setData] =
    useState<IntroData | null>(null);

  useEffect(() => {
    fetch('/api/risk-test')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) {

    return (
      <div className="py-20 text-center">
        در حال بارگذاری...
      </div>
    );

  }

  return (

    <div className="px-5 py-6">

      <div
        className="
        rounded-4xl
        p-7
        bg-linear-to-br
        from-white
        via-[#ffe8ef]
        to-primary
        shadow-lg
        "
      >

        <div className="text-5xl text-center mb-6">
          📊
        </div>

        <h1 className="text-3xl font-bold text-secondary text-center">
          {data.intro.title}
        </h1>

        <p className="mt-5 leading-8 text-secondary/80 text-center">

          {data.intro.description}

        </p>

        <div className="mt-8 space-y-4">

  {/* مدت زمان */}
  <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">

    <span className="font-semibold">
      ⏱ مدت زمان
    </span>

    <span className="font-bold text-primary">
      {data.intro.duration}
    </span>

  </div>

  {/* مراحل */}
  <div className="bg-white rounded-2xl p-5 shadow-sm">

    <div className="font-bold text-lg mb-4">
      📝 مراحل آزمون
    </div>

    <div className="space-y-5">

      <div className="flex gap-4">

        <div
          className="
          w-9
          h-9
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          font-bold
          "
        >
          ۱
        </div>

        <div>

          <div className="font-semibold">
            سنجش ترس و طمع
          </div>

          <div className="text-sm text-gray-500 mt-1">
            بررسی رفتار شما در شرایط مختلف بازار سرمایه
          </div>

        </div>

      </div>

      <div className="flex gap-4">

        <div
          className="
          w-9
          h-9
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          font-bold
          "
        >
          ۲
        </div>

        <div>

          <div className="font-semibold">
            اطلاعات مالی
          </div>

          <div className="text-sm text-gray-500 mt-1">
            ثبت اطلاعات درآمد، سرمایه و اهداف سرمایه‌گذاری
          </div>

        </div>

      </div>

    </div>

  </div>

</div>

        <Link
          href="/risk-test/fear-greed"
          className="
          mt-8
          flex
          justify-center
          items-center
          h-14
          rounded-2xl
          bg-primary
          text-white
          font-bold
          text-lg
          shadow-lg
          "
        >

          شروع آزمون

        </Link>

      </div>

    </div>

  );

}