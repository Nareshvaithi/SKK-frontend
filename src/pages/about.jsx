import CurriculumUnique from "../components/about/CurriculumUnique/CurriculumUnique";
import Environment from "../components/about/environment/Environment";
import Founder from "../components/about/founder/Founder";
import OurStudio from "../components/about/ourstudio/OurStudio";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
        <div>
            <Founder/>
            <OurStudio/>
            <Environment/>
            <CurriculumUnique/>
        </div>
    )
}

export default About;