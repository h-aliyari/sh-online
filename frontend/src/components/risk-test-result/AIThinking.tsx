'use client';

import { useEffect, useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface Props {
  onFinish: () => void;
}

const steps = [
  'دریافت پاسخ‌های آزمون...',
  'تحلیل شخصیت سرمایه‌گذاری...',
  'بررسی اطلاعات مالی...',
  'ارسال اطلاعات به Agent هوش مصنوعی...',
  'مقایسه پاسخ مدل‌های هوش مصنوعی...',
  'تحلیل وضعیت بازار...',
  'تولید سبد پیشنهادی...',
];

export default function AIThinking({
  onFinish,
}: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= steps.length) {
      setTimeout(onFinish, 600);
      return;
    }

    const timer = setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [current, onFinish]);

  return (
    <div
      className="
      rounded-4xl
      bg-white
      p-6
      shadow-lg
      "
    >
      <div className="text-center mb-8">

        <div className="text-6xl mb-4">
          🤖
        </div>

        <h2 className="text-2xl font-black">
          هوش مصنوعی در حال تحلیل...
        </h2>

        <p className="mt-2 text-gray-500">
          لطفاً چند لحظه منتظر بمانید
        </p>

      </div>

      <div className="space-y-4">

        {steps.map((step, index) => (

          <div
            key={step}
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            p-4
            bg-gray-50
            "
          >

            {index < current ? (

              <CheckCircle2
                className="text-green-600"
                size={22}
              />

            ) : index === current ? (

              <Loader2
                className="animate-spin text-primary"
                size={22}
              />

            ) : (

              <div
                className="
                w-5
                h-5
                rounded-full
                border-2
                border-gray-300
                "
              />

            )}

            <span>{step}</span>

          </div>

        ))}

      </div>
    </div>
  );
}