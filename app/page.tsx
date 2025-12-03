import { BiHome } from "react-icons/bi";

export default function Page(){
    return(
        <>
        <h1 className="text-3xl" id="home">¡Bienvenido a mi portfolio!</h1>
        <div className="flex text-5xl items-end">
            <p className="flex-initial leading-20">soy&nbsp;</p>
            <p className="text-8xl text-white font-bold flex-initial">Jeremy Nazareth</p>
        </div>
        <p className="text-4xl">front-end Developer</p>
        <button className="secondary-text bg-secondary p-3 rounded-full my-4">Descargar CV</button>
        <div className="fixed flex items-center left-1/2 bottom-5">
            <button className="flex bg-secondary text-black flex rounded-full h-10 w-10 mx-auto">
                <div className="flex mx-auto my-auto"><BiHome size={25} strokeWidth={1}/></div>
            </button>
            <div className="flex flex-col gap-1">
                <button className="scroll-section-btn"><p className="flex-1">▲</p></button>
                <button className="scroll-section-btn"><p className="flex-1">▼</p></button>
            </div>
            
        </div>
        
        <div className="my-400">a</div>
        </>
    )
}