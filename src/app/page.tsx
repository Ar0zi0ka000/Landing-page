import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}