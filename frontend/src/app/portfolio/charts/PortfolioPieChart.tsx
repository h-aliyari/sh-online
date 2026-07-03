// // frontend/src/app/portfolio/charts/PortfolioPieChart.tsx
// 'use client';
// import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

// interface PortfolioPieChartProps {
//   data: any[];
// }

// // تابع کمکی برای پردازش داده‌ها برای نمودار دایره‌ای
// const processPieChartData = (data: any[]) => {
//   if (!data || data.length === 0) return [];

//   // فرض می‌کنیم هر رکورد شامل 'symbol' و 'value' است
//   // اگر ساختار داده متفاوت است، این بخش نیاز به تنظیم دارد
//   const aggregatedData: { [key: string]: number } = {};

//   data.forEach(item => {
//     // فرض می‌کنیم value نمایانگر ارزش دارایی است
//     // اگر نیاز به محاسبه ارزش کل بر اساس تعداد و قیمت واحد هست، منطق اینجا تغییر می‌کند
//     if (item.symbol && typeof item.value === 'number') {
//       aggregatedData[item.symbol] = (aggregatedData[item.symbol] || 0) + item.value;
//     }
//   });

//   return Object.keys(aggregatedData).map(symbol => ({
//     name: symbol,
//     value: aggregatedData[symbol],
//   }));
// };

// // رنگ‌های تصادفی برای سلول‌ها
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19AF'];

// export default function PortfolioPieChart({ data }: PortfolioPieChartProps) {
//   const chartData = processPieChartData(data);

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h3 className="text-lg font-semibold text-primary mb-3">توزیع ارزش دارایی‌ها</h3>
//       {chartData.length > 0 ? (
//         <PieChart width={400} height={300}>
//           <Pie
//             data={chartData}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             outerRadius={120}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {chartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       ) : (
//         <div className="text-center py-10">داده‌ای برای نمایش نمودار وجود ندارد.</div>
//       )}
//     </div>
//   );
// }
