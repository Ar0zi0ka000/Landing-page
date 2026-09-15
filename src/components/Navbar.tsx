'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  // Inicializamos leyendo de forma segura el localStorage (o true por defecto)
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

      {/* Botón Neumórfico Estilo Switch */}
      <button
        onClick={toggleTheme}
        aria-label="Cambiar tema claro u oscuro"
        className={`relative w-24 h-12 rounded-full p-1.5 transition-all duration-300 cursor-pointer flex items-center shadow-inner ${
          isDarkMode 
            ? 'bg-[#0f172a] border border-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]' 
            : 'bg-[#e2e8f0] border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]'
        }`}
      >
        {/* Iconos de fondo (Sol a la izquierda, Luna a la derecha) */}
        <div className="absolute inset-0 flex justify-between items-center px-3 pointer-events-none">
          <Sun className={`w-5 h-5 transition-opacity duration-300 ${isDarkMode ? 'text-gray-500 opacity-40' : 'text-amber-500 opacity-100'}`} size={20} />
          <Moon className={`w-5 h-5 transition-opacity duration-300 ${isDarkMode ? 'text-cyan-400 opacity-100' : 'text-gray-400 opacity-40'}`} size={20} />
        </div>

        {/* Círculo deslizante con relieve 3D */}
        <div
          className={`relative z-10 w-9 h-9 rounded-full bg-white dark:bg-gray-900 shadow-[0_4px_6px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
            isDarkMode ? 'translate-x-12' : 'translate-x-0'
          }`}
        >
          {isDarkMode ? (
            <Moon className="w-4 h-4 text-cyan-400" size={16} />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" size={16} />
          )}
        </div>
      </button>
    </header>
  );
}