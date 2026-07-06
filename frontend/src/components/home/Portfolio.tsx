// src/components/home/Portfolio.tsx
import Link from 'next/link';

const Portfolio = () => {
  return (
    <Link href="/portfolio">
      <section className=" h-50 bg-primary p-6 rounded-[2.5rem] text-white shadow-xl shadow-primary/30 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-3xl font-black my-2 italic tracking-tighter uppercase text-center">Portfolio</div>
      </div>
    </section>
    </Link>
  );
};

export default Portfolio;