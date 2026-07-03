// frontend/src/app/modules/magazine/page.tsx
'use client';
import { useState, useEffect } from 'react';
export default function MagazinePage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
// دریافت مقالات هنگام بارگذاری صفحه
  useEffect(() => {
    fetch('http://localhost:8000/api/articles/')
      .then(res => {
        if (!res.ok) throw new Error('خطا در دریافت داده‌ها');
        return res.json();
      })
      .then(setArticles)
      .catch(err => {
        console.error('خطا در دریافت مقالات:', err);
      })
      .finally(() => setLoading(false));
  }, []);
return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-2xl font-bold text-primary mb-6">مجله دیجیتال</h1>
      <hr />
      <br /><br />
{loading ? (
        <p className="text-gray-500">در حال بارگذاری مقالات...</p>
      ) : articles.length === 0 ? (
        <p className="text-gray-500">مقاله‌ای وجود ندارد.</p>
      ) : (
        <div className="space-y-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border p-6 rounded-lg bg-white shadow-md max-w-3xl mx-auto"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{article.content}</p>
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded mt-3 mx-auto"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}