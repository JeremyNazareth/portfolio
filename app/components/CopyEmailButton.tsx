'use client'

import { MdEmail } from "react-icons/md";
import { IoCopySharp } from "react-icons/io5";
import { useRef } from "react";

export default function CopyEmailButton(){

    
    const alertContainerRef = useRef<HTMLDivElement>(null);
    const copyEmailRef= useRef<HTMLDivElement>(null);

    function copyEmail(){


        if(alertContainerRef.current){
            const alertContainerClass = 'copyEmailAlert-animation' 
            const copyEmailButtonActive = 'copyEmail-container-active'
            navigator.clipboard.writeText("jer.reyesr@outlook.com")
            
            copyEmailRef.current?.classList.add(copyEmailButtonActive)
            alertContainerRef.current.classList.add(alertContainerClass)
            
            setTimeout(() => {alertContainerRef.current?.classList.remove(alertContainerClass)},6000)
            setTimeout(() => {copyEmailRef.current?.classList.remove(copyEmailButtonActive)}, 300)
        }
        
    }

    return(
        <div>
            <div className="fixed inset-x-0 flex justify-center -top-10" ref={alertContainerRef}>
                <p className="bg-primary border-2 border-secondary rounded-full px-2 py-1">Email copiado en el portapeles.</p>
            </div>
            <div onClick={() => copyEmail()} ref={copyEmailRef}
            className='copyEmail-container group justify-end flex transition-all cursor-pointer relative w-[27] h-[27] px-1  duration-600 overflow-hidden items-center
            border border-2 border-secondary bg-primary rounded-full shadow-button
            hover:justify-end hover:w-32 hover:bg-secondary hover:text-black hover:shadow-secondary'>
                <p 
                className=" transition-all w-24 absolute text-center right-6 duration-300 opacity-0 
                group-hover:opacity-100">
                    Copiar Email
                </p>
                <MdEmail size={15} className="w-[25] my-auto text-secondary flex justify-center group-hover:text-black" />
            </div>
        </div>
        
        
    )
}