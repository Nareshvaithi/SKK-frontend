import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";

const TVshow = ()=>{
    const {tvShow} = useContext(ContextProvide);
    return (
        <div id="tvshow" className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">TV Shows</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        tvShow.map(({
                            id,
                            content1,
                            content2,
                            content3,
                            tvshowImg1,
                            tvshowImg2,
                            tvshowImg3,
                            tvshowImg4,
                            tvshowImg5,
                            tvshowImg6,
                            tvshowImg7,
                            tvshowImg8,
                        })=>{
                            return <div key={id} className="grid grid-cols-4 gap-3">
                                <p className="contentText col-span-4">{content1}</p>
                                <img className="col-span-2 rounded-xl" src={tvshowImg1} alt="" />
                                <img className="col-span-2 h-full object-cover rounded-xl" src={tvshowImg2} alt="" />
                                <p className="contentText col-span-4">{content2}</p>
                                <img className="col-span-2 rounded-xl" src={tvshowImg3} alt="" />
                                <img className="col-span-2 rounded-xl" src={tvshowImg4} alt="" />
                                <p className="contentText col-span-4">{content3}</p>
                                <img className="col-span-2 rounded-xl" src={tvshowImg5} alt="" />
                                <img className="col-span-2 rounded-xl" src={tvshowImg6} alt="" />
                                <img className="col-span-2 rounded-xl" src={tvshowImg7} alt="" />
                                <img className="col-span-2 rounded-xl" src={tvshowImg8} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TVshow;