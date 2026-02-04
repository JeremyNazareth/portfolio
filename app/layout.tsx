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
      <meta name="color-scheme" content="dark light"></meta>                                                            
      <body className="px-5 sm:px-20 lg:max-w-5xl mx-auto">
        <header id="header" className="shadow-primary bg-primary text-secondary px-5 py-1 my-10 mx-auto flex rounded-full border-2 items-center
        lg:max-w-5xl lg:px-8
        md:justify-between">
          <a className="hidden text-2xl font-bold text-secondary transition-all duration-300 hover:text-white
          lg:block lg:text-3xl
          sm:block" href="#home">Jeremy</a>
        
          <nav className="flex w-full justify-around text-md font-semibold gap-2 
          md:text-lg md:w-auto ">
            <a href="#projects">Proyectos</a>
            <a href="#skills">Habilidades</a>           
            <a href="#about">Sobre mi</a>
          </nav>
        </header>
        <main className="lg:max-w-5xl  mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
