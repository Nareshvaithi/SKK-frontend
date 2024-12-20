import axios from "axios";
import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const Guruscomp = () => {
    const [gurus, setGurus] = useState([]);

    useEffect(() => {
        const fetchGurus = async () => {
            const getGurus = await axios.get('https://skk-api.konceptsdandd.com/homegurus');
            setGurus(getGurus.data);
        }

        fetchGurus();
    }, []);

    const handleArrow = () => {
        return setTimeout(() => {
            return 'bg-red-500';
        }, 100);
    }

    return (
        <div id="gurus" className="py-10 bg-gray-100 text-gray-700">
            <div className="container">
                <div className="">
                    <div className="text-center pb-5 w-5/6 mx-auto">
                        <h1 className="headingText py-2 text-gray-900">Our Gurus</h1>
                        <p className="contentText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis quasi nisi. 
                            Veritatis repudiandae et architecto. Nostrum debitis dolore iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. iste!
                        </p>
                    </div>
                    <div className="bg-white py-10 relative rounded-xl">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            loop={true}
                            speed={1000}
                            navigation={{
                                nextEl: '.custom-gurus-next',
                                prevEl: '.custom-gurus-prev',
                            }}
                            pagination={{
                                el: '.custom-pagination',
                                clickable: true,
                                bulletClass: 'custom-bullet',
                                bulletActiveClass: 'custom-bullet-active'
                            }}
                            autoplay={{
                                delay:2000,
                                disableOnInteraction:false
                            }}
                            
                            breakpoints={{
                              
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween:0
                                },
                               
                                640: {
                                    slidesPerView: 2,
                                },
                                
                                1024: {
                                    slidesPerView: 3,
                                },
                              
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: -100
                                }
                            }}
                        >
                            {
                                gurus.map(({ _id, name, about, url, prof }) => (
                                    <SwiperSlide key={_id} className="flex w-[200px] h-[200px]">
                                        <div className="w-[200px] lg:w-[150px] h-[200px] lg:h-[150px] mx-auto">
                                            <img src={url} className="w-full h-full rounded-xl" alt={name} />
                                        </div>
                                        <div className="text-center pt-3">
                                            <h1 className="font-mainFont1 text-xl">{name}</h1>
                                            <h2 className="font-mainFont2">{prof}</h2>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                     
                        <button onClick={handleArrow} className={`custom-gurus-next absolute left-5 top-1/2 transform -translate-y-1/2 transition-opacity items-center justify-center z-10 w-fit h-fit p-2 border border-gray-400 rounded-full bg-white hidden lg:flex`}>
                            <RiArrowLeftWideFill size={20} />
                        </button>
                        <button onClick={handleArrow} className={`custom-gurus-prev absolute right-5 top-1/2 transform -translate-y-1/2 transition-opacity items-center justify-center z-10 w-fit h-fit p-2 border border-gray-400 rounded-full bg-white hidden lg:flex`}>
                            <RiArrowRightWideFill size={20} />
                        </button>

                        <div className="custom-pagination flex gap-2 justify-center mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guruscomp;