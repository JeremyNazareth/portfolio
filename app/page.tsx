import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function Page(){
    return(
        <>
        <section id="home" className="pt-40 scroll-m-80">
            <h1 className="text-3xl">¡Bienvenido a mi portfolio!</h1>
            <div className="flex text-5xl items-end">
                <p className="flex-initial leading-13 text-4xl text-white">Soy&nbsp;</p>
                <p className="text-5xl text-white font-bold flex-initial sm:text-6xl">Jeremy Nazareth</p>
            </div>
            <p className="text-3xl text-gray-300">front-end Developer</p>
            <button className="secondary-text bg-secondary px-3 py-1 rounded-full my-4 ">Descargar CV</button>
        </section>
        
        <div className="fixed flex items-center left-1/2 bottom-5">
            <a className="bg-secondary text-black rounded-full h-10 w-10 flex" href="#home"><div className="mx-auto my-auto mb-[0.5rem]"><AiFillHome size={25} strokeWidth={"4"}/></div></a>
            <div className="flex flex-col gap-1">
                <button className="scroll-section-btn"><IoIosArrowUp className="m-auto mb-1" size={20}/></button>
                <button className="scroll-section-btn"><IoIosArrowDown className="m-auto mt-0" size={20} /></button>
            </div>
        </div>
        
        <section id="projects">
            <h1 className="text-3xl font-bold text-white">Proyectos</h1>
            <article className="mt-2">
                <div>
                    <h1 className="text-2xl font-bold"> Movie Search</h1>
                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim iure quod obcaecati magni voluptatem voluptates repellat libero aliquid commodi omnis porro, aspernatur soluta tempore beatae culpa perspiciatis! Placeat, minima?</p>
                    <img className="border-2 rounded-3xl p-4 my-8 w-2xl" src="movieSearch_Project.png" alt="" />        
                </div>
                
            </article>
            
            
        </section>

        <section id="skills">
            <h1 className="text-3xl font-bold text-white">Habilidades</h1>
            <h2 className="text-2xl w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit a natus vitae suscipit dolorem cum ducimus ut pariatur. Ipsam ut consectetur ab possimus modi deserunt neque eveniet! Provident, veniam!</h2>
        </section>
        

        <section id="about">
            <h1 className="text-3xl font-bold text-white">Sobre mi</h1>
            <h2 className="text-2xl w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit a natus vitae suscipit dolorem cum ducimus ut pariatur. Ipsam ut consectetur ab possimus modi deserunt neque eveniet! Provident, veniam!</h2>
        </section>
        </>
    )
}