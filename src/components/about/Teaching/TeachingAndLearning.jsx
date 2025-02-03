import { useContext } from "react";
import Aboutdata from "../../../DataStore/Aboutdata";
import { ContextProvide } from "../../../Context_API/contextProvider";

const TeachingAndLearning = ()=>{
    const {teachAndLearn} = useContext(ContextProvide);
    return(
        <div className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Teaching and Learning</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        teachAndLearn.map(({
                            id,
                            content1,
                            content2,
                            content4,
                            content3,
                            content5,
                            content6,
                            teachingImg1,
                            teachingImg2,
                            teachingImg3,
                            teachingImg4,
                            teachingImg5,
                            teachingImg6,
                        })=>{
                            return <div key={id} className="grid grid-cols-3 gap-3">
                                    <p className="contentText col-span-2 self-center">{content1}</p>
                                    <img src={teachingImg1} className="col-span-1 rounded-xl h-full object-cover" alt="" />
                                    <img src={teachingImg2} className="col-span-3 lg:col-span-1 rounded-xl h-full object-cover" alt="" />
                                    <p className="contentText col-span-3 lg:col-span-2">{content2}</p>
                                    <p className="contentText col-span-3 lg:col-span-2">{content3}</p>
                                    <img className="col-span-3 lg:col-span-1 rounded-xl h-full object-cover" src={teachingImg3} alt="" />
                                    <img className="rounded-xl col-span-3 lg:col-span-1 h-full object-cover" src={teachingImg4} alt="" />
                                    <p className="rounded-xl col-span-3 lg:col-span-2 contentText">{content4}</p>
                                    <p className="contentText col-span-3 lg:col-span-2">{content5}</p>
                                    <img src={teachingImg5} className="rounded-xl col-span-3 lg:col-span-1" alt="" />
                                    <img className="col-span-3 lg:col-span-2 rounded-xl" src={teachingImg6} alt="" />
                                    <p className="contentText col-span-3 lg:col-span-1">{content6}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TeachingAndLearning;