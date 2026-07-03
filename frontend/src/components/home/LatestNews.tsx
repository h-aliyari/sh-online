"use client"; 
import { useEffect, useState } from 'react';

interface NewsItem {
  title: string;
  link: string;
  image: string;
  pubDate: string;
}

const LatestNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // حالا درخواست را به API خودمان می‌فرستیم (بدون نیاز به پروکسی خارجی)
    fetch('/api/news') 
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch from local API');
        return res.text();
      })
      .then((xmlText) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        
        const items = xmlDoc.querySelectorAll("item");
        const parsedNews: NewsItem[] = Array.from(items).map((el) => {
          return {
            title: el.querySelector("title")?.textContent || "بدون عنوان",
            link: el.querySelector("link")?.textContent || "#",
            image: el.querySelector("enclosure")?.getAttribute("url") || 
                   el.querySelector("media\\:content")?.getAttribute("url") || 
                   "/api/placeholder/100/100",
            pubDate: el.querySelector("pubDate")?.textContent || ""
          };
        });

        setNews(parsedNews);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-center text-xs">در حال دریافت اخبار...</div>;

  return (
    <section className="space-y-4 px-2">
      <h2 className="font-bold text-secondary border-r-4 border-primary pr-2 leading-none">آخرین اخبار</h2>
      <div className="flex flex-col gap-3">
        {news.length > 0 ? (
          news.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-2xl border border-gray-50 shadow-sm flex items-center gap-4 active:scale-95 transition-transform"
            >
              <img 
                src={item.image} 
                alt="" 
                className="w-16 h-16 object-cover rounded-xl shrink-0 bg-gray-100" 
                onError={(e) => { (e.target as HTMLImageElement).src = "/api/placeholder/100/100" }}
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-[11px] text-secondary leading-snug line-clamp-2">{item.title}</h3>
                <span className="text-[9px] text-primary font-bold">{item.pubDate}</span>
              </div>
            </a>
          ))
        ) : (
          <div className="text-center text-xs text-gray-400">خبری یافت نشد.</div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;
