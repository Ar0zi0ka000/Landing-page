'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') return false;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800/50 transition-colors">
      {/* Logotipo e Identidad de Marca */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="relative w-11 h-11 overflow-hidden rounded-xl border border-cyan-500/30 bg-gray-100 dark:bg-gray-900/50 p-0.5 shadow-lg shadow-cyan-500/10 transition-transform group-hover:scale-105">
          <Image 
            src="/nexusoft.png" 
            alt="NexuSoft Logo" 
            fill 
            className="object-cover rounded-lg"
          />
        </div>
        <span className="font-extrabold text-xl tracking-wide flex">
          <span className="text-cyan-500 dark:text-cyan-400">Nexu</span>
          <span className="text-gray-900 dark:text-white">Soft</span>
        </span>
      </a>

      {/* Enlaces de Navegación Interna */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
        <a href="#quien-soy" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Sobre nosotros</a>
        <a href="#proyectos" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Proyectos</a>
        <a href="#lenguajes" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Lenguajes</a>
        <a href="#contacto" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Contacto</a>
      </nav>

      {/* Botón de Cambio de Tema (Estilo Inspirado en la Referencia) */}
      <button
        onClick={toggleTheme}
        aria-label="Cambiar tema claro u oscuro"
        className={`relative w-28 h-14 rounded-full p-1.5 transition-all duration-500 cursor-pointer flex items-center shadow-inner overflow-hidden ${
          isDarkMode 
            ? 'bg-gradient-to-r from-[#172033] via-[#1e293b] to-[#0f172a] border border-slate-700/60 shadow-[inset_0_3px_6px_rgba(0,0,0,0.8)]' 
            : 'bg-gradient-to-r from-sky-300 via-sky-400 to-amber-200 border border-sky-200 shadow-[inset_0_3px_6px_rgba(0,0,0,0.2)]'
        }`}
      >
        {/* Fondo Detallado: Estrellas (Modo Oscuro) / Nubes (Modo Claro) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Estrellas y destellos del modo nocturno */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
            <span className="absolute top-2 left-3 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_white] animate-pulse"></span>
            <span className="absolute bottom-3 left-7 w-1 h-1 bg-slate-300 rounded-full"></span>
            <span className="absolute top-4 left-12 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_4px_white]"></span>
            <span className="absolute bottom-4 left-16 w-1 h-1 bg-slate-200 rounded-full"></span>
          </div>

          {/* Nubes difuminadas del modo diurno */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute top-2 right-4 w-7 h-3.5 bg-white/70 rounded-full blur-[0.5px]"></div>
            <div className="absolute top-4 right-7 w-9 h-4 bg-white/85 rounded-full blur-[0.5px]"></div>
          </div>
        </div>

        {/* Círculo Deslizante: Sol con Halos (Claro) o Luna con Cráteres (Oscuro) */}
        <div
          className={`relative z-10 w-11 h-11 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] transform transition-transform duration-500 ease-in-out flex items-center justify-center ${
            isDarkMode 
              ? 'translate-x-14 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400' 
              : 'translate-x-0 bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400'
          }`}
        >
          {/* Halos de luz concéntricos simulados para el Sol */}
          {!isDarkMode && (
            <div className="absolute -inset-1 rounded-full bg-yellow-300/30 blur-sm pointer-events-none -z-10"></div>
          )}

          {/* Cráteres internos detallados para la Luna */}
          {isDarkMode && (
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <div className="absolute top-2.5 left-3 w-2 h-2 bg-slate-400/50 rounded-full"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 bg-slate-400/50 rounded-full"></div>
              <div className="absolute top-5 right-3.5 w-1.5 h-1.5 bg-slate-400/50 rounded-full"></div>
            </div>
          )}
        </div>
      </button>
    </header>
  );
}