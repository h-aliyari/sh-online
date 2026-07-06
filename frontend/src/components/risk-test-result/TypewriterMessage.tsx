'use client';

import { useEffect, useState } from 'react';

interface Props {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export default function TypewriterMessage({
  text,
  speed = 18,
  onComplete,
}: Props) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);

        onComplete?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return (
    <div
      className="
      bg-white
      rounded-4xl
      shadow-md
      p-6
      leading-9
      text-secondary
      whitespace-pre-line
      "
    >
      <div className="flex gap-4">

        <div
          className="
          w-12
          h-12
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          text-xl
          shrink-0
          "
        >
          🤖
        </div>

        <div className="flex-1">

          <div className="font-bold mb-4">
            مشاور هوشمند سرمایه‌گذاری
          </div>

          <div>

            {displayed}

            <span className="animate-pulse">
              |
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}