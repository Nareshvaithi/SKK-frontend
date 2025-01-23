import AboutComp from "../components/home/about/AboutComp";
import HomeFaq from "../components/home/homefaq/HomeFaq";
import Guruscomp from "../components/home/gurus/Gurus";
import Hero from "../components/home/Hero/Hero";
import Programs from "../components/home/programs/Programs";
import SpecialityOfSkk from "../components/home/speciality/SpecialityOfSkk";
import WhyLearnBharadhanatyam from "../components/home/WhyLearn/WhyLearn";
import HomeGallery from "../components/home/homegallery/HomeGallery";
import Review from "../components/home/review/Review";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Home = ()=>{
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
        <div>
            <Hero />
            <AboutComp/>
            <Guruscomp />
            <Programs />
            <WhyLearnBharadhanatyam />
            <HomeGallery />
            <SpecialityOfSkk />
            <HomeFaq />
            <Review />
        </div>
    )
}

export default Home;