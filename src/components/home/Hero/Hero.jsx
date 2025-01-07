import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import axios from 'axios';

const Hero = () => {
  const [videolink, setVideolink] = useState([]);
  const [shortslink, setShortslink] = useState([]);
  const [sliderData,setSliderData] = useState([]);

  const getYouTubeVideoID = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
    return match ? match[1] : null;
  };
  
  useEffect(() => {
    const fetchbannervideo = async () => {
      try {
        const getBannerVideoLink = await axios.get("https://skk-api.konceptsdandd.com/banner");
        setVideolink(getBannerVideoLink.data);
      } catch (error) {
        console.error("Error fetching video links:", error);
      }
    };
    const fetchshortslink = async () => {
      try {
        const getShortsLink = await axios.get("https://skk-api.konceptsdandd.com/bannershorts");
        setShortslink(getShortsLink.data);
      } catch (error) {
        console.error("Error fetching video links:", error);
      }
    };
    const fetchsliderlink = async ()=>{
      try{
        const getsliderdata = await axios.get("https://skk-api.konceptsdandd.com/bannerimages");
        setSliderData(getsliderdata.data);
      }
      catch(error){
        console.log(error)
      }
    }

    fetchbannervideo();
    fetchshortslink();
    fetchsliderlink();
  }, []);

  return (
    <div className="w-full h-auto pt-28 pb-10 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
            <div className="w-full h-full">
                <div className="relative group w-full h-[300px]">
                  {/* Custom Previous Button */}
                  <button
                    className="youtubebanner-next absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 w-10 h-full"
                  >
                    <RiArrowLeftWideFill size={50} />
                  </button>

                  {/* Custom Next Button */}
                  <button
                    className="youtubebanner-prev absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 w-10 h-full"
                  >
                    <RiArrowRightWideFill size={50} />
                  </button>

                  {/* Swiper Component */}
                  <Swiper
                    className="w-full h-full rounded-none lg:rounded-xl"
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: '.youtubebanner-next',
                      prevEl: '.youtubebanner-prev',
                    }}
                    speed={1000}
                  >
                    {videolink.map(({ _id, title, url }) => (
                      <SwiperSlide key={_id}>
                      <iframe
                        className="w-full h-full"
                        title={title}
                        src={`https://www.youtube.com/embed/${url}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-presentation"
                        allowFullScreen
                      />

                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* Shorts Links Grid */}
                <div className="mt-5">
                  <div className="grid grid-cols-3 gap-5">
                    {shortslink.map(({ _id, title, url }) => (
                      <iframe
                        key={_id}
                        className="w-full h-[130px] rounded-none lg:rounded-xl"
                        src={url}
                        frameBorder="0"
                        title={title}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative group">
                <Swiper
                className="w-full h-full rounded-none lg:rounded-xl"
                modules={[Autoplay,Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay:2000,
                  disableOnInteraction:false
                }}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                speed={1000}
                >
                    {
                      sliderData.map(({_id,url})=>(
                        <SwiperSlide
                        key={_id}
                        >
                          <img src={url} className="w-full h-full object-cover" alt="" />
                        </SwiperSlide>
                      ))
                    }
                </Swiper>
                <button className="custom-next absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 w-10 h-full"><RiArrowLeftWideFill size={50}/></button>
                <button className="custom-prev absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10   w-10 h-full"><RiArrowRightWideFill size={50}/></button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
