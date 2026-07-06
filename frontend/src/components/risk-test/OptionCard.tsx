'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionCard({
  text,
  selected,
  onClick,
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className={`
        w-full
        rounded-3xl
        border-2
        transition-all
        duration-300
        p-5
        flex
        justify-between
        items-center
        ${
          selected
            ? 'bg-primary border-primary text-white'
            : 'bg-white border-gray-200 text-secondary'
        }
      `}
    >
      <span className="text-base font-medium text-black/70">
        {text}
      </span>

      <div>

        {selected ? (
          <CheckCircle2 size={24} />
        ) : (
          <div
            className="
            w-6
            h-6
            rounded-full
            border-2
            border-gray-300
            "
          />
        )}

      </div>

    </motion.button>
  );
}