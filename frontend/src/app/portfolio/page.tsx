'use client';
// import PortfolioPieChart from './charts/PortfolioPieChart';
// import PortfolioCandlestickChart from './charts/PortfolioCandlestickChart';
// import PortfolioLineChart from './charts/PortfolioLineChart';
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

      {/* جدول داده‌ها را مدیریت می‌کند و هنگام تغییر، آن را به والد اطلاع می‌دهد */}
      <PortfolioTable onDataChange={handleDataChange} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* نمودارها داده‌ها را از props دریافت می‌کنند */}
        {/* <PortfolioPieChart data={records} />
        <PortfolioCandlestickChart data={records} />
        <PortfolioLineChart data={records} /> */}
      </div>
    </div>
  );
}
