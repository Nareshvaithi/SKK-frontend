import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";

const Innovation = ()=>{
    const {innovation} = useContext(ContextProvide)
    return (
        <div id="innovations" className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Innovations</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        innovation.map(({
                            id,
                            content1,
                            content2,
                            innovationImg1,
                            innovationImg2,
                            innovationImg3,
                            innovationImg4,
                        })=>{
                            return <div className="grid grid-cols-4 gap-3">
                                <p className="contentText col-span-4">{content1}</p>
                                <p className="contentText col-span-4">{content2}</p>
                                <img className="rounded-xl h-full object-cover col-span-2" src={innovationImg1} alt="" />
                                <img className="rounded-xl h-full object-cover col-span-2" src={innovationImg2} alt="" />
                                <img className="rounded-xl h-full object-cover col-span-2" src={innovationImg3} alt="" />
                                <img className="rounded-xl h-full object-cover col-span-2" src={innovationImg4} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Innovation;