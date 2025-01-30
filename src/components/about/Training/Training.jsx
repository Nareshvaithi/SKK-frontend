import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";

const Training = ()=>{
    const {training} = useContext(ContextProvide);
    return (
        <div className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Training and Establishment</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        training.map(({id,content1,content2,trainingImg})=>{
                            return <div key={id} className="grid grid-cols-2 gap-3">
                                <div className="col-span-2 lg:col-span-1">
                                    <p className="contentText pb-2">{content1}</p>
                                    <p className="contentText">{content2}</p>
                                </div>
                                <div className="col-span-2 lg:col-span-1 w-full h-full rounded-xl">
                                    <img src={trainingImg} className="object-cover h-full rounded-xl" alt="" />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Training;