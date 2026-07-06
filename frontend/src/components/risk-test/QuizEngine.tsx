'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

  const [selected, setSelected] =
    useState<number | null>(null);

  const [score, setScore] = useState(0);

  const question = questions[current];

  const selectOption = (
    id: number,
    optionScore: number
  ) => {

    if (selected !== null) return;

    setSelected(id);

    const totalScore = score + optionScore;

    setScore(totalScore);

    setTimeout(() => {

      if (current + 1 < questions.length) {

        setCurrent((prev) => prev + 1);

        setSelected(null);

      } else {

        sessionStorage.setItem(
          'fearGreedScore',
          totalScore.toString()
        );

        router.push(
          '/risk-test/financial-info'
        );

      }

    }, 500);

  };

  return (

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
          selectedId={selected}
          onSelect={selectOption}
        />

      </div>

    </div>

  );

}