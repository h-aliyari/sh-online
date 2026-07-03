'use client';
import { useState, useEffect } from 'react';

export default function PortfolioTable({ onDataChange }: any) {
  const [records, setRecords] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // جلوگیری از overwrite شدن localStorage
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [form, setForm] = useState({
    symbol: '',
    type: 'buy',
    count: '',
    price: '',
    value: '',
    date: '',
    desc: '',
  });

  /* ------------------------ 1) بارگذاری دیتا از localStorage ------------------------ */
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-records');

    if (saved) {
      const parsed = JSON.parse(saved);
      setRecords(parsed);
      onDataChange && onDataChange(parsed);
    }

    setIsLoaded(true); // بعد از لود داده‌ها
  }, []);

  /* -------------------------- 2) ذخیره ONLY بعد از لود -------------------------- */
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('portfolio-records', JSON.stringify(records));
  }, [records, isLoaded]);

  const openForm = (record?: any, index?: number) => {
    setEditIndex(index ?? null);

    if (record) setForm(record);
    else
      setForm({
        symbol: '',
        type: 'buy',
        count: '',
        price: '',
        value: '',
        date: '',
        desc: '',
      });

    setShowForm(true);
  };

  const validateForm = () => {
    if (!form.symbol || !form.count || !form.price || !form.date) {
      alert('لطفاً فیلدهای ضروری (نماد، تعداد، قیمت، تاریخ) را پر کنید.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const record = {
      ...form,
      count: Number(form.count),
      price: Number(form.price),
      totalPrice: Number(form.count) * Number(form.price),
    };

    const updated = [...records];

    if (editIndex !== null) updated[editIndex] = record;
    else updated.push(record);

    setRecords(updated);
    onDataChange && onDataChange(updated);

    setShowForm(false);
    setEditIndex(null);
  };

  const deleteRecord = (i: number) => {
    if (!confirm('حذف شود؟')) return;

    const updated = records.filter((_, index) => index !== i);

    setRecords(updated);
    onDataChange && onDataChange(updated);
  };

  return (
    <div className="relative w-full">

      {/* دکمه افزودن */}
      <div className="w-full flex justify-start mb-4">
        <button
          className="bg-primary text-white px-5 py-2 rounded shadow hover:opacity-90"
          onClick={() => openForm()}
        >
          + افزودن تراکنش
        </button>
      </div>

      {/* جدول با اسکرول افقی مستقل */}
      <div className="w-full overflow-x-auto border rounded">
        <table className="min-w-175 w-full border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-right">
              <th className="p-2 border">نماد</th>
              <th className="p-2 border">نوع</th>
              <th className="p-2 border">تعداد</th>
              <th className="p-2 border">قیمت</th>
              <th className="p-2 border">قیمت کل</th>
              <th className="p-2 border">ارزش</th>
              <th className="p-2 border">تاریخ</th>
              <th className="p-2 border">شرح</th>
              <th className="p-2 border">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {records.length ? (
              records.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-2 border">{r.symbol}</td>
                  <td className="p-2 border">{r.type === 'buy' ? 'خرید' : 'فروش'}</td>
                  <td className="p-2 border">{r.count}</td>
                  <td className="p-2 border">{r.price.toLocaleString()}</td>
                  <td className="p-2 border">{r.totalPrice.toLocaleString()}</td>
                  <td className="p-2 border">{r.value}</td>
                  <td className="p-2 border">{r.date}</td>
                  <td className="p-2 border">{r.desc}</td>
                  <td className="p-2 border text-center">
                    <button className="text-blue-500 hover:underline mx-1" onClick={() => openForm(r, i)}>ویرایش</button>
                    <button className="text-red-500 hover:underline mx-1" onClick={() => deleteRecord(i)}>حذف</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center text-gray-500 p-4" colSpan={9}>
                  تراکنشی ثبت نشده.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* مُدال با پس‌زمینه مات */}
      {showForm && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/20 flex items-center justify-center z-50">

          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-lg p-6 w-100 shadow-xl relative">

            {/* دکمه ضربدر */}
            <button
              className="absolute top-3 left-3 text-gray-700 hover:text-red-500"
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>

            <h3 className="text-xl font-bold mb-4 text-primary text-center">
              {editIndex !== null ? 'ویرایش تراکنش' : 'افزودن تراکنش'}
            </h3>

            {/* فرم */}
            <div className="flex flex-col gap-3">

              <input className="input" placeholder="نماد *" value={form.symbol}
                onChange={e => setForm({ ...form, symbol: e.target.value })}
              />

              <select className="input" value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}>
                <option value="buy">خرید</option>
                <option value="sell">فروش</option>
              </select>

              <input className="input" type="number" placeholder="تعداد *"
                value={form.count} onChange={e => setForm({ ...form, count: e.target.value })}
              />

              <input className="input" type="number" placeholder="قیمت واحد *"
                value={form.price} onChange={e => setForm({ ...form, price: e.target.value })}
              />

              <input className="input" placeholder="ارزش (اختیاری)"
                value={form.value} onChange={e => setForm({ ...form, value: e.target.value })}
              />

              <input className="input" type="date" placeholder="تاریخ *"
                value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
              />

              <input className="input" placeholder="شرح"
                value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })}
              />

            </div>

            {/* دکمه‌ها */}
            <div className="flex justify-end gap-3 mt-5">
              {/* <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowForm(false)}>انصراف</button> */}
              <button className="px-4 py-2 bg-primary text-white rounded" onClick={handleSubmit}>ثبت</button>
            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        .input {
          border: 1px solid #ddd;
          padding: 6px 10px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
