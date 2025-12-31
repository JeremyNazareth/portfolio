import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/funnel-sans'
import '@fontsource-variable/baloo-2';
import '@fontsource-variable/jetbrains-mono';


export const metadata: Metadata = {
  title: "Jeremy Portfolio",
  description: "El portfolio de Jeremy Nazareth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
  #00152b
  #001D3D
  //bg-secondary rounded-4xl m-6 h-18 w-[90%] mx-auto shadow-md
  */
  return (
    <html lang="en">                                                                 
      <body>
        <header id="header" className="shadow-primary bg-primary text-secondary px-5 py-1 my-10 lg:max-w-5xl md:max-w-2xl mx-auto flex justify-between rounded-full border-2">
          <a className="text-3xl font-medium text-secondary leading-10" href="#home">Jeremy Nazareth</a>
        
          <nav className="flex text-lg/10 font-medium gap-5">
            <a href="#projects">Proyectos</a>
            <a href="#skills">Habilidades</a>           
            <a href="#about">Sobre mi</a>
          </nav>
        </header>
        <main className="lg:max-w-5xl md:max-w-2xl mx-auto px-5">
          {children}
        </main>
        
      </body>
    </html>
  );
}
