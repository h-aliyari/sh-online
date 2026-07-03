// frontend\src\app\page.tsx
import Portfolio from '@/components/home/Portfolio';
import HotOpportunities from '@/components/home/HotOpportunities';
import LatestNews from '@/components/home/LatestNews';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-32">
      <Portfolio />
      <HotOpportunities />
      <LatestNews />
    </div>
  );
}