'use client';

import { motion } from 'framer-motion';

interface Option {
  id: number;
  text: string;
  score: number;
}

interface Props {
  question: string;
  options: Option[];

  selectedId: number | null;

  onSelect: (
    id: number,
    score: number
  ) => void;
}

import OptionCard from './OptionCard';

export default function QuestionCard({
  question,
  options,
  selectedId,
  onSelect,
}: Props) {
  return (
    <motion.div
      key={question}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: .35,
      }}
      className="
      rounded-4xl
      p-6
      shadow-md
      "
    >
      <h2
        className="
        text-xl
        font-bold
        leading-9
        mb-8
        "
      >
        {question}
      </h2>

      <div className="space-y-4">

        {options.map((option) => (

          <OptionCard
            key={option.id}
            text={option.text}
            selected={selectedId === option.id}
            onClick={() =>
              onSelect(
                option.id,
                option.score
              )
            }
          />

        ))}

      </div>

    </motion.div>
  );
}