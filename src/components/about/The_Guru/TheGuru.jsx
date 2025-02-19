import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import Aboutdata from "../../../DataStore/Aboutdata";

const TheGuru = ()=>{
    const {theGuru} = useContext(ContextProvide);
    return(
        <div id="theguru" className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">The Guru</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        theGuru.map(({
                            id,
                            content1,
                            content2,
                            content3,
                            content4,
                            content5,
                            guruImg1,
                            guruImg2,
                            guruImg3,
                            guruImg4,
                            guruImg5,
                            guruImg6,
                            guruImg7,})=>{
                                return <div key={id}>
                                        <div className="grid grid-cols-3 gap-3">
                                            <p className="contentText col-span-3 lg:col-span-2">{content1}</p>
                                            <img className="rounded-xl col-span-3 lg:col-span-1" src={guruImg1} alt="" />
                                            <img className="rounded-xl col-span-1" src={guruImg2} alt="" />
                                            <img className="rounded-xl col-span-1" src={guruImg3} alt="" />
                                            <img className="rounded-xl col-span-1" src={guruImg4} alt="" />
                                            <p className="contentText col-span-3 lg:col-span-2">{content2}</p>                             
                                            <img className="rounded-xl col-span-3 lg:col-span-1" src={guruImg5} alt="" />
                                            <p className="contentText col-span-3 lg:col-span-2">{content3}</p>
                                            <img src={guruImg6} className="rounded-xl col-span-3 lg:col-span-1" alt="" />
                                            <p className="contentText col-span-3 lg:col-span-2">{content4}</p>
                                            <img src={guruImg7} className="rounded-xl col-span-3 lg:col-span-1 h-full object-cover" alt="" />
                                            <p className="contentText col-span-3">{content5}</p>
                                        </div>
                                </div>
                            })
                    }
                </div>
            </div>
        </div>
    )

}

export default TheGuru;