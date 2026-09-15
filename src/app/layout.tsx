import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxi | Portafolio Profesional",
  description: "Desarrollador de software full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white antialiased transition-colors">
        {children}
      </body>
    </html>
  );
}