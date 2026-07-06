'use client';
import PortfolioTable from "./PortfolioTable";
import { useState } from 'react';

export default function PortfolioPage() {
  const [records, setRecords] = useState<any[]>([]);

  // این تابع توسط PortfolioTable فراخوانی می‌شود تا داده‌های جدید را به این صفحه بدهد
  const handleDataChange = (newRecords: any[]) => {
    setRecords(newRecords);
  };

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold text-primary mb-6">پورتفوی دستی</h1>
      <br />
      <hr className="mb-8" />

      <PortfolioTable onDataChange={handleDataChange} />
    </div>
  );
}
