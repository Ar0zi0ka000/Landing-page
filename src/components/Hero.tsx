'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselSlides = [
  {
    title: "Desarrollo Web Full-Stack",
    subtitle: "Arquitecturas robustas, seguras y de alto rendimiento comercial",
    image: "/web-dev.webp",
  },
  {
    title: "Diseño y Aplicaciones Móviles",
    subtitle: "Interfaces intuitivas centradas en la experiencia de usuario",
    image: "/mobile-design.png",
  },
  {
    title: "Automatización & Bases de Datos",
    subtitle: "Pipelines ETL avanzados y optimización de flujos operativos",
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
    <section id="quien-soy" className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Columna Izquierda: Texto Corporativo y Ampliado */}
      <div className="flex flex-col items-start gap-6 max-w-2xl">
        
        {/* Insignia (Sin sombra, solo borde en movimiento) */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-border-glow">
          <span className="block text-cyan-300 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full bg-gray-950">
            INGENIERÍA EN INFORMÁTICA • NEXUSOFT
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Soluciones Tecnológicas de Vanguardia con <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            NexuSoft
          </span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
          En <strong className="text-cyan-400">NexuSoft</strong> transformamos 
          desafíos complejos en ecosistemas digitales escalables y seguros. 
          Liderado por nuestro equipo de ingeniería, nos especializamos en el 
          desarrollo web y móvil de alto rendimiento, la automatización inteligente 
          de procesos y la gestión avanzada de bases de datos. Diseñamos 
          arquitectura de software orientada a optimizar operaciones, blindar la 
          ciberestructura y potenciar de forma directa el crecimiento estratégico de 
          su empresa o proyecto individual.
        </p>

        {/* Botones (Sin sombras, solo bordes eléctricos en movimiento) */}
        <div className="flex items-center gap-4 pt-2">
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-border-glow">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[10px] bg-cyan-400 text-gray-950 font-bold hover:bg-cyan-300 transition-all"
            >
              Contáctame
            </a>
          </div>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 animate-border-glow">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all"
            >
              Ver Proyectos
            </a>
          </div>
        </div>

      </div>

      {/* Columna Derecha: Imagen del Carrusel (Sin sombra, solo borde en movimiento) */}
      <div className="w-full md:w-[560px] flex flex-col items-center gap-5">
        
        <div className="w-full p-[3px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400 animate-border-glow">
          <div className="relative w-full h-[300px] md:h-[360px] rounded-[14px] overflow-hidden bg-gray-950">
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
          <h3 className="text-white font-bold text-xl">
            {carouselSlides[currentIndex].title}
          </h3>
          <p className="text-gray-400 text-sm max-w-lg">
            {carouselSlides[currentIndex].subtitle}
          </p>
        </div>

      </div>
    </section>
  );
}