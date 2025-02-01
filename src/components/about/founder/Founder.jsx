import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import Aboutdata from "../../../DataStore/Aboutdata";

const Founder = ()=>{
    const {theFounder} = useContext(ContextProvide);
    
    return (
        <div className="pt-24">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">The Founders</h2>
                </div>
                <div className="w-full h-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        theFounder.map(({id,content1,content2,founder1,founder2,founder3,founder4})=>{
                            return <div key={id} className="grid grid-cols-3 gap-3">
                                <div className="col-span-3 lg:col-span-2">
                                    <p className="contentText pb-2">{content1}</p>
                                    <p className="contentText">{content2}</p>
                                </div>
                                <div className="col-span-3 lg:col-span-1 rounded-xl">
                                    <img className="rounded-xl object-cover h-fit w-full" src={founder1} alt={founder1} />
                                </div>
                                <div className="col-span-3 lg:col-span-1 rounded-xl object-cover h-full w-full">
                                    <img className="rounded-xl object-cover" src={founder2} alt={founder2} />
                                </div>
                                <div className="col-span-3 lg:col-span-1 rounded-xl">
                                    <img className="rounded-xl object-cover h-full w-full" src={founder3} alt={founder3} />
                                </div>
                                <div className="col-span-3 lg:col-span-1 rounded-xl">
                                    <img className="rounded-xl object-cover h-full w-full" src={founder4} alt={founder4} />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <Aboutdata/>
        </div>
    )
}

export default Founder;