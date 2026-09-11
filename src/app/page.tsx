import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
    </main>
  );
}