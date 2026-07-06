'use client';

import { motion } from 'framer-motion';

import OptionCard from './OptionCard';

interface Option {
  id: number;
  text: string;
  score: number;
}

interface Props {
  question: string;
  options: Option[];

  selectedId?: number;

  onSelect: (id: number) => void;
}

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
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        rounded-[2rem]
        bg-white
        p-6
        shadow-sm
      "
    >
      <h2
        className="
          text-xl
          font-bold
          leading-9
          text-secondary
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
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}