'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselSlides = [
  {
    title: "Arquitectura Full-Stack Avanzada",
    subtitle: "Construimos cimientos tecnológicos robustos y de alto rendimiento. Desarrollamos backend y frontend con código limpio, patrones de diseño sólidos y altos estándares de seguridad, garantizando sistemas escalables que soportan el crecimiento continuo de tu negocio sin comprometer la velocidad ni la estabilidad operativa.",
    image: "/web-dev.webp",
  },
  {
    title: "Experiencia de Usuario (UI/UX) y Desarrollo Móvil",
    subtitle: "Diseñamos interfaces intuitivas, atractivas y altamente funcionales adaptadas a cualquier dispositivo. Nos enfocamos en ofrecer una experiencia de navegación fluida, centrada en el usuario final, para maximizar el engagement, retener clientes y potenciar la presencia digital de tu marca en el ecosistema mobile.",
    image: "/mobile-design.png",
  },
  {
    title: "Automatización y Gestión de Datos Inteligente",
    subtitle: "Optimizamos la eficiencia operativa de tu empresa mediante la automatización de flujos de trabajo complejos, integración de APIs avanzadas y el procesamiento inteligente de bases de datos. Transformamos información dispersa en tableros analíticos claros para facilitar la toma de decisiones estratégicas.",
    image: "/automation.jpg",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="quien-soy" className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 transition-colors">
      {/* Columna Izquierda: Texto Corporativo */}
      <div className="flex flex-col items-start gap-6 max-w-xl lg:w-1/2">
        
        <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-border-glow">
          <span className="block text-cyan-300 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full bg-gray-950">
            INGENIERÍA EN INFORMÁTICA • NEXUSOFT
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Soluciones Tecnológicas de Vanguardia con <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            NexuSoft
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-justify font-normal opacity-95">
          En <strong className="text-cyan-400">NexuSoft</strong> transformamos desafíos complejos en ecosistemas digitales escalables y seguros. Liderado por nuestro equipo de ingeniería, nos especializamos en el desarrollo web y móvil de alto rendimiento, la automatización inteligente de procesos y la gestión avanzada de bases de datos. Diseñamos arquitectura de software orientada a optimizar operaciones, blindar la ciberestructura y potenciar de forma directa el crecimiento estratégico de su empresa o proyecto individual.
        </p>

        <div className="flex items-center gap-4 pt-2">
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-border-glow">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[10px] bg-cyan-400 text-gray-950 font-bold hover:bg-cyan-300 transition-all shadow-md"
            >
              Contáctame
            </a>
          </div>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 animate-border-glow">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-sm"
            >
              Ver Proyectos
            </a>
          </div>
        </div>

      </div>

      {/* Columna Derecha: Imagen del Carrusel */}
      <div className="w-full lg:w-[55%] flex flex-col items-center gap-5">
        
        <div className="w-full p-[3px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400 animate-border-glow shadow-lg">
          <div className="relative w-full h-[360px] md:h-[460px] rounded-[14px] overflow-hidden bg-gray-950">
            <Image 
              src={carouselSlides[currentIndex].image} 
              alt={carouselSlides[currentIndex].title}
              fill
              className="object-cover transition-all duration-1000 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Textos Informativos del Slide Actual */}
        <div className="flex flex-col items-center text-center gap-1.5 transition-all duration-500">
          <h3 className="font-bold text-xl md:text-2xl">
            {carouselSlides[currentIndex].title}
          </h3>
          <p className="text-sm md:text-base max-w-xl opacity-85">
            {carouselSlides[currentIndex].subtitle}
          </p>
        </div>

      </div>
    </section>
  );
}