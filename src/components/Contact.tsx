'use client';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Validación en Windows
    if (!email || !message) {
      alert("Por favor, completa ambos campos antes de enviar el mensaje.");
      return;
    }

    const myEmail = "maximiliano000.andres@gmail.com";
    const subject = encodeURIComponent(`Nuevo mensaje de contacto de: ${email}`);
    const body = encodeURIComponent(`Correo del remitente: ${email}\n\nMensaje:\n${message}`);

    // Abrir Gmail Web directamente en una nueva pestaña
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contacto" className="w-full max-w-[1400px] mx-auto px-6 py-24 flex flex-col border-t border-gray-800/50 transition-colors">
      
      {/* Encabezado de la Sección */}
      <div className="flex flex-col gap-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contacto
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Iniciemos una conversación sobre tu próximo proyecto o requerimiento técnico.
        </p>
      </div>

      {/* Contenedor Principal en Grid (2 columnas) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Tarjeta Izquierda (Informativa y limpia) */}
        <div className="w-full p-[3px] rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400 animate-border-glow shadow-lg">
          <div className="h-full bg-slate-50 dark:bg-gray-950 p-8 md:p-12 rounded-[21px] flex flex-col justify-center gap-8 transition-colors">
            <div className="flex flex-col gap-6">
              <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
              
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                ¿Listo para llevar tu <span className="text-cyan-500 dark:text-cyan-400">proyecto al siguiente nivel?</span>
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Como desarrollador de software y apasionado por la tecnología, construyo soluciones digitales que combinan código limpio, arquitectura sólida y un diseño moderno. Si tienes una idea en mente o necesitas escalar plataforma, hablemos y hagámosla realidad.
            </p>
          </div>
        </div>

        {/* Tarjeta Derecha (Formulario con apertura directa en Gmail Web) */}
        <div className="w-full p-[3px] rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400 animate-border-glow shadow-lg">
          <div className="h-full bg-slate-50 dark:bg-gray-950 p-8 md:p-12 rounded-[21px] flex flex-col justify-center transition-colors">
            
            <div className="flex flex-col gap-6">
              
              {/* Campo Correo Electrónico */}
              <div className="flex flex-col gap-2">
                <label className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors text-sm"
                />
              </div>

              {/* Campo Descripción */}
              <div className="flex flex-col gap-2">
                <label className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Descripción
                </label>
                <textarea 
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos sobre tu proyecto y objetivos."
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors text-sm resize-none"
                />
              </div>

              {/* Botón de Enviar */}
              <button 
                type="button"
                onClick={handleSendMessage}
                className="w-full py-4 mt-2 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer text-sm tracking-wide"
              >
                Enviar Mensaje
              </button>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}