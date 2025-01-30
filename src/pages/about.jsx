// import CurriculumUnique from "../components/about/CurriculumUnique/CurriculumUnique";
// import Environment from "../components/about/environment/Environment";
import Founder from "../components/about/founder/Founder";
// import OurStudio from "../components/about/ourstudio/OurStudio";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Vision from "../components/about/Vision/Vision";
import Training from "../components/about/Training/Training";
import TheGuru from "../components/about/The_Guru/TheGuru";
import TeachingAndLearning from "../components/about/Teaching/TeachingAndLearning";
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
            {/* <OurStudio/> */}
            {/* <Environment/> */}
            {/* <CurriculumUnique/> */}
        </div>
    )
}

export default About;