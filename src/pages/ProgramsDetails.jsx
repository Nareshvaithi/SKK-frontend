import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation,Autoplay} from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const CoursesDetails = ()=>{
    const location = useLocation();
    const {id,img,program_name,program_subname,slider,intro} = location.state;
    return(
        <div className="pt-32">
            <div className="container">
                <div className="text-center py-5">
                    <h1 className="headingText">{program_name}</h1>
                    <p className="font-mainFont1 py-2">{program_subname}</p>
                </div>
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
                        className="w-full h-ful rounded-xl">
                       {
                        slider.map((items,index)=>(
                            <SwiperSlide key={index} className="w-full h-full rounded-xl">
                                <img src={items} className="w-full h-full rounded-xl" alt="" />
                            </SwiperSlide>
                        ))
                       }
                    </Swiper>
                    <div className="absolute w-full h-full inset-0 z-10 text-white bg-black/20 rounded-xl">
                        <p className="w-1/2 pt-20 pl-20 text-xl font-mainFont1 leading-8">
                            {intro}
                        </p>
                    </div>
                    <button className="NextProgram absolute text-gray-200 text-5xl right-2 top-1/2 z-10"><GrFormNext/></button>
                    <div className="programPagination absolute bottom-5 flex justify-center w-full gap-3 z-10"></div>
                    <button className="PrevProgram absolute text-gray-200 text-5xl left-2 top-1/2 z-10"><GrFormPrevious/></button>
                </div>
            </div>
        </div>
    )
}

export default CoursesDetails;