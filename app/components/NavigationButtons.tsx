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
            <div className="fixed flex items-center left-1/2 bottom-5">
                <a className="bg-secondary text-black rounded-full h-10 w-10 flex" href="#home"><div className="mx-auto my-auto mb-[0.5rem]"><AiFillHome size={25} strokeWidth={"4"}/></div></a>
                <div className="flex flex-col gap-1">
                    <a onClick={() => handleNextSection(true)} className="scroll-section-btn" href={`#${sectionIds[currentSection]}`}><IoIosArrowUp className="m-auto mb-1" size={20}/></a>
                    <a onClick={() => handleNextSection(false)} className="scroll-section-btn" href={`#${sectionIds[currentSection]}`}><IoIosArrowDown className="m-auto mt-0" size={20} /></a>
                </div>
            </div>
        </>
    )
}