'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiFastapi, 
  SiPostgresql, 
  SiPython, 
  SiGoogleanalytics, 
  SiTensorflow, 
  SiJavascript, 
  SiNodedotjs, 
  SiMongodb,
  SiSqlite
} from 'react-icons/si';

const techIcons: { [key: string]: any } = {
  "Next.js": <SiNextdotjs className="text-gray-900 dark:text-white" size={16} />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-600 dark:text-cyan-400" size={16} />,
  "TypeScript": <SiTypescript className="text-blue-600 dark:text-blue-500" size={16} />,
  "React": <SiReact className="text-cyan-600 dark:text-cyan-400" size={16} />,
  "FastAPI": <SiFastapi className="text-teal-600 dark:text-teal-400" size={16} />,
  "PostgreSQL": <SiPostgresql className="text-blue-600 dark:text-blue-400" size={16} />,
  "Python": <SiPython className="text-yellow-600 dark:text-yellow-400" size={16} />,
  "Power BI": <SiGoogleanalytics className="text-amber-600 dark:text-amber-500" size={16} />,
  "TensorFlow": <SiTensorflow className="text-orange-600 dark:text-orange-400" size={16} />,
  "JavaScript": <SiJavascript className="text-yellow-600 dark:text-yellow-300" size={16} />,
  "Node.js": <SiNodedotjs className="text-emerald-600 dark:text-emerald-400" size={16} />,
  "MongoDB": <SiMongodb className="text-emerald-600 dark:text-emerald-500" size={16} />,
  "SQL": <SiSqlite className="text-blue-600 dark:text-blue-300" size={16} />
};

const projectsData = [
  {
    id: 1,
    title: "Portafolio Web Full-Stack",
    status: "Terminado",
    statusGradient: "from-emerald-400 via-teal-300 to-emerald-500 text-emerald-700 dark:text-emerald-300",
    borderGradient: "from-emerald-400 via-cyan-500 to-emerald-400",
    description: "Plataforma web de alta performance desarrollada con arquitectura moderna basada en componentes. Incorpora un sistema dinámico de temas claro/oscuro sincronizados a nivel de documento, carruseles interactivos optimizados, efectos de bordes eléctricos fluidos mediante animaciones CSS personalizadas y un diseño completamente responsive adaptado a los más altos estándares UI/UX del desarrollo web actual.",
    image: "/web-dev.webp",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "React"]
  },
  {
    id: 2,
    title: "Pipeline ETL & Dashboard",
    status: "Terminado",
    statusGradient: "from-emerald-400 via-teal-300 to-emerald-500 text-emerald-700 dark:text-emerald-300",
    borderGradient: "from-emerald-400 via-cyan-500 to-emerald-400",
    description: "Sistema robusto de extracción, transformación y carga (ETL) diseñado para procesar grandes volúmenes de datos transaccionales. Incluye limpieza automatizada de registros, consultas estructuradas de alta velocidad y un panel de control interactivo en tiempo real que traduce métricas complejas en gráficos dinámicos para facilitar la toma de decisiones gerenciales.",
    image: "/automation.jpg",
    stack: ["Python", "SQL", "Power BI"]
  },
  {
    id: 3,
    title: "Asistente de Voz con IA",
    status: "En desarrollo",
    statusGradient: "from-amber-400 via-yellow-300 to-orange-400 text-amber-700 dark:text-amber-300",
    borderGradient: "from-amber-400 via-cyan-500 to-amber-400",
    description: "Aplicación de inteligencia artificial orientada al procesamiento de lenguaje natural y reconocimiento de comandos de voz locales. Desarrollada con arquitecturas de modelos de aprendizaje profundo, garantiza una baja latencia en la transcripción de audio, privacidad de datos mediante procesamiento offline y una API escalable de backend para integraciones futuras.",
    image: "/mobile-design.png",
    stack: ["Python", "TensorFlow", "FastAPI"]
  },
  {
    id: 4,
    title: "Gestión de Inventarios",
    status: "En desarrollo",
    statusGradient: "from-amber-400 via-yellow-300 to-orange-400 text-amber-700 dark:text-amber-300",
    borderGradient: "from-amber-400 via-cyan-500 to-amber-400",
    description: "Plataforma web integral para el control de stock y trazabilidad de productos en tiempo real. Cuenta con un sistema automatizado de alertas por stock crítico, control de accesos por roles de usuario, registro detallado de entradas y salidas de almacén, y una base de datos NoSQL altamente flexible para manejar catálogos de gran envergadura.",
    image: "/web-dev.webp",
    stack: ["JavaScript", "Node.js", "MongoDB"]
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="proyectos" className="w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col gap-12 border-t border-gray-800/50 transition-colors">
      
      {/* Encabezado de la Sección */}
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors">
          Proyectos Destacados
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg transition-colors">
          Una selección de mis últimos trabajos de ingeniería de software.
        </p>
      </div>

      {/* Contenedor Principal del Carrusel */}
      <div 
        className="relative w-full max-w-5xl mx-auto flex flex-col items-center gap-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Ventana Deslizante de las Cards */}
        <div className="overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="min-w-full px-2"
              >
                {/* Borde eléctrico en movimiento */}
                <div className={`w-full p-[3px] rounded-2xl bg-gradient-to-r ${project.borderGradient} animate-border-glow shadow-2xl`}>
                  {/* Tarjeta con fondo blanco claro en modo light y gris oscuro en modo dark */}
                  <div className="bg-slate-50 dark:bg-gray-950 rounded-[14px] p-8 md:p-12 flex flex-col justify-between gap-6 h-full transition-colors">
                    
                    {/* Imagen del Proyecto */}
                    <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-colors">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Jerarquía: Título -> Status Animado -> Descripción */}
                    <div className="flex flex-col items-start gap-3.5">
                      {/* Título de la card forzado a oscuro en light y blanco en dark */}
                      <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Insignia de estado adaptativa */}
                      <div className={`p-[1.55px] rounded-full bg-gradient-to-r ${project.statusGradient} animate-border-glow shadow-md`}>
                        <span className="block text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
                          ● {project.status}
                        </span>
                      </div>

                      {/* Descripción de la card forzada a gris oscuro legible en light y gris claro en dark */}
                      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed pt-1 text-justify transition-colors">
                        {project.description}
                      </p>
                    </div>

                    {/* Stack Tecnológico con Logotipos y Nombres */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-900 transition-colors">
                      {project.stack.map((tech, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 text-xs md:text-sm font-medium px-4 py-2 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 shadow-sm transition-colors"
                        >
                          {techIcons[tech] || null}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Barra de Indicadores */}
        <div className="flex items-center gap-2 bg-gray-200/80 dark:bg-gray-900/60 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-800/80 shadow-md backdrop-blur-sm transition-colors">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === idx 
                  ? "w-8 bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                  : "w-2 bg-gray-400 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600"
              }`}
              aria-label={`Ir al proyecto ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}