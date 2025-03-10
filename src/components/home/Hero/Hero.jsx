import { useContext, useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Herodata } from "../../../DataStore/HomeStore";

const Hero = () => {
  const { bannerVideo, bannerSlider, shorts } = useContext(ContextProvide);
  const [playing, setPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setPlaying(true), 1000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMuted(false);
        } else {
          setIsMuted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-auto py-10 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
          {/* Video Section */}
          <div className="w-full h-full">
            <div
              id="youtubevideo"
              className="relative group w-full h-auto rounded-xl overflow-hidden"
              ref={videoRef}
            >
              <ReactPlayer
                url={bannerVideo}
                playing={playing}
                loop={true}
                height={"100%"}
                width={"100%"}
                controls
                muted={isMuted}
                onClick={() => setIsMuted(false)}
              />
            </div>

            {/* Shorts Slider */}
            <div id="youtubeshorts" className="mt-5 relative group overflow-hidden">
              <Swiper
                className="w-full h-full"
                modules={[Autoplay, Navigation]}
                loop={true}
                slidesPerView={2}
                spaceBetween={20}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".shorts-next",
                  prevEl: ".shorts-prev",
                }}
              >
                {shorts.map(({ _id, url }) => (
                  <SwiperSlide key={_id}>
                    <div className="rounded-xl overflow-hidden">
                      <ReactPlayer
                        url={`https://www.youtube.com/embed/${url}`}
                        width="100%"
                        height="130px"
                        controls={true}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Shorts Navigation Buttons */}
              <button className="shorts-next opacity-0 group-hover:opacity-100 absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-900 rounded-full shadow-md z-10">
                <RiArrowLeftWideFill size={30} />
              </button>
              <button className="shorts-prev opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-900 rounded-full shadow-md z-10">
                <RiArrowRightWideFill size={30} />
              </button>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="w-full relative group overflow-hidden">
            <Swiper
              className="w-full h-full rounded-none lg:rounded-xl"
              modules={[Autoplay,Navigation,Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              speed={1000}
              pagination={{
                enabled:true,
                el:'.imageBannerPagination',
                bulletClass:'imageBannerBullet',
                bulletActiveClass:'imageBannerBulletActive'
              }}

            >
              {bannerSlider.map(({ _id, url }) => (
                <SwiperSlide key={_id}>
                  <img
                    src={url}
                    className="w-full h-full object-cover"
                    alt="Banner Slide"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
              <button className="custom-next absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 w-10 h-full">
                <RiArrowLeftWideFill size={50} />
              </button>
              <button className="custom-prev absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 w-10 h-full">
                <RiArrowRightWideFill size={50} />
              </button>
              <div className="imageBannerPagination absolute flex gap-2 justify-center w-fit h-fit z-20 inset-0"></div>
          </div>
        </div>
      </div>
      <Herodata />
    </div>
  );
};

export default Hero;
