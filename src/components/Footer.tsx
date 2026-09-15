'use client';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const whatsappNumber = "+56932505243";
  const whatsappMessage = encodeURIComponent("¡Hola Maxi! Vi tu portafolio en NexuSoft y me gustaría conversar sobre un proyecto.");
  
  const instagramUrl = "https://instagram.com/ar0zi0ka.000";
  const twitterUrl = "https://twitter.com/Ar0Zi0";
  const githubUrl = "https://github.com/AR0ZI0KA000";
  const myEmail = "Maximiliano000.andres@gmail.com";

  return (
    <footer className="w-full bg-slate-50 dark:bg-[#080b0f] border-t border-gray-200 dark:border-gray-800/50 pt-16 pb-8 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-200 dark:border-gray-800/50">
        
        {/* Columna 1: Logo, Descripción y Redes Sociales */}
        <div className="flex flex-col gap-6">
          <a href="#" className="flex items-center gap-3 group w-fit">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-cyan-500/30 bg-gray-100 dark:bg-gray-900/50 p-0.5 shadow-lg shadow-cyan-500/10 transition-transform group-hover:scale-105">
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

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Soluciones de software de vanguardia, construidas con arquitectura limpia, ingeniería de precisión y enfoque en escalabilidad.
          </p>

          {/* Redes Sociales con Centrado Absoluto */}
          <div className="flex items-center gap-5 pt-2">
            
            {/* 1. WhatsApp */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="relative group w-11 h-11 p-[2px] rounded-2xl overflow-hidden shadow-md flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-300 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-[14px] bg-slate-100 dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors z-10">
                <FaWhatsapp size={22} />
              </div>
            </a>

            {/* 2. Instagram */}
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="relative group w-11 h-11 p-[2px] rounded-2xl overflow-hidden shadow-md flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-[14px] bg-slate-100 dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors z-10">
                <FaInstagram size={22} />
              </div>
            </a>

            {/* 3. X (Twitter) */}
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="relative group w-11 h-11 p-[2px] rounded-2xl overflow-hidden shadow-md flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-sky-400 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-[14px] bg-slate-100 dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-cyan-400 transition-colors z-10">
                <FaXTwitter size={20} />
              </div>
            </a>

            {/* 4. GitHub */}
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="relative group w-11 h-11 p-[2px] rounded-2xl overflow-hidden shadow-md flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-500 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-[14px] bg-slate-100 dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors z-10">
                <FaGithub size={22} />
              </div>
            </a>

          </div>
        </div>

        {/* Columna 2: Servicios */}
        <div className="flex flex-col gap-4">
          <h4 className="text-gray-900 dark:text-white font-semibold text-sm tracking-wider uppercase">Servicios</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400">
            <li><span className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Desarrollo Web Full-Stack</span></li>
            <li><span className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Sistemas Backend Robustos</span></li>
            <li><span className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Aplicaciones Móviles (Mobile)</span></li>
            <li><span className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Automatización y Datos Inteligentes</span></li>
            <li><span className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Arquitectura de Software y APIs</span></li>
          </ul>
        </div>

        {/* Columna 3: Email */}
        <div className="flex flex-col gap-4">
          <h4 className="text-gray-900 dark:text-white font-semibold text-sm tracking-wider uppercase">Email</h4>
          <a href={`mailto:${myEmail}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            {myEmail}
          </a>
        </div>

        {/* Columna 4: Dirección */}
        <div className="flex flex-col gap-4">
          <h4 className="text-gray-900 dark:text-white font-semibold text-sm tracking-wider uppercase">Ubicación</h4>
          <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400">
            <span>Colina de Chile</span>
            <span>Región Metropolitana</span>
          </div>
        </div>

      </div>

      {/* Copyright e Información Inferior */}
      <div className="max-w-[1400px] mx-auto px-6 pt-8 flex flex-col items-center justify-center text-xs text-gray-500 dark:text-gray-500 gap-3 text-center">
        <p>© 2026 NexuSoft. Todos los derechos reservados.</p>
        <div className="flex gap-6">
        </div>
      </div>
    </footer>
  );
}