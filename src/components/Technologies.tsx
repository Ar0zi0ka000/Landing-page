'use client';
import { useState } from 'react';
import { 
  SiPython, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiSqlite, 
  SiGoogleanalytics, 
  SiOpenjdk, 
  SiNodedotjs, 
  SiGithub, 
  SiTailwindcss, 
  SiReact, 
  SiNextdotjs, 
  SiMysql, 
  SiAndroidstudio, 
  SiFlutter 
} from 'react-icons/si';

// Listado completo con sus respectivas categorías
const technologiesList = [
  { name: "Python", category: "Backend", icon: <SiPython className="text-yellow-500 dark:text-yellow-400" size={32} /> },
  { name: "HTML5", category: "Frontend", icon: <SiHtml5 className="text-orange-600 dark:text-orange-500" size={32} /> },
  { name: "CSS3", category: "Frontend", icon: <SiCss className="text-blue-600 dark:text-blue-400" size={32} /> },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript className="text-yellow-500 dark:text-yellow-300" size={32} /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-600 dark:text-blue-500" size={32} /> },
  { name: "SQL", category: "Base de Datos", icon: <SiSqlite className="text-blue-500 dark:text-blue-300" size={32} /> },
  { name: "Power BI", category: "Datos", icon: <SiGoogleanalytics className="text-amber-600 dark:text-amber-500" size={32} /> },
  { name: "Java", category: "Backend", icon: <SiOpenjdk className="text-red-600 dark:text-red-500" size={32} /> },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs className="text-emerald-600 dark:text-emerald-400" size={32} /> },
  { name: "GitHub", category: "Herramientas", icon: <SiGithub className="text-gray-900 dark:text-white" size={32} /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-cyan-600 dark:text-cyan-400" size={32} /> },
  { name: "React", category: "Frontend", icon: <SiReact className="text-cyan-600 dark:text-cyan-400" size={32} /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="text-gray-900 dark:text-white" size={32} /> },
  { name: "MySQL", category: "Base de Datos", icon: <SiMysql className="text-blue-700 dark:text-blue-400" size={32} /> },
  { name: "Android Studio", category: "Mobile", icon: <SiAndroidstudio className="text-emerald-600 dark:text-emerald-400" size={32} /> },
  { name: "Flutter", category: "Mobile", icon: <SiFlutter className="text-cyan-500 dark:text-cyan-300" size={32} /> },
];

// Opciones de filtrado
const categories = ["Todos", "Frontend", "Backend", "Base de Datos", "Mobile", "Datos", "Herramientas"];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredTechs = activeCategory === "Todos" 
    ? technologiesList 
    : technologiesList.filter(tech => tech.category === activeCategory);

  return (
    <section id="lenguajes" className="w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col gap-12 border-t border-gray-800/50 transition-colors">
      
      {/* Encabezado de la Sección */}
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors">
          Lenguajes & Tecnologías
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg transition-colors">
          Tecnologías y herramientas organizadas por áreas de especialización en mi flujo de desarrollo.
        </p>
      </div>

      {/* Botones de Categorías con efecto eléctrico en el activo */}
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat, idx) => (
          activeCategory === cat ? (
            // Botón activo con borde eléctrico animado
            <div key={idx} className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-border-glow shadow-md">
              <button
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-[10px] text-xs md:text-sm font-semibold bg-slate-50 dark:bg-gray-950 text-cyan-600 dark:text-cyan-400 cursor-pointer transition-colors"
              >
                {cat}
              </button>
            </div>
          ) : (
            // Botón inactivo estándar
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-slate-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {cat}
            </button>
          )
        ))}
      </div>

      {/* Grid de Tecnologías con borde eléctrico al hacer hover */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 transition-all duration-500">
        {filteredTechs.map((tech, idx) => (
          // Contenedor con borde eléctrico animado en hover
          <div 
            key={idx}
            className="group relative p-[2px] rounded-2xl bg-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-400 hover:animate-border-glow transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="bg-slate-50 dark:bg-gray-950 p-6 rounded-[14px] flex flex-col items-center justify-center gap-4 h-full transition-all duration-300">
              <div className="transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-medium text-cyan-600 dark:text-cyan-400 opacity-80">
                  {tech.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}