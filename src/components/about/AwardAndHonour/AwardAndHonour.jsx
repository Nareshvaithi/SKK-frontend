import { useContext } from "react"
import { ContextProvide } from "../../../Context_API/contextProvider"

const AwardAndHonour = ()=>{
    const {awardAndHonour} = useContext(ContextProvide);
    return(
        <div className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Honours and Awards</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        awardAndHonour.map(({
                            id,
                            content1,
                            content2,
                            content3,
                            awardImg1,
                            awardImg2,
                            awardImg3,
                            awardImg4,
                            awardImg5,
                            awardImg6,
                            awardImg7
                        })=>{
                            return <div key={id} className="grid grid-cols-3 gap-3">
                                <p className="col-span-2 contentText">{content1}</p>
                                <img className="col-span-1 h-full object-cover rounded-xl" src={awardImg1} alt="" />
                                <img className="col-span-2 h-full object-cover rounded-xl" src={awardImg2} alt="" />
                                <img className="col-span-1 h-full object-cover rounded-xl" src={awardImg4} alt="" />
                                <p className="self-center contentText col-span-3">{content2}</p>
                                <p className="contentText col-span-3">{content3}</p>
                                <img className="col-span-1 rounded-xl h-full object-cover" src={awardImg3} alt="" />
                                <img className="h-full object-cover rounded-xl" src={awardImg5} alt="" />
                                <img className="h-full object-cover rounded-xl" src={awardImg6} alt="" />
                                <img className="col-span-3 h-full object-cover rounded-xl" src={awardImg7} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AwardAndHonour;