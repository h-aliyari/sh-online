'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { FinancialField } from './page';

interface Props {
  fields: FinancialField[];
}

export default function FinancialForm({
  fields,
}: Props) {
  const router = useRouter();

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const changeValue = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValid = fields.every((field) => {
    if (!field.required) return true;
    return !!formData[field.name];
  });

  const submit = () => {
    if (!isValid) return;

    setSubmitting(true);

    sessionStorage.setItem(
      'financialInfo',
      JSON.stringify(formData)
    );

    setTimeout(() => {
      router.push('/risk-test/result');
    }, 800);
  };

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
        "
        >

        <h1 className="text-3xl font-black">
          اطلاعات مالی
        </h1>
        <p className="text-black/60 mt-2 mb-8 leading-7">
          لطفاً اطلاعات زیر را تکمیل کنید تا
          هوش مصنوعی مناسب‌ترین سبد سرمایه‌گذاری
          را برای شما پیشنهاد دهد.
        </p>

        <div className="space-y-8 mb-6">
          {fields.map((field) => (
            <div key={field.id}>
              <div className="flex gap-1 mb-2">
                <span className="font-bold">
                  {field.label}
                </span>
                {field.required && (
                  <span className="text-primary">
                    *
                  </span>
                )}
              </div>

              {field.helperText && (
                <p className="text-sm text-black/50 mb-3">
                  {field.helperText}
                </p>
              )}

              {(field.component === 'number' ||
                field.component === 'text') && (

                <input
                  type={field.component}
                  placeholder={field.placeholder}
                  value={formData[field.name] ?? ''}
                  onChange={(e) =>
                    changeValue(
                      field.name,
                      e.target.value
                    )
                  }
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  px-4
                  py-4
                  outline-none
                  focus:border-primary
                  "
                />

              )}

              {field.component === 'radio' && (
                <div className="space-y-3 mt-3">
                  {field.options?.map((option) => {
                    const active =
                      formData[field.name] === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          changeValue(
                            field.name,
                            option
                          )
                        }
                        className={`
                        w-full
                        rounded-2xl
                        border
                        px-5
                        py-4
                        flex
                        justify-between
                        items-center
                        transition-all
                        ${
                          active
                            ? 'bg-primary border-primary text-white'
                            : 'bg-white border-gray-300 text-black/70'
                        }
                        `}
                      >
                        <span>
                          {option}
                        </span>
                        <div
                          className={`
                          w-5
                          h-5
                          rounded-full
                          border-2
                          flex
                          items-center
                          justify-center
                          ${
                            active
                              ? 'border-white'
                              : 'border-gray-400'
                          }
                          `}
                        >
                          {active && '✓'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={submit}
          disabled={!isValid || submitting}
          className="
          w-full
          h-14
          rounded-2xl
          bg-primary
          text-white
          font-bold
          mt-10
          disabled:opacity-60
          "
        >
          {submitting
            ? 'در حال ارسال اطلاعات...'
            : 'تحلیل توسط هوش مصنوعی'}
        </button>
      </div>
    </div>
  );
}