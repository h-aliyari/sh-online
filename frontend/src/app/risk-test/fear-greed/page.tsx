'use client';

import { useEffect, useState } from 'react';

import QuizEngine from '@/components/risk-test/QuizEngine';

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

export default function FearGreedPage() {

  const [questions, setQuestions] =
    useState<Question[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch('/api/risk-test')
      .then(res => res.json())
      .then(data => {

        setQuestions(data.fearGreed);

        setLoading(false);

      });

  }, []);

  if (loading) {

    return (
      <div className="py-20 text-center">

        در حال دریافت سوالات...

      </div>
    );

  }

  return (

    <div className="px-5 py-6">

      <QuizEngine
        questions={questions}
      />

    </div>

  );

}