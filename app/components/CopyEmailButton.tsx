'use client'

import { MdEmail } from "react-icons/md";
import { IoCopySharp } from "react-icons/io5";

export default function CopyEmailButton(){

    function copyEmail(){
        navigator.clipboard.writeText("jer.reyesr@outlook.com")
        alert('Email copiado en el portapeles.')
    }
    return(
        <div onClick={() => copyEmail()} 
        className='group justify-end flex transition-all cursor-pointer relative w-7 h-7 duration-300 overflow-hidden
        hover:justify-end hover:w-32
        border border-2 border-secondary bg-primary rounded-full'>
            <p className="w-22 transition-all absolute right-7 duration-300 opacity-0 
            group-hover:opacity-100">
            Copiar Email</p>
            <div  className="w-8 my-auto flex justify-center"><MdEmail size={18} color="#E0B834" /></div>
        </div>
    )
}