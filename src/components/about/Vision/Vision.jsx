import { useContext } from "react";
import Aboutdata from "../../../DataStore/Aboutdata";
import { ContextProvide } from "../../../Context_API/contextProvider";

const Vision = ()=>{
    const {vision} = useContext(ContextProvide);
    return(
        <div className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Our Vision</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        vision.map(({id,content1,content2,img1,img2})=>{
                            return <div key={id} className="w-full">
                                <div className="grid grid-cols-2 gap-3 items-center">
                                    <p className="col-span-2 lg:col-span-1 contentText pb-2">{content1}</p>
                                    <div className="col-span-2 lg:col-span-1 rounded-xl">
                                        <img className="rounded-xl" src={img2} alt="" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3 items-center">
                                    <div className="col-span-2 lg:col-span-1 rounded-xl pt-5 lg:pt-0">
                                        <img className="rounded-xl" src={img1} alt="" />
                                    </div>
                                    <p className="col-span-2 lg:col-span-1 contentText">{content2}</p>
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

export default Vision;