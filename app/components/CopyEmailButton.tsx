'use client'

import { MdEmail } from "react-icons/md";
import { IoCopySharp } from "react-icons/io5";

export default function CopyEmailButton(){

    function copyEmail(){
        navigator.clipboard.writeText("jer.reyesr@outlook.com")
        alert('Email copiado en el portapeles.')
    }
    return(
        <div>
            <div className="copyEmailAlert-container fixed inset-x-0 flex justify-center -top-10">
                <p className="bg-primary border-2 border-secondary rounded-full px-2 py-1">Email copiado en el portapeles.</p>
            </div>
            <div onClick={() => copyEmail()} 
            className='group justify-end flex transition-all cursor-pointer relative w-[27] h-[27] px-1  duration-600 overflow-hidden items-center
            hover:justify-end hover:w-32 hover:bg-secondary hover:text-black
            border border-2 border-secondary bg-primary rounded-full shadow-button'>
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