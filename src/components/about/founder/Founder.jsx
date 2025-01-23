import { NavLink } from "react-router-dom";
import founderimg from "../../../assets/Images/about/founder.jpg"
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import { useContext, useState, useEffect, useRef } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Founderdata } from "../../../DataStore/Aboutdata";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/effect-flip';
import axios from "axios";
import Button from "../../Button/Button";
const Founder = ()=>{
    const {founderSocialmedia,studentRev} = useContext(ContextProvide);
    const [latestEvent,setLatestEvent] = useState([]);
    const swiperRef = useRef(null);
   useEffect(() => {
       const fetchbannervideo = async () => {
         try {
           const getBannerVideoLink = await axios.get("https://skk-api.konceptsdandd.com/banner");
           setLatestEvent(getBannerVideoLink.data);
         } catch (error) {
           console.error("Error fetching video links:", error);
         }
       };
       fetchbannervideo();
     }, []);
     useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, [latestEvent]);

    return(
        <>
            <div className="pt-20 pb-10 bg-gray-100">
                <div className="container w-full h-full">
                    <div className="text-center">
                        <h1 className="headingText py-10">Founder of the Saraswathy Kala Kendra</h1>
                    </div>
                    <div className="w-full h-full lg:max-h-[500px] flex flex-col lg:flex-row justify-between gap-5">
                        <div className="w-full lg:w-4/12 h-auto rounded-xl">
                            <img src={founderimg} alt="" className="w-full h-full rounded-xl" />
                        </div>
                        {/* content */}
                        <div className="w-full lg:w-5/12 self-stretch flex flex-col justify-between">
                            <div>
                                <h1 className="font-mainFont1 text-3xl">Smt. Kiran Mayee</h1>
                                <p className="font-mainFont1 text-xl">Bharatanatyam</p>
                                <p className="text-lg font-mainFont2 py-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque, ipsum tempora vero error dolorum velit architecto ratione? Aspernatur tempora enim veritatis quod, dignissimos magni nobis harum minus aliquid? Iusto.
                                </p>
                                <p className="text-lg font-mainFont2 py-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque, ipsum tempora vero error dolorum velit architecto ratione? Aspernatur tempora enim veritatis quod, dignissimos magni nobis harum minus aliquid? Iusto.
                                </p>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row items-start gap-2">
                                <Button
                                text={"Explore Our Courses"}
                                textcolor={"text-white"}
                                hovertextcolor={"group-hover:text-themebrown"}
                                px={"px-2 md:px-4"}
                                py={"py-3"}
                                bg={"bg-themebrown"}
                                hoverbg={"bg-white"}
                                border={"border"}
                                borderColor={"border-themebrown"}
                                />
                                <Button
                                text={"View Our Events"}
                                textcolor={"text-themebrown"}
                                hovertextcolor={"group-hover:text-white"}
                                px={"px-2 md:px-5"}
                                py={"py-3"}
                                bg={"bg-white"}
                                hoverbg={"bg-themebrown"}
                                border={"border"}
                                borderColor={"border-themebrown"}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 flex flex-col justify-between">
                            <div>
                                <div>
                                    <h1 className="font-mainFont1 text-2xl py-3">Follow Us</h1>
                                </div>
                                <div className="w-full h-fit flex gap-3">
                                    {founderSocialmedia.map(({ id, icon, link }) => (
                                        <NavLink key={id} to={link} className="text-3xl bg-gray-500 hover:bg-gray-400 text-white rounded-full p-2">{icon}</NavLink>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <div>
                                    <h1 className="font-mainFont1 text-2xl py-3">Our Latest Events</h1>
                                </div>
                                <Swiper
                                    ref={swiperRef}
                                    className="flex justify-center w-full rounded-xl"
                                    modules={[Autoplay, EffectFade]}
                                    slidesPerView={1}
                                    loop={true}
                                    effect="fade"
                                    speed={500}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                >
                                    {latestEvent.map(({ id, url }) => (
                                        <SwiperSlide className="w-full" key={id}>
                                            <iframe
                                                className="w-full h-40"
                                                src={`https://www.youtube.com/embed/${url}`}
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen
                                            ></iframe>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div>
                                <div>
                                    <h1 className="font-mainFont1 text-2xl py-3">My Students Review</h1>
                                </div>
                                <Swiper
                                    slidesPerView={1}
                                    className="flex justify-center w-full"
                                    modules={[Autoplay, EffectFlip]}
                                    loop={true}
                                    effect="flip"
                                    flipEffect={{
                                        slideShadows: true,
                                    }}
                                    speed={500}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: true,
                                        pauseOnMouseEnter: true,
                                    }}
                                >
                                    {studentRev.map(({ id, stdImg, name, review, skill }) => (
                                        <SwiperSlide
                                            key={id}
                                            className="w-full h-full bg-gray-100">
                                            <div className="flex font-mainFont2 text-xl">
                                                <span className="text-gray-400"><RiDoubleQuotesL size={25} /></span>{review}<span className="text-gray-400"><RiDoubleQuotesR size={25} /></span>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <span className="text-3xl">{stdImg}</span>
                                                </div>
                                                <div>
                                                    <span className="block text-lg font-mainFont2">{name}</span>
                                                    <span className="block text-sm font-mainFont2">{skill}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Founderdata/>
        </>
    )
}

export default Founder;