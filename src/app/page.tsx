import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // <--- Importamos el Footer

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
      <Footer /> {/* <--- Lo renderizamos al final */}
    </main>
  );
}