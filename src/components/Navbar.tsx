'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-800/50">
      {/* Logotipo Real e Identidad de Marca */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="relative w-11 h-11 overflow-hidden rounded-xl border border-cyan-500/30 bg-gray-900/50 p-0.5 shadow-lg shadow-cyan-500/10 transition-transform group-hover:scale-105">
          <Image 
            src="/nexusoft.png" 
            alt="NexuSoft Logo" 
            fill 
            className="object-cover rounded-lg"
          />
        </div>
        <span className="font-extrabold text-xl tracking-wide flex">
          <span className="text-cyan-400">Nexu</span>
          <span className="text-white">Soft</span>
        </span>
      </a>

      {/* Enlaces de Navegación Interna */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#quien-soy" className="hover:text-cyan-400 transition-colors">Sobre nosotros</a>
        <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
        <a href="#lenguajes" className="hover:text-cyan-400 transition-colors">Lenguajes</a>
        <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
      </nav>

      {/* Botón de Tema (Claro / Oscuro) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2.5 rounded-xl bg-gray-800/80 text-cyan-400 hover:bg-gray-700 transition-all border border-gray-700 shadow-md cursor-pointer"
        aria-label="Cambiar tema"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}