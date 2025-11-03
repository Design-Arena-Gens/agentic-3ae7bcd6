import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BibleBooks from '@/components/BibleBooks';
import DailyVerse from '@/components/DailyVerse';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <DailyVerse />
      <Features />
      <BibleBooks />
      <Footer />
    </main>
  );
}
