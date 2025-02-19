import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";

const AnnaiMozhiye = ()=>{
    const {annaiMozhiye} = useContext(ContextProvide);
    return (
        <div id="annaimoziye" className="py-0 lg:py-5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start container py-5">
                <div className="w-full lg:w-[30%] py-5">
                    <h2 className="headingText text-wrap text-center lg:text-left">Annai Mozhiye...</h2>
                </div>
                <div className="w-full lg:w-[70%] bg-white p-1 lg:p-5 rounded-xl border border-gray-200">
                    {
                        annaiMozhiye.map(({
                            id,
                            content1,
                            annaiMozhiyeImg1,
                            annaiMozhiyeImg2,
                            annaiMozhiyeImg3,
                            annaiMozhiyeImg4,
                        })=>{
                            return <div key={id} className="grid grid-cols-4 gap-3">
                                <p className="contentText col-span-4">{content1}</p>
                                <img className="rounded-xl col-span-2" src={annaiMozhiyeImg1} alt="" />
                                <img className="rounded-xl col-span-2" src={annaiMozhiyeImg2} alt="" />
                                <img className="rounded-xl col-span-2" src={annaiMozhiyeImg3} alt="" />
                                <img className="rounded-xl col-span-2" src={annaiMozhiyeImg4} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AnnaiMozhiye;