'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FinancialField {
  id: number;
  type: 'number' | 'text' | 'select';
  name?: string;
  label: string;
  placeholder?: string;
  options?: string[];
}

export default function FinancialInfoPage() {
  const router = useRouter();

  const [fields, setFields] = useState<FinancialField[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/risk-test')
      .then((res) => res.json())
      .then((data) => {
        setFields(data.financialInfo);
        setLoading(false);
      });
  }, []);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = () => {
    sessionStorage.setItem(
      'financialInfo',
      JSON.stringify(formData)
    );

    router.push('/risk-test/result');
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        در حال دریافت اطلاعات...
      </div>
    );
  }

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

        <h1 className="text-2xl font-black text-secondary">
          اطلاعات مالی
        </h1>

        <p className="text-secondary/70 mt-2 mb-8">
          لطفاً اطلاعات زیر را تکمیل کنید.
        </p>

        <div className="space-y-5">

          {fields.map((field) => {

            const fieldName =
              field.name ?? `field_${field.id}`;

            return (

              <div
                key={field.id}
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-sm
                "
              >

                <label className="block font-semibold mb-3">
                  {field.label}
                </label>

                {(field.type === 'number' ||
                  field.type === 'text') && (

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[fieldName] ?? ''}
                    onChange={(e) =>
                      handleChange(
                        fieldName,
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-300
                      px-4
                      py-3
                      outline-none
                      focus:border-primary
                      transition
                    "
                  />

                )}

                {field.type === 'select' && (

                  <select
                    value={formData[fieldName] ?? ''}
                    onChange={(e) =>
                      handleChange(
                        fieldName,
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-300
                      px-4
                      py-3
                      outline-none
                      focus:border-primary
                    "
                  >

                    <option value="">
                      انتخاب کنید
                    </option>

                    {field.options?.map((option) => (

                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>

                    ))}

                  </select>

                )}

              </div>

            );

          })}

        </div>

        <button
          onClick={submit}
          className="
            mt-8
            w-full
            h-14
            rounded-2xl
            bg-primary
            text-white
            font-bold
            text-lg
            transition
            hover:opacity-90
          "
        >
          مشاهده نتیجه
        </button>

      </div>

    </div>
  );
}