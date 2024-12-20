import AboutComp from "../components/home/about/AboutComp";
import HomeFaq from "../components/home/homefaq/HomeFaq";
import Guruscomp from "../components/home/gurus/Gurus";
import Hero from "../components/home/Hero/Hero";
import Programs from "../components/home/programs/Programs";
import SpecialityOfSkk from "../components/home/speciality/SpecialityOfSkk";
import WhyLearnBharadhanatyam from "../components/home/WhyLearn/WhyLearn";
import Gallery from "./gallery";



const Home = ()=>{
    return(
        <div>
            <Hero/>
            <AboutComp/>
            <Guruscomp/>
            <Programs/>
            <WhyLearnBharadhanatyam/>
            <Gallery/>
            <SpecialityOfSkk/>
            <HomeFaq/>
        </div>
    )
}

export default Home;