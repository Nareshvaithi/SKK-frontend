import { NavLink } from "react-router-dom";
import founderimg from "../../../assets/Images/about/founder.jpg"
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import { useContext, useState, useEffect } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Founderdata } from "../../../DataStore/Aboutdata";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/effect-flip';
import axios from "axios";
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
            swiperRef.current.swiper.update(); // Reinitialize Swiper after data load
        }
    }, [latestEvent]);

    return(
        <>
            <div className="pt-28">
                <div className="container w-full h-full">
                    <div className="text-center">
                        <h1 className="headingText py-10">Founder of the Saraswathy Kala Kendra</h1>
                    </div>
                    <div className="bg-gray-100 w-full h-full rounded-xl p-2 flex flex-col lg:flex-row justify-between gap-5 items-start">
                        <div className="w-full lg:w-4/12 h-full">
                            <div className="rounded-xl">
                                <img src={founderimg} alt="" className="w-full h-full rounded-xl" />
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12 h-full flex flex-col justify-between">
                           <div>
                                <h1 className="font-mainFont1 text-3xl">Founder Name</h1>
                                <p className="font-mainFont1 text-xl">Style</p>
                                <p className="text-lg font-mainFont2 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque, ipsum tempora vero error dolorum velit architecto ratione? Aspernatur tempora enim veritatis quod, dignissimos magni nobis harum minus aliquid? Iusto.</p>
                                <p className="text-lg font-mainFont2 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque, ipsum tempora vero error dolorum velit architecto ratione? Aspernatur tempora enim veritatis quod, dignissimos magni nobis harum minus aliquid? Iusto.</p>
                           </div>
                           <div className="flex gap-5">
                                <NavLink className={"px-3 py-2 border border-themebrown hover:bg-white hover:text-themebrown bg-themebrown text-white rounded-xl font-mainFont2 text-lg transition-colors duration-500"}>View Our Events</NavLink>
                                <NavLink className={"px-3 py-2 border border-themebrown text-themebrown rounded-xl font-mainFont2 text-lg"}>Contact Us</NavLink>
                           </div>
                        </div>
                        <div className="w-full lg:w-3/12 h-full">
                            <div>
                                <div className="">
                                    <h1 className="font-mainFont1 text-2xl py-3">Follow Me</h1>
                                </div>
                                <div className="w-full h-full flex gap-3">
                                    {
                                        founderSocialmedia.map(({id,icon,link})=>(
                                            <NavLink key={id} to={link} className={"text-3xl bg-gray-500 hover:bg-gray-400 text-white rounded-full p-2"}>{icon}</NavLink>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <div className="">
                                    <h1 className="font-mainFont1 text-2xl py-3">Our Latest Events</h1>
                                </div>
                                <Swiper
                                  ref={swiperRef}
                                  className="flex justify-center w-full"
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
                                    {
                                        latestEvent.map(({id,url})=>(
                                            <SwiperSlide className="w-full" key={id}>
                                                <iframe
                                                    className="w-full h-40" 
                                                    src={url} 
                                                    allow="autoplay; encrypted-media" 
                                                    allowFullScreen 
                                                 ></iframe>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div>
                                <div className="">
                                    <h1 className="font-mainFont1 text-2xl py-3">My Students Review</h1>
                                </div>
                                <Swiper
                                slidesPerView={1}
                                className="flex justify-center w-full"
                                modules={[Autoplay,EffectFlip]}
                                loop={true}
                                effect="flip"
                                flipEffect={{
                                    slideShadows: true,
                                  }}
                                speed={500}
                                autoplay={{
                                    delay:3000,
                                    disableOnInteraction:true,
                                    pauseOnMouseEnter: true
                                }} 
                                >
                                    {
                                      studentRev.map(({id,stdImg,name,review,skill})=>(
                                        <SwiperSlide
                                        key={id}
                                        className="w-full h-full bg-gray-100">
                                            <div className="flex font-mainFont2 text-xl">
                                                <span className="text-gray-400"><RiDoubleQuotesL size={25}/></span>{review}<span className="text-gray-400"><RiDoubleQuotesR size={25}/></span> 
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
                                      ))  
                                    }
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