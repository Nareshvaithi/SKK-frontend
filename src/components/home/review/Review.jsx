import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import reviewbg from  "../../../assets/Images/home/reviewBg.jpg"
import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Testimonialsdata } from "../../../DataStore/HomeStore";
import 'swiper/css';
import 'swiper/css/navigation';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RiDoubleQuotesR } from "react-icons/ri";
const Review = ()=>{
    const {testimonials} = useContext(ContextProvide)
    return(
        <>
            <div id="testimonials" className="py-10 bg-gray-100">
                <div className="container">
                    <div className="text-center pb-5">
                        <h1 className="headingText">Testimonials</h1>
                    </div>
                    <div style={{backgroundImage:`url(${reviewbg})`}} className={`w-full h-auto py-10 bg-top bg-no-repeat bg-cover px-3 lg:px-10 flex justify-center items-center relative rounded-xl`}>
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
                                    <SwiperSlide key={id} className="w-full h-full bg-black/70 rounded-xl group relative overflow-hidden">
                                        <div className="w-full h-[300px] px-10 py-10 flex flex-col justify-between">
                                            <div className="text-white">
                                                <p className="text-sm font-mainFont2 line-clamp-6">{review}</p>
                                                <p  className="text-sm font-mainFont2 w-fit underline cursor-pointer hover:text-blue-600 relative z-20">read more</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="text-white">
                                                    <h1 className="text-lg lg:text-xl font-mainFont1">{name}</h1>
                                                    <p className="font-mainFont2">{skill}</p>
                                                    <div className="flex items-center gap-1 text-2xl text-yellow-500">{star}</div>
                                                </div>
                                                <div className="text-4xl text-gray-300">
                                                     {img}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-5xl absolute w-full h-full z-10 text-white inset-0"><RiDoubleQuotesR/></div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <button className="reviewNext absolute right-1 active:animate-ping text-xl lg:text-4xl rounded-full text-black z-10"><GrFormNext/></button>
                        <button className="reviewPrev absolute left-1 active:animate-ping text-xl lg:text-4xl rounded-full text-black z-10"><GrFormPrevious/></button>
                    </div>
                </div>
            </div>
            <Testimonialsdata/>
        </>
    )
}


export default Review;