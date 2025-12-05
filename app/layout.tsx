import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/funnel-sans'
import '@fontsource-variable/baloo-2';

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
        <header id="header" className="flex justify-between py-10 px-18">
          <a className="text-3xl font-extrabold" href="#home">Jeremy Nazareth</a>
        
          <nav className="flex text-center text-lg/12 font-bold gap-5">
            <a href="#home">Inicio</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Projectos</a>
            <a href="#about">Sobre mi</a>
          </nav>
        </header>
        <main className="mx-20 my-30">
          {children}
        </main>
        
      </body>
    </html>
  );
}
