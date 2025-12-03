import { BiHome } from "react-icons/bi";

export default function Page(){
    return(
        <>
        <section id="home" className="mt-35 scroll-m-80">
            <h1 className="text-3xl">¡Bienvenido a mi portfolio!</h1>
            <div className="flex text-5xl items-end">
                <p className="flex-initial leading-20">soy&nbsp;</p>
                <p className="text-8xl text-white font-bold flex-initial">Jeremy Nazareth</p>
            </div>
            <p className="text-4xl text-gray-300">front-end Developer</p>
            <button className="secondary-text bg-secondary p-3 rounded-full my-4">Descargar CV</button>
        </section>
        
        <div className="fixed flex items-center left-1/2 bottom-5">
            <a className="bg-secondary text-black rounded-full h-10 w-10 flex" href="#home"><div className="mx-auto my-auto"><BiHome size={25} strokeWidth={1}/></div></a>
            <div className="flex flex-col gap-1">
                <button className="scroll-section-btn"><p className="flex-1">▲</p></button>
                <button className="scroll-section-btn"><p className="flex-1">▼</p></button>
            </div>
        </div>
        
        <section id="about">
            <h1 className="text-5xl font-bold text-white">Sobre mi</h1>
            <h2 className="text-2xl w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit a natus vitae suscipit dolorem cum ducimus ut pariatur. Ipsam ut consectetur ab possimus modi deserunt neque eveniet! Provident, veniam!</h2>
        </section>
        <section id="skills">

        </section>
        <section id="projects">
            <h1 className="text-5xl font-bold text-white">Habilidades</h1>
            <div className="bg-secondary w-25">
                <h1>texto</h1>
            </div>
        </section>
        </>
    )
}