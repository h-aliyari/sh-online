'use client';

import { useEffect, useState } from 'react';

import AIThinking from '@/components/risk-test-result/AIThinking';
import TypewriterMessage from '@/components/risk-test-result/TypewriterMessage';
import PortfolioCard from '@/components/risk-test-result/PortfolioCard';

interface PortfolioItem {
  group: string;
  percent: number;
}

interface ResultData {
  riskLevel: string;
  score: number;
  expectedReturn: string;
  aiAnalysis: string;
  portfolio: PortfolioItem[];
}

export default function ResultPage() {

  const [result, setResult] =
    useState<ResultData | null>(null);

  const [thinkingDone, setThinkingDone] =
    useState(false);

  const [typingDone, setTypingDone] =
    useState(false);

  useEffect(() => {

    fetch('/api/risk-test')
      .then((res) => res.json())
      .then((data) => {

        setResult(data.result);

      });

  }, []);

  if (!result) {

    return (
      <div className="py-20 text-center">

        در حال دریافت اطلاعات...

      </div>
    );

  }

  return (

    <div className="px-5 py-6">

      <div
        className="
        rounded-4xl
        bg-linear-to-br
        from-white
        via-[#ffe8ef]
        to-primary
        p-6
        shadow-lg
        space-y-6
        "
      >

        {!thinkingDone && (

          <AIThinking
            onFinish={() =>
              setThinkingDone(true)
            }
          />

        )}

        {thinkingDone && (
          <>
            <PortfolioCard
              portfolio={result.portfolio}
            />

            <TypewriterMessage
              text={result.aiAnalysis}
              onComplete={() =>
                setTypingDone(true)
              }
            />
          </>
        )}

        {typingDone && (

          <button
            className="
            w-full
            h-14
            rounded-2xl
            bg-primary
            text-white
            font-bold
            mt-2
            "
          >

            مشاهده جزئیات سبد

          </button>

        )}

      </div>

    </div>

  );

}