import { useContext, useEffect } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FrontBannerdata } from "../../../DataStore/HomeStore";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import Button from "../../Button/Button";
import { useNavigate, useLocation } from "react-router-dom";
const FrontBannerSlider = ()=>{
   
    const navigate = useNavigate();
    const {frontBanner} = useContext(ContextProvide);
    const location = useLocation();
    useEffect(() => {
        if (location.state?.hash) {
            const element = document.getElementById(location.state.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.state]);
    return(
        <div className="pt-24">
            <div className="w-full h-full relative group overflow-hidden">
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
                    el:".frontBannerPagination",
                    bulletClass:"frontBannerPaginationBullet",
                    bulletActiveClass:"frontBannerPaginationActive"
                }}
                >
                    { frontBanner.map(({id,windowBanner,mobileBanner,name,to})=>{
                        return <SwiperSlide key={id} className="w-full h-full">
                            <div className="w-full h-full relative overflow-hidden">
                                <img className="w-full h-full object-cover" src={windowBanner} alt="" />
                                <div className={` text-themebrown absolute inset-0 z-20 flex items-center ${id === 2 ? "justify-end pr-20" : "justify-around"} w-full h-full`}>
                                    <div>{" "}</div>
                                    <div className={`${!name ? "hidden" : "block"} w-fit h-fit`}>
                                        <h1 className="headingText">Saraswathy Kala Kendra</h1>
                                        <p className="font-mainFont1 text-2xl">School of Fine Arts</p>
                                        <div onClick={()=>{
                                            const [path, hash] = to.split("#");
                                            navigate(path, {
                                                replace: false,
                                                state: { hash },
                                            }); 
                                        }} className="mt-5">
                                            <Button
                                                text={name}
                                                bg={"bg-themebrown"}
                                                hoverbg={"group-hover:bg-white"}
                                                textcolor={"text-white"}
                                                hovertextcolor={"group-hover:text-themebrown"}
                                                px={"px-5"}
                                                py={"py-3"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })  
                    }
                </Swiper>
                <div className="inset-0 w-full h-full absolute flex justify-between items-center px-5">
                    <div className="cursor-pointer frontbanner-left z-20 text-4xl text-gray-700 opacity-0 group-hover:opacity-100"><RiArrowLeftWideFill/></div>
                    <div className="cursor-pointer frontbanner-right z-20 text-4xl text-gray-700 opacity-0 group-hover:opacity-100"><RiArrowRightWideFill/></div>
                </div>
                <div className="frontBannerPagination w-fit h-fit inset-0 absolute z-20 bottom-20 flex justify-center"></div>
            </div>
            <FrontBannerdata/>
        </div>
    );
};

export default FrontBannerSlider;