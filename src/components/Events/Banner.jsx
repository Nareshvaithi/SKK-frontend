
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation,Autoplay} from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useContext,useEffect } from "react";
import { ContextProvide } from "../../Context_API/contextProvider";
import EventsStore from "../../DataStore/EventsStore";

const Banner = ()=>{
  
    const {eventBanner} = useContext(ContextProvide);

    return(
        <div className="py-28 bg-gray-100">
            <div className="container">
             
                <div className="w-full h-[400px] group relative overflow-hidden rounded-xl">
                    <Swiper
                    
                        modules={[Autoplay,Navigation,Pagination]}
                        autoplay={{
                            delay:2000,
                            disableOnInteraction:false,
                            pauseOnMouseEnter:true
                        }}
                        speed={1500}
                        loop={true}
                        pagination={{
                            el: '.programPagination',
                            clickable: true,
                            bulletClass: 'programPagination-bullet',
                            bulletActiveClass: 'programPagination-bullet-active'
                        }}
                        navigation={{
                            nextEl:".NextProgram",
                            prevEl:".PrevProgram"
                        }}
                        className="w-full h-full rounded-xl">
                       {
                        eventBanner.map((items,index)=>(
                            <SwiperSlide key={index} className="w-full h-full rounded-xl">
                                <img src={items} className="w-full h-full rounded-xl object-cover" alt="" />
                            </SwiperSlide>
                        ))
                       }
                    </Swiper>
                    <button className="NextProgram absolute text-gray-100 text-5xl right-2 top-1/2 z-10"><GrFormNext/></button>
                    <div className="programPagination absolute bottom-5 flex justify-center w-full gap-3 z-10 cursor-pointer"></div>
                    <button className="PrevProgram absolute text-gray-100 text-5xl left-2 top-1/2 z-10"><GrFormPrevious/></button>
                </div>

            </div>
    <EventsStore />
        </div>
    )
}



export default Banner;