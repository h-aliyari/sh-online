// src/components/home/LatestNews.tsx
"use client"; // چون از useEffect استفاده می‌کنیم
import { useEffect, useState } from 'react';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/news/latest') // آدرس لوکال بک‌اند جنگو
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') setNews(data.data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  if (loading) return <div className="p-4 text-center text-xs">در حال دریافت اخبار...</div>;

  return (
    <section className="space-y-4 px-2">
      <h2 className="font-bold text-secondary border-r-4 border-primary pr-2 leading-none">آخرین اخبار</h2>
      <div className="flex flex-col gap-3">
        {news.map((item: any, index) => (
          <a key={index} href={item.link} target="_blank" className="bg-white p-3 rounded-2xl border border-gray-50 shadow-sm flex items-center gap-4 active:scale-95 transition-transform">
            <img src={item.image || "/api/placeholder/100/100"} alt="" className="w-16 h-16 object-cover rounded-xl shrink-0 bg-gray-100" />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[11px] text-secondary leading-snug line-clamp-2">{item.title}</h3>
              <span className="text-[9px] text-primary font-bold">{item.pubDate}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;