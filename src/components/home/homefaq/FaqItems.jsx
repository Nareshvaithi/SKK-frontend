import { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
const FaqItems = ({id,answer,question})=>{
    const [openFaq,setOpenFaq] = useState(false);
    return(
        <div className="w-2/3 h-full flex justify-between items-center overflow-hidden">
            <div className="w-full">
                <div className="flex justify-between items-center gap-2 font-mainFont1 text-xl bg-pink-200 p-2 rounded-xl">
                    <div>{id}.{question}</div>
                    <div onClick={()=>setOpenFaq(!openFaq)} className={`${openFaq ? "rotate-180":"rotate-0"} text-themebrown transition-all duration-500`}><FaCircleChevronDown size={20}/></div>
                </div>
                <div className={`grid ${openFaq ? "grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"} overflow-hidden transition-all duration-500`}>
                    <div className="overflow-hidden font-mainFont2 text-lg pl-5 py-2">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqItems;