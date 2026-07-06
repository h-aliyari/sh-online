interface Props {
  step: number;
  total: number;
}

export default function ProgressBar({
  step,
  total,
}: Props) {
  const percent = (step / total) * 100;

  return (
    <div>

      <div className="flex justify-between text-sm mb-2">

        <span>
          مرحله {step}
        </span>

        <span>
          {total} / {step}
        </span>

      </div>

      <div className="h-2 rounded-full bg-white/40 overflow-hidden">

        <div
          className="h-full bg-primary transition-all duration-500"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>
  );
}