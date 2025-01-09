import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { HomegalleryData } from "../../../DataStore/HomeStore";

const HomeGallery = ()=>{
    const {homegallery} = useContext(ContextProvide);
    return(
        <>
        <div className="py-10 w-full bg-white">
            <div className="container">
                <div className="text-center py-5">
                    <h1 className="headingText">Gallery</h1>
                </div>
                <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-5 rounded-xl">
                    {
                        homegallery.map(({id,img})=>(
                            <div key={id} className={`${id === 2 ? "row-span-2":""} w-full h-full relative group overflow-hidden rounded-xl`}>
                                <img src={img} alt="" className="w-full h-full rounded-xl group-hover:scale-110 transition-all duration-1000" />
                                <div className="absolute rounded-xl w-full h-full bg-gradient-to-t from-themebrown to-transparent inset-0 overflow-hidden translate-y-full group-hover:translate-y-0 transition-all duration-1000 ease-in-out">
                                    <div className="flex justify-center items-center w-full h-full">
                                        <h1 className={`font-mainFont1 ${id === 2 ? "text-5xl": "text-2xl"} font-light text-white`}>View More</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <HomegalleryData/>
        </>
    )
}

export default HomeGallery;