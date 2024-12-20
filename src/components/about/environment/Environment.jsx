import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Environmentdata } from "../../../DataStore/Aboutdata";

const Environment = ()=>{
    const {environment} = useContext(ContextProvide);
    return(
        <>
            <div>
                <div className="container">
                    <div className="text-center py-5">
                        <h1 className="headingText">Our Environment</h1>
                        <p className="contentText py-2 w-3/4 mx-auto">At Saraswathy Kala Kendra, we believe that a nurturing environment is essential for fostering creativity, discipline, and passion for the performing arts. Our institute provides a serene, inspiring space where tradition meets modern teaching methods.</p>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {
                            environment.map(({id,environment,details,img})=>(
                                <div key={id} className={`w-full group ${id%2 === 0 ? "mt-[30%]":""}`}>
                                    <div className="w-full relative overflow-hidden rounded-xl">
                                        <img className="rounded-xl w-full h-full group-hover:scale-110 transition-all duration-1000" src={img} alt="" />
                                        <div 
                                        className="rounded-xl absolute inset-0 w-2/3 h-1/2 group-hover:opacity-0 flex flex-col justify-center translate-y-full font-mainFont1 text-gray-700 px-2 bg-white transition-all duration-500">
                                            <h1 className="text-lg font-bold py-2">{environment}</h1>
                                            <p className="font-mainFont2">{details}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Environmentdata/>
        </>
    )
}

export default Environment;