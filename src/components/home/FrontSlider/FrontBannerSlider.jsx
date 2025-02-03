import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FrontBannerdata } from "../../../DataStore/HomeStore";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import Button from "../../Button/Button";
const FrontBannerSlider = ()=>{
    const {frontBanner} = useContext(ContextProvide);
    return(
        <div className="pt-24">
            <div className="w-full h-full relative group">
                <Swiper
                className="w-full h-full"
                modules={[Autoplay,Navigation,Pagination]}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:true,
                    pauseOnMouseEnter:true,
                }}
                speed={2000}
                loop={true}
                navigation={{
                    nextEl:'.frontbanner-right',
                    prevEl:'.frontbanner-left'
                }}
                pagination={{
                    clickable:true,
                }}
                >
                    { frontBanner.map(({id,windowBanner,mobileBanner})=>{
                        return <SwiperSlide key={id} className="w-full h-full">
                            <div className="w-full h-full relative overflow-hidden">
                                <img className="w-full h-full object-cover" src={windowBanner} alt="" />
                                <div className={`${id === 2 ? "block" : "hidden"} text-white absolute inset-0 z-20 flex items-center justify-around w-full h-full`}>
                                    <div>{" "}</div>
                                    <div className="w-fit h-fit">
                                        <h1 className="headingText">Saraswathy Kala Kendra</h1>
                                        <p className="font-mainFont1 text-2xl">School of Fine Arts</p>
                                        <div className="mt-5">
                                        <Button
                                        text={"Explore Our Courses"}
                                        link={'/courses'}
                                        bg={"bg-themebrown"}
                                        hoverbg={"group-hover:bg-white"}
                                        px={"px-5"}
                                        py={"py-3"}
                                        textcolor={"text-white"}
                                        hovertextcolor={"group-hover:text-themebrown"}
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })  
                    }
                </Swiper>
                {/* <div className="w-full cursor-pointer frontbanner-left absolute left-5 top-1/2 inset-0 z-20 text-4xl text-gray-900"><RiArrowLeftWideFill/></div>
                <div className="w-full cursor-pointer frontbanner-right absolute right-5 top-1/2 inset-0 z-20 text-4xl text-gray-900"><RiArrowRightWideFill/></div> */}
            </div>
            <FrontBannerdata/>
        </div>
    );
};

export default FrontBannerSlider;