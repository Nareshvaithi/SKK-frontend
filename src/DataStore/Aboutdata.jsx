import { useContext, useEffect } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from "react-icons/ai";
import OurStudioVideo from "../assets/Images/about/ourstudio.mp4";
import Traditional_Ambiance from "../assets/Images/about/Traditional_Ambiance.webp";
import Positive_Learning_Atmosphere from "../assets/Images/about/Positive_Learning_Atmosphere.jpg";
import State_of_the_Art from "../assets/Images/about/State_of_the_Art.jpg";
import Cultural_Immersion from "../assets/Images/about/Cultural_Immersion.webp";
import Community_Spirit from "../assets/Images/about/Community_Spirit.webp";
export const Founderdata = ()=>{
    const {setFounderSocialmedia,setStudentRev} = useContext(ContextProvide);
    useEffect(()=>{
        const data = [
            {id:1,icon:<AiOutlineWhatsApp/>,link:""},
            {id:2,icon:<AiOutlineInstagram/>,link:""},
            {id:3,icon:<AiOutlineFacebook/>,link:""},
            {id:4,icon:<AiOutlineYoutube/>,link:""},
        ];
        setFounderSocialmedia(data);
    },[])
    useEffect(()=>{
        const data = [
            {id:1,stdImg:<FaRegUserCircle/>,name:"Student Name",review:"Good Teaching",skill:"Bharatanatiyam"},
            {id:2,stdImg:<FaRegUserCircle/>,name:"Student Name",review:"Good Environment",skill:"Classical Music"},
            {id:3,stdImg:<FaRegUserCircle/>,name:"Student Name",review:"Good Teaching", skill:"Veena"},
            {id:4,stdImg:<FaRegUserCircle/>,name:"Student Name",review:"Good Environment", skill:"Kalari"},
        ];
        setStudentRev(data);
    },[setStudentRev])

    return null;
}
export const Studiodata = ()=>{
    const {setStudioVideo} = useContext(ContextProvide);
    useEffect(()=>{
        setStudioVideo(OurStudioVideo);
    },[])
    return null;
}
export const Environmentdata = ()=>{
    const {setEnvironment} = useContext(ContextProvide);
    useEffect(()=>{
        const data = [
            {id:1,environment:"Traditional Ambiance",details:"Our learning spaces reflect the essence of classical Indian art, promoting focus, dedication, and a spiritual connection to the arts.",img:Traditional_Ambiance},
            {id:2,environment:"Positive Learning Atmosphere",details:"We maintain a supportive environment where students feel encouraged to express themselves, make mistakes, and grow under the guidance of experienced mentors.",img:Positive_Learning_Atmosphere},
            {id:3,environment:"State-of-the-Art Facilities",details:"From spacious dance studios to dedicated practice areas for Kalari, Veena, and Mridangam, every detail is designed to enhance learning.",img:State_of_the_Art},
            {id:4,environment:"Cultural Immersion",details:"Students are immersed in the rich heritage of India's performing arts, experiencing not just the techniques but also the values and philosophy behind them.",img:Cultural_Immersion},
            {id:5,environment:"Community Spirit",details:"We foster a sense of belonging where students, teachers, and parents come together to celebrate milestones, performances, and cultural events.",img:Community_Spirit},
        ]
        setEnvironment(data)
    },[])
    return null;
}