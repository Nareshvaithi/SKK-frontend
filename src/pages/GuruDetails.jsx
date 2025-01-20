import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Guruscomp from "../components/home/gurus/Gurus";

const GuruDetails = ()=>{
    const location = useLocation();
    const {_id,name,about,url,prof,facebook,instagram} = location.state; 
    return(
        <div className="pt-28 pb-10 bg-gray-100">
            <div className="container">
                <div className="bg-white w-full rounded-xl p-2 lg:p-5">
                    <h1 className="headingText text-center pb-5">{name}</h1>
                    <div className="flex flex-col lg:flex-row w-full h-full items-start gap-5">
                        <div className="w-full lg:w-2/6 rounded-xl flex flex-col justify-between items-center">
                            <img className="w-full h-full rounded-xl object-cover" src={url} alt="" />
                            <div className="">
                                <h1 className="headingText">{name}</h1>
                                <h2 className="contentText">{prof}</h2>
                            </div>
                            <div className="flex gap-5 items-center justify-center pt-5">
                                <AiOutlineFacebook className="text-2xl lg:text-4xl"/>
                                <AiOutlineInstagram className="text-2xl lg:text-4xl"/>
                            </div>
                        </div>
                        <div className="w-full lg:w-4/6">
                            <h1 className="text-xl font-semibold pb-1 font-mainFont1">About Me</h1>
                            <p className="text-sm lg:text-lg font-mainFont2 pb-3">{about}</p>
                            <h1 className="text-xl font-semibold pb-1 font-mainFont1">Experience</h1>
                            <p className="text-sm lg:text-lg font-mainFont2 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis debitis minus quod quis omnis totam laudantium, fugit corporis blanditiis alias, provident a expedita iste ipsum, facilis esse veniam! Dolorum, minus!</p>
                            <h1 className="text-xl font-semibold pb-1 font-mainFont1">Achivements</h1>
                            <p className="text-sm lg:text-lg font-mainFont2 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis debitis minus quod quis omnis totam laudantium, fugit corporis blanditiis alias, provident a expedita iste ipsum, facilis esse veniam! Dolorum, minus!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Guruscomp/>
        </div>
    )
}

export default GuruDetails;