import Founder from "../components/about/founder/Founder";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Vision from "../components/about/Vision/Vision";
import Training from "../components/about/Training/Training";
import TheGuru from "../components/about/The_Guru/TheGuru";
import TeachingAndLearning from "../components/about/Teaching/TeachingAndLearning";
import AwardAndHonour from "../components/about/AwardAndHonour/AwardAndHonour";
import Innovation from "../components/about/Innovation/Innovation";
import Activity from "../components/about/Activity/Activity";
import TVshow from "../components/about/TVshow/TVshow";
import ContemporaryWorks from "../components/about/Contemporaryworks/Contemporaryworks";
import AnnaiMozhiye from "../components/about/AnnaiMozhiye/AnnaiMozhiye";
import Margazh from "../components/about/Margazh/Margazh";
import RunningImages from "../components/about/RunningImages.jsx/RunningImages";
import i from "../assets/Images/about/RunningImage/01.jpg"
const About = ()=>{
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
        <div className="bg-gray-100">
            <Founder/>
            <Vision/>
            <Training/>
            <TheGuru/>
            <TeachingAndLearning/>
            <AwardAndHonour/>
            <Innovation/>
            <Activity/>
            <TVshow/>
            <ContemporaryWorks/>
            <AnnaiMozhiye/>
            <Margazh/>
            <RunningImages/>
        </div>
    )
}

export default About;