'use client';

import { useEffect, useState } from 'react';
import FinancialForm from './FinancialForm';

export interface FinancialField {
  id: number;
  component: 'number' | 'text' | 'radio';
  name: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  required: boolean;
  options?: string[];
}

export default function FinancialInfoPage() {
  const [fields, setFields] = useState<FinancialField[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/risk-test')
      .then((res) => res.json())
      .then((data) => {
        setFields(data.financialInfo);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        در حال دریافت اطلاعات...
      </div>
    );
  }

  return <FinancialForm fields={fields} />;
}