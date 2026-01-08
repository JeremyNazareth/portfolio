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
      <body className="px-5">
        <header id="header" className="shadow-primary bg-primary text-secondary px-3 py-1 my-10 mx-auto flex justify-between rounded-full border-2
        lg:max-w-5xl lg:px-8 sm:px-8">
          <a className="text-2xl font-bold leading- text-secondary transition-all duration-300 hover:text-white
          lg:text-3xl" href="#home">Jeremy</a>
        
          <nav className="flex items-center text-base font-semibold gap-2 lg:text-lg ">
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
