// // frontend/src/app/portfolio/charts/PortfolioCandlestickChart.tsx
// 'use client';
// import { CandlestickChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Candlestick } from 'recharts';

// interface PortfolioCandlestickChartProps {
//   data: any[];
// }

// // تابع کمکی برای پردازش داده‌ها برای نمودار شمعی
// const processCandlestickData = (data: any[]) => {
//   if (!data || data.length === 0) return [];

//   // فرض می‌کنیم هر آیتم داده دارای کلیدهای زیر است:
//   // date (یا یک شناسه زمانی قابل مرتب‌سازی), open, high, low, close, volume
//   // اگر ساختار داده متفاوت است، این بخش نیاز به تنظیم دارد
//   return data.map(item => ({
//     // فرض می‌کنیم 'date' یا 'timestamp' کلید تاریخ است
//     // اگر کلید دیگری دارید، آن را جایگزین کنید
//     name: item.date || item.timestamp || new Date(item.timestamp).toLocaleDateString(), // نام یا تاریخ برای محور X
//     open: item.open,
//     high: item.high,
//     low: item.low,
//     close: item.close,
//     volume: item.volume,
//   })).sort((a, b) => new Date(a.name).getTime() - new Date(b.name).getTime()); // مرتب‌سازی بر اساس تاریخ
// };

// export default function PortfolioCandlestickChart({ data }: PortfolioCandlestickChartProps) {
//   const chartData = processCandlestickData(data);

//   // یک تابع کمکی برای تعیین رنگ شمع‌ها (سبز برای رشد، قرمز برای نزول)
//   const candlestickColor = (data: any) => {
//     return data.close > data.open ? '#00C49F' : '#FF8042'; // سبز برای رشد، قرمز برای نزول
//   };

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h3 className="text-lg font-semibold text-primary mb-3">روند قیمت (OHLCV)</h3>
//       {chartData.length > 0 ? (
//         <CandlestickChart width={700} height={400} data={chartData}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Candlestick
//             dataKey="value" // این کلید باید با داده‌های شما مطابقت داشته باشد، معمولا نیازی نیست اگر open, high, low, close تعریف شده باشد
//             stroke="#8884d8"
//             fill="#8884d8" // رنگ پیش‌فرض
//             // برای تعیین رنگ بر اساس رشد یا نزول، نیاز به custom component یا تنظیمات پیچیده‌تر هست
//             // در Recharts، تعیین رنگ برای هر شمع به صورت داینامیک کمی پیچیده‌تر است و ممکن است نیاز به custom component باشد
//             // برای سادگی، رنگ پیش‌فرض استفاده شده است. اگر نیاز به رنگ‌بندی دارید، بگویید تا راهنمایی کنم.
//           />
//           {/* اگر نمودار حجم را هم می‌خواهید، می‌توانید یک نمودار میله‌ای جداگانه اضافه کنید */}
//         </CandlestickChart>
//       ) : (
//         <div className="text-center py-10">داده‌ای برای نمایش نمودار وجود ندارد.</div>
//       )}
//     </div>
//   );
// }
