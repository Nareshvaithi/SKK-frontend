import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";

const ContemporaryWorks = ()=>{
    const {contemporary} = useContext(ContextProvide);
    return(
        <div id="contemporary" className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
            <div className="w-full lg:w-[30%] py-5">
                <h2 className="headingText text-wrap text-center lg:text-left">Contemporary Works</h2>
            </div>
            <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                {
                    contemporary.map(({
                        id,
                        content1,
                        contemporaryImg1,
                        contemporaryImg2,
                        contemporaryImg3,
                        contemporaryImg4,
                    })=>{
                        return <div key={id} className="grid grid-cols-4 gap-3">
                            <img className="col-span-4 rounded-xl" src={contemporaryImg1} alt="" />
                            <p className="contentText col-span-4">{content1}</p>
                            <img className="col-span-2 rounded-xl" src={contemporaryImg2} alt="" />
                            <img className="col-span-2 rounded-xl" src={contemporaryImg3} alt="" />
                            <img className="col-span-4 rounded-xl" src={contemporaryImg4} alt="" />
                        </div>
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default ContemporaryWorks;