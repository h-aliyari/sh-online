'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

interface Option {
  id: number;
  text: string;
  score: number;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface Props {
  questions: Question[];
}

export default function QuizEngine({
  questions,
}: Props) {
  const router = useRouter();

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState<
    Record<number, number>
  >({});

  const question = questions[current];

  const selectedId = answers[question.id];

  const selectOption = (id: number) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: id,
    }));

    // اگر سؤال آخر نیست
    if (current < questions.length - 1) {
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
      }, 300);
    }
  };

  const nextQuestion = () => {
    if (!selectedId) return;

    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      return;
    }

    let totalScore = 0;

    questions.forEach((q) => {
      const answerId = answers[q.id];

      const option = q.options.find(
        (o) => o.id === answerId
      );

      totalScore += option?.score ?? 0;
    });

    sessionStorage.setItem(
      'fearGreedScore',
      totalScore.toString()
    );

    sessionStorage.setItem(
      'fearGreedAnswers',
      JSON.stringify(answers)
    );

    router.push('/risk-test/financial-info');
  };

  const previousQuestion = () => {
    if (current === 0) return;

    setCurrent((prev) => prev - 1);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between px-2">

        <button
          onClick={previousQuestion}
          disabled={current === 0}
          className="
          flex
          items-center
          gap-1
          text-blue-500
          font-semibold
          disabled:opacity-30
        "
        >
          <ChevronRight size={30} />

          <span>
            قبلی
          </span>

        </button>

        <button
          onClick={nextQuestion}
          disabled={
            !selectedId ||
            current === questions.length - 1
          }
          className="
          flex
          items-center
          gap-1
          text-green-500
          font-semibold
          disabled:opacity-30
        "
        >
          <span>
            بعدی
          </span>

          <ChevronLeft size={30} />

        </button>

      </div>

      <div
        className="
      rounded-4xl
      bg-linear-to-br
      from-white
      via-[#ffe8ef]
      to-primary
      p-6
      shadow-lg
      "
      >

        <ProgressBar
          step={current + 1}
          total={questions.length}
        />

        <div className="mt-6">

          <QuestionCard
            question={question.question}
            options={question.options}
            selectedId={selectedId}
            onSelect={selectOption}
          />

        </div>
        {current === questions.length - 1 && (
          <button
            onClick={nextQuestion}
            disabled={!selectedId}
            className="
              w-full
              mt-8
              h-14
              rounded-2xl
              bg-primary
              text-white
              font-bold
              transition
              disabled:opacity-40
            "
          >
            تایید و رفتن به مرحله دوم
          </button>
        )}

      </div>
    </div>
  );
}