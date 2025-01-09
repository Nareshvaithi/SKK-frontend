
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation,Autoplay} from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useContext,useEffect } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import { Gurusdata } from "../DataStore/HomeStore";
import Button from "../components/Button/Button";
import EventsStore from "../DataStore/EventsStore";
import Banner from "../components/Events/Banner";
import FilterEvents from "../components/Events/FilterEvents";

const Events = ()=>{
  
    const {eventBanner} = useContext(ContextProvide);

    return(
        <>
        
        <Banner />
        <FilterEvents />
        </>
    )
}


export default Events;
