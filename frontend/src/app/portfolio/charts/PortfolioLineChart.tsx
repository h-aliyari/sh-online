// // frontend/src/app/portfolio/charts/PortfolioLineChart.tsx
// 'use client';
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// interface PortfolioLineChartProps {
//   data: any[];
// }

// // تابع کمکی برای پردازش داده‌ها برای نمودار خطی
// const processLineChartData = (data: any[]) => {
//   if (!data || data.length === 0) return [];

//   // این تابع باید داده‌ها را به فرمتی تبدیل کند که نمایانگر ارزش کل پورتفو در طول زمان باشد
//   // یا ارزش یک دارایی خاص در طول زمان.
//   // فرض می‌کنیم هر آیتم داده دارای 'date' و 'totalValue' (یا 'portfolioValue') است.
//   // اگر ساختار داده متفاوت است، این بخش نیاز به تنظیم دارد
//   return data.map(item => ({
//     name: item.date || item.timestamp || new Date(item.timestamp).toLocaleDateString(), // تاریخ یا شناسه زمانی
//     portfolioValue: item.totalValue || item.portfolioValue || 0, // ارزش کل پورتفو در آن زمان
//     // اگر می‌خواهید ارزش یک نماد خاص را نشان دهید، آن را اینجا اضافه کنید
//     // symbolValue: item.symbolValue
//   })).sort((a, b) => new Date(a.name).getTime() - new Date(b.name).getTime()); // مرتب‌سازی بر اساس تاریخ
// };


// export default function PortfolioLineChart({ data }: PortfolioLineChartProps) {
//   const chartData = processLineChartData(data);

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h3 className="text-lg font-semibold text-primary mb-3">روند ارزش کل پورتفو</h3>
//       {chartData.length > 0 ? (
//         <LineChart
//           width={700}
//           height={400}
//           data={chartData}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Line type="monotone" dataKey="portfolioValue" stroke="#8884d8" activeDot={{ r: 8 }} />
//           {/* اگر نمودار ارزش یک نماد خاص را هم می‌خواهید، یک Line دیگر اضافه کنید: */}
//           {/* <Line type="monotone" dataKey="symbolValue" stroke="#82ca9d" /> */}
//         </LineChart>
//       ) : (
//         <div className="text-center py-10">داده‌ای برای نمایش نمودار وجود ندارد.</div>
//       )}
//     </div>
//   );
// }
