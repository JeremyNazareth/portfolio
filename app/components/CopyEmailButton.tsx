'use client'

import { MdEmail } from "react-icons/md";
import { IoCopySharp } from "react-icons/io5";

export default function CopyEmailButton(){

    function copyEmail(){
        navigator.clipboard.writeText("jer.reyesr@outlook.com")
        alert('Email copiado en la papalera.')
    }
    return(
        <div onClick={() => copyEmail()} className='cursor-pointer'>
            <div><MdEmail size={25} /></div>
            <div className='relative bottom-3 left-4'><IoCopySharp size={15} color='#f1c42eff'/></div>
        </div>
    )
}