import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";

const Margazh = ()=>{
    const {margazh} = useContext(ContextProvide);
    return(
        <div id="margazhiartfestival" className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Margazhi art festival</h2>
                    <p className="font-mainFont1 pt-2 text-lg lg:text-2xl">- RR Sabha, Mylapore</p>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        margazh.map(({
                            id,
                            margazhImg1,
                            margazhImg2,
                            margazhImg3,
                            margazhImg4,
                            margazhImg5
                        })=>{
                            return <div key={id} className="grid grid-cols-4 gap-3">
                                <img className="col-span-2 rounded-xl" src={margazhImg1} alt="" />
                                <img className="col-span-2 rounded-xl" src={margazhImg2} alt="" />
                                <img className="col-span-2 rounded-xl" src={margazhImg3} alt="" />
                                <img className="col-span-2 rounded-xl" src={margazhImg4} alt="" />
                                <img className="col-span-4 rounded-xl" src={margazhImg5} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Margazh;