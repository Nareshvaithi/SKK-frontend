import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import reviewbg from  "../../../assets/Images/home/reviewBg.jpg"
import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Testimonialsdata } from "../../../DataStore/HomeStore";
import 'swiper/css';
import 'swiper/css/navigation';
import { delay, disableInstantTransitions } from "framer-motion";
const Review = ()=>{
    const {testimonials} = useContext(ContextProvide)
    return(
        <>
            <div className="py-10">
                <div className="container">
                    <div className="text-center py-5">
                        <h1 className="headingText">testimonials</h1>
                    </div>
                    <div style={{backgroundImage:`url(${reviewbg})`}} className={`w-full h-[500px] bg-top bg-no-repeat bg-cover px-10 py-10 flex justify-center items-center`}>
                        <Swiper
                        modules={[Autoplay,Navigation]}
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay:3000,
                                disableInstantTransitions:true
                            }}
                            speed={100}
                            lassName="w-full h-full">
                            {
                                testimonials.map(({id,review,img,star,name,skill})=>(
                                    <SwiperSlide className="w-full h-full bg-white">
                                        <div className="w-full h-full px-2 py-3 flex flex-col justify-between">
                                            <div>
                                                <p className="font-mainFont2">{review}</p>
                                            </div>
                                            <div className="flex items-end justify-between">
                                                <div>
                                                    <h1 className="text-xl font-mainFont1">{name}</h1>
                                                    <p className="font-mainFont2">{skill}</p>
                                                    <div className="flex items-center gap-1 text-2xl text-yellow-500">{star}</div>
                                                </div>
                                                <div className="text-8xl text-gray-500">
                                                    {img}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <Testimonialsdata/>
        </>
    )
}


export default Review;