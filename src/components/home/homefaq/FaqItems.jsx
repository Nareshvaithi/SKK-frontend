import { useState } from "react";
import {AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqItems = ({id,answer,question})=>{
    const [openFaq,setOpenFaq] = useState(false);
    return(
        <div className="w-full lg:w-2/3 h-full flex justify-between items-center">
            <div className="w-full">
                <div onClick={()=>setOpenFaq(!openFaq)} className="cursor-pointer border-b border-gray-500 flex justify-between items-center gap-2 font-mainFont1 text-sm lg:text-xl overflow-hidden py-2">
                    <div>{question}</div>
                    <div>
                       {openFaq ? <AiOutlineMinus/>:<AiOutlinePlus/>}
                    </div>
                </div>
                <div className={`grid ${openFaq ? "grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"} transition-all duration-500`}>
                    <div className="overflow-hidden font-mainFont2 text-sm lg:text-lg py-2">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqItems;