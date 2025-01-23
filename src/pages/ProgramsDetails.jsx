import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation,Autoplay} from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useContext } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import { Gurusdata } from "../DataStore/HomeStore";
import Button from "../components/Button/Button";
const CoursesDetails = ()=>{
    const navigate = useNavigate()
    const {gurus} = useContext(ContextProvide);
    const location = useLocation();
    const {id,img,program_name,program_subname,slider,intro,history_content,gallery} = location.state;
    return(
        <div className="py-28 bg-gray-100">
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
                        className="w-full h-full rounded-xl">
                       {
                        slider.map((items,index)=>(
                            <SwiperSlide key={index} className="w-full h-full rounded-xl">
                                <img src={items} className="w-full h-full" alt="" />
                            </SwiperSlide>
                        ))
                       }
                    </Swiper>
                    <div className="absolute w-full h-full inset-0 z-10 text-white bg-black/20 rounded-xl flex items-center">
                        <p className="ml-auto w-1/2 pr-20 text-sm lg:text-xl right-0 font-mainFont1 leading-tight">
                            {intro}
                        </p>
                    </div>
                    <button className="NextProgram absolute text-gray-100 text-5xl right-2 top-1/2 z-10"><GrFormNext/></button>
                    <div className="programPagination absolute bottom-5 flex justify-center w-full gap-3 z-10 cursor-pointer"></div>
                    <button className="PrevProgram absolute text-gray-100 text-5xl left-2 top-1/2 z-10"><GrFormPrevious/></button>
                </div>
                    <div className="py-10">
                        <div className="text-center pb-10">
                            <h1 className="headingText">History of {program_name}</h1>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row items-stretch gap-5">
                            <div className="w-full lg:w-1/2 rounded-xl">
                                <img src={img} className="w-full h-full rounded-xl object-cover" alt="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="font-mainFont2 text-lg">{history_content}</p>
                            </div>
                        </div>
                    </div>
                <div className="py-10">
                    <h1 className="headingText text-center pb-10">The Pillars of {program_name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            gurus.filter((items)=>items.prof === program_name).map(({id,prof,name,about,url})=>(
                                <div key={id} className="w-full h-[500px] relative group overflow-hidden">
                                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                                        <img className="w-full h-full rounded-t-xl rounded-b-2xl object-cover" src={url} alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    </div>
                                    <div className="p-5 rounded-b-xl absolute z-10 w-full h-auto text-gray-700 group-hover:text-white bottom-0 bg-white group-hover:bg-transparent transition-colors duration-1000">
                                        <h1 className="text-2xl font-mainFont1 pb-2">{name}</h1>
                                        <h2 className="text-xl font-mainFont1">{prof}</h2>
                                        <p className="line-clamp-2 leading-5 font-mainFont2">{about}</p>
                                        <button className="font-mainFont2 text-sm border-[1px] border-themebrown/50 text-themebrown group-hover:text-white px-3 py-1 group-hover:border-white mt-2">
                                            View Details
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className="w-full bg-white">
                <div className="text-center py-5">
                    <h1 className="headingText">Our Exclusive Clicks</h1>
                </div>
                <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-5 rounded-xl">
                    {
                        gallery.map(({id,img})=>(
                            <div onClick={()=>{navigate('/gallery');window.scrollTo(0,0)}} key={id} className={`${id === 2 ? "row-span-2":""} cursor-pointer w-full h-full relative group overflow-hidden rounded-xl`}>
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
            <Gurusdata/>
        </div>
    )
}

export default CoursesDetails;