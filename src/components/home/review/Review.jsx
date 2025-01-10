import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import reviewbg from  "../../../assets/Images/home/reviewBg.jpg"
import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Testimonialsdata } from "../../../DataStore/HomeStore";
import 'swiper/css';
import 'swiper/css/navigation';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RiDoubleQuotesR,RiDoubleQuotesL } from "react-icons/ri";
const Review = ()=>{
    const {testimonials} = useContext(ContextProvide)
    return(
        <>
            <div className="py-10">
                <div className="container">
                    <div className="text-center py-5">
                        <h1 className="headingText">Testimonials</h1>
                    </div>
                    <div style={{backgroundImage:`url(${reviewbg})`}} className={`w-full h-auto py-10 bg-top bg-no-repeat bg-cover px-3 lg:px-10 flex justify-center items-center relative`}>
                        <Swiper
                        modules={[Autoplay,Navigation]}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{
                                delay:3000,
                                disableInstantTransitions:true,
                                pauseOnMouseEnter:true
                            }}
                            speed={1000}
                            navigation={{
                                nextEl:".reviewNext",
                                prevEl:".reviewPrev"
                            }}
                            breakpoints={{
                                0:{
                                    slidesPerView: 1,
                                    spaceBetween:5
                                },
                                640:{
                                    slidesPerView: 2,
                                    spaceBetween:5
                                },
                                1024:{
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            }}
                           >
                            {
                                testimonials.map(({id,review,img,star,name,skill})=>(
                                    <SwiperSlide key={id} className="w-full h-full bg-white/80">
                                        <div className="w-full h-[300px] px-2 py-3 flex flex-col justify-between">
                                            <div style={{backgroundImage:`url(${<RiDoubleQuotesL/>})`}}>
                                                <p className="text-sm font-mainFont2 line-clamp-6"><sup><RiDoubleQuotesL className="inline text-themebrown/70 text-xl"/></sup>{review} <sup><RiDoubleQuotesR className="text-themebrown/70 inline text-xl"/></sup></p>
                                                <p className="text-sm font-mainFont2 text-blue-800 cursor-pointer hover:underline w-fit">read more</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <h1 className="text-lg lg:text-xl font-mainFont1">{name}</h1>
                                                    <p className="font-mainFont2">{skill}</p>
                                                    <div className="flex items-center gap-1 text-2xl text-yellow-500">{star}</div>
                                                </div>
                                                <div className="text-8xl text-gray-300">
                                                     {img}
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <button className="reviewNext absolute right-2 active:animate-ping p-1 lg:p-2 text-xl lg:text-2xl rounded-full text-white bg-[#ff8031] z-10"><GrFormNext/></button>
                        <button className="reviewPrev absolute left-2 active:animate-ping p-1 lg:p-2 text-xl lg:text-2xl rounded-full text-white bg-[#ff8031] z-10"><GrFormPrevious/></button>
                    </div>
                </div>
            </div>
            <Testimonialsdata/>
        </>
    )
}


export default Review;