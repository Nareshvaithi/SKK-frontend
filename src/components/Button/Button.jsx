import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Button = ({text, link, bg, hoverbg, textcolor, hovertextcolor, px, py,border,borderColor})=>{
    const navigate = useNavigate();
    
    return(
        <div onClick={()=>{navigate(link)}} className={`overflow-hidden ${bg} group w-fit flex rounded-full gap-2 items-center justify-between ${px} ${py} ${border} ${borderColor} relative cursor-pointer`}>
            <div className={`font-mainFont2 ${textcolor} z-20 ${hovertextcolor} text-sm md:text-[18px]`}>{text}</div>
            <div className={`group-hover:rotate-45 transition-all z-20 duration-500 ${textcolor} ${hovertextcolor}`}><GoArrowUpRight size={20}/></div>
            <div className={`absolute ${hoverbg} inset-0 w-full h-full rounded-full -translate-x-[110%] group-hover:translate-x-0 z-10 transition-all duration-1000`}></div>
        </div>
    )
}

export default Button;