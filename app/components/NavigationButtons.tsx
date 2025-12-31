"use client"

import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export default function NavigationButtons(){
    
    let [currentSection, setCurrentSection] = useState(0);
    let [sectionIds, setSectionIds] = useState([""]);
    interface section{
        id: string
    }
    let sectionsCap = 0;
    let nextSection;
    let prevSection;
    
    
    useEffect(() => {
        
        const pageSections = document.querySelectorAll("section");
        const pageIds = [];

        for(const section of pageSections){
            pageIds.push(section.id)
        }
        setSectionIds(pageIds);
        console.log(pageIds)
    },[])
    
    function handleNextSection(isArrowUp: Boolean){
        console.log(currentSection)
        if (isArrowUp && currentSection != 0){
            setCurrentSection(currentSection-1)
        } else if (!isArrowUp && currentSection != sectionIds.length - 1){
            setCurrentSection(currentSection+1)
        }
    }
    
    return(
        <>
            <div className="fixed inset-x-0 bottom-5 flex items-center justify-center">
                <a onClick={()=> setCurrentSection(0)} className="bg-primary border-2 border-secondary text-secondary rounded-full h-10 w-10 flex hover:bg-secondary hover:text-primary duration-300" href={`#${sectionIds[0]}`}><div className="mx-auto mt-1"><AiFillHome size={25} strokeWidth={"4"}/></div></a>
                <div className="flex flex-col gap-1">
                    <a onClick={() => handleNextSection(true)} className="scroll-section-btn flex items-center" href={`#${sectionIds[currentSection]}`}><IoIosArrowUp className="flex-1 mb-1" size={21}/></a>
                    <a onClick={() => handleNextSection(false)} className="scroll-section-btn flex items-center" href={`#${sectionIds[currentSection]}`}><IoIosArrowDown className="flex-1" size={21} /></a>
                </div>
            </div>
        </>
    )
}