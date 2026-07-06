'use client';

interface Item {
  group: string;
  percent: number;
}

interface Props {
  portfolio: Item[];
}

export default function PortfolioCard({
  portfolio,
}: Props) {
  return (

    <div
      className="
      bg-white
      rounded-4xl
      p-6
      shadow-md
      "
    >

      <h2
        className="
        text-xl
        font-bold
        mb-6
        "
      >
        📊 سبد پیشنهادی
      </h2>

      <div className="space-y-5">

        {portfolio.map((item) => (

          <div key={item.group}>

            <div
              className="
              flex
              justify-between
              mb-2
              "
            >

              <span>

                {item.group}

              </span>

              <span
                className="
                font-bold
                text-primary
                "
              >

                {item.percent}%

              </span>

            </div>

            <div
              className="
              h-3
              rounded-full
              bg-gray-200
              overflow-hidden
              "
            >

              <div
                className="
                h-full
                bg-primary
                rounded-full
                transition-all
                duration-700
                "
                style={{
                  width: `${item.percent}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}