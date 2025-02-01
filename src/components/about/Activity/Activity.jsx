import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { GoDot } from "react-icons/go";

const Activity = ()=>{
    const {activity} = useContext(ContextProvide);
    return(
        <div className="py-0 lg:py-5">
             <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Activities</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        activity.map(({id,content1,content2,points,activityImg1,activityImg2,activityImg3})=>{
                            return <div key={id} className="grid grid-cols-3 gap-3">
                                <p className="contentText col-span-3">{content1}</p>
                                <div className="col-span-3">
                                    <p className="contentText">{content2}</p>
                                        {
                                            points.map(({id,point})=>{
                                                return <p key={id} className={`flex items-start py-2`}>
                                                    <span className="pt-1"><GoDot/></span>
                                                    <span className="contentText">{point}</span>
                                                </p>
                                            })
                                        }
                                </div>
                                <img className="col-span-1 w-full rounded-xl" src={activityImg1} alt="" />
                                <img className="col-span-1 w-full rounded-xl" src={activityImg2} alt="" />
                                <img className="col-span-1 w-full rounded-xl" src={activityImg3} alt="" />
                            </div>
                        })
                    }
                </div>
             </div>
        </div>
    )
}

export default Activity;