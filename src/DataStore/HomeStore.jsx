import { useEffect, useContext } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import specialityimg_0 from "../assets/Images/home/speciality_0.jpg";
import specialityimg_1 from "../assets/Images/home/speciality_1.jpg";
import specialityimg_2 from "../assets/Images/home/speciality_2.jpg";
import youtubevideo_sub_ico from "../assets/Images/header/youtubevideo_sub.png";
import courses_sub_ico from "../assets/Images/header/courses_sub.png";
import shorts_sub_ico from "../assets/Images/header/shorts_sub.png";
import guru_sub_ico from "../assets/Images/header/guru_sub.png";
import founder_sub_ico from "../assets/Images/header/founder_sub.png";
import homegallery_1 from "../assets/Images/home/homegallery_1.jpg";
import homegallery_2 from "../assets/Images/home/homegallery_2.jpg";
import homegallery_3 from "../assets/Images/home/homegallery_3.jpg";
import homegallery_4 from "../assets/Images/home/homegallery_4.jpg";
import homegallery_5 from "../assets/Images/home/homegallery_5.jpg";
import homegallery_6 from "../assets/Images/home/homegallery_6.jpg";
import homegallery_7 from "../assets/Images/home/homegallery_7.jpg";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from "react-icons/ai";
import { PiNotePencilThin } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import baradhanatyam from "../assets/Images/home/baradhanatyam.jpg";
import kalari from "../assets/Images/home/kalari.jpg";
import mridangam from "../assets/Images/home/mridangam.jpg";
import music from "../assets/Images/home/music.jpg";
import veena from "../assets/Images/home/veena.jpg";
export const Headerdata = () => {
    const {setNavbarData} = useContext(ContextProvide);
    useEffect(() => {
        const data = [
            { id: 1, title: "Home", to: "/",sublinks:[
                { id: 1, icon: youtubevideo_sub_ico, label: "YouTube Video", label2: "Video content for all", to: "" },
                { id: 2, icon: shorts_sub_ico, label: "YouTube Shorts", label2: "Quick video clips", to: "" },
                { id: 3, icon: founder_sub_ico, label: "Meet The Founder", label2: "Founder introduction", to: "" },
                { id: 4, icon: guru_sub_ico, label: "Gurus", label2: "Meet the Gurus", to: "" },
                { id: 5, icon: courses_sub_ico, label: "Programs", label2: "Explore the programs", to: "" },
            ] },
            { id: 2, title: "About", to: "/aboutskk", sublinks: [
            { id: 1, label: "Our Studio", to: "" },
            { id: 2, label: "About Gurus", to: "#gurus" },
            { id: 3, label: "Environment", to: "" },
            { id: 4, label: "The Founder", to: "" },
        ]},
        { id: 3, title: "Gallery", to: "/gallery", sublinks: [
            { id: 1, label: "Class", to: "" },
        ]},
        { id: 4, title: "Courses", to: "/courses", sublinks: [
            { id: 1, label: "Production", to: "" },
        ]},
        { id: 5, title: "Events", to: "/events", sublinks: [
            { id: 1, label: "Press Release", to: "" },
        ]},
        { id: 6, title: "Blogs", to: "/blogs", sublinks: [
            { id: 1, label: "Press Release", to: "" },
        ]},
        { id: 7, title: "Faq", to: "/faq" },
        { id: 8, title: "Contact", to: "/contact" },
        ];
        setNavbarData(data);
    }, []);

    return null;
};


export const Specialitydata = ()=>{
    const {speciality,setSpeciality} = useContext(ContextProvide);
    useEffect(()=>{
       const data = [
                {id:1,points:"Learn Bharatnatyam from a 20 years experienced Guru."},
                {id:2,points:"One to One attention as batch size is restricted."},
                {id:3,points:"Can opt for personalised batch also."},
                {id:4,points:"Choose Flexible timings (2 Hrs per week)"},
                {id:5,points:"Get Certificate after a successful completion of each level."},
                {id:6,points:"Opportunity to perform National/International forums and festivals."},
                {id:7,points:"Can get Diploma /Degree Certification through our affiliated Tilak Maharashtra University.(UGC Approved)"}
            ]
       setSpeciality(data)
        
    },[])
    console.log(speciality,"data")
    return null;
}

export const HomegalleryData = ()=>{
    const {setHomegallery} = useContext(ContextProvide);
    useEffect(()=>{
        const data = [
            {id:1,img:homegallery_1},
            {id:2,img:homegallery_2},
            {id:3,img:homegallery_3},
            {id:4,img:homegallery_4},
            {id:5,img:homegallery_5},
            // {id:6,img:homegallery_6},
            // {id:7,img:homegallery_7},
        ]
        setHomegallery(data)
    },[])
    return null;
}

export const Footerdata = ()=>{
    const {setFooterlinks,setFootersocialmedia,setFootercontact} = useContext(ContextProvide);
    useEffect(()=>{
        const data = [
            {id:1,title:"Home",to:"/"},
            {id:2,title:"About",to:"/about"},
            {id:3,title:"Gallery",to:"/gallery"},
            {id:4,title:"Courses",to:"/courses"},
            {id:5,title:"Events",to:"/events"},
            {id:6,title:"Blogs",to:"/blogs"},
            {id:7,title:"Faq",to:"/faq"},
            {id:8,title:"Contact",to:"/contact"},
        ]

        setFooterlinks(data)
        
    },[])
    useEffect(()=>{
        const data = [
            {id:1,icon:<AiOutlineWhatsApp/>,name:"Whatsapp",link:""},
            {id:2,icon:<AiOutlineInstagram/>,name:"Instagram",link:""},
            {id:3,icon:<AiOutlineYoutube/>,name:"YouTube",link:""},
            {id:4,icon:<AiOutlineFacebook/>,name:"Facebook",link:""},
        ]
        setFootersocialmedia(data)
    },[setFootersocialmedia])
    useEffect(()=>{
        const data = [
            {id:1,icon:<PiNotePencilThin/>,title:"Leave a Message",link:""},
            {id:2,icon:<FiPhoneCall/>,title:"+91 98401 66155",link:""},
            {id:3,icon:<IoLocationOutline/>,title:"#100,Street,Area,State,Country-100000",link:""},
            {id:4,icon:<TfiEmail/>,title:"example@gmail.com",link:""},
        ]
        setFootercontact(data);
    },[])
    return null;
}

export const Homefaqdata = ()=>{
    const {setHomefaq} = useContext(ContextProvide);
    useEffect(()=>{
        const data = [
            {id:1,question:"What courses are offered at Saraswathy Kala Kendra?",answer:"We offer specialized training in Bharatanatyam, Kalari, Carnatic Music, Veena, and Mridangam. Our programs are designed to provide in-depth knowledge and hands-on practice in each of these traditional art forms."},
            {id:2,question:"How can I enroll in a course at Saraswathy Kala Kendra?",answer:"To enroll, you can visit our website and check the Courses section. For registration and further assistance, you can contact us directly through our Contact page or reach out via phone or email."},
            {id:3,question:"Are the classes conducted online or in-person?",answer:"Currently, our classes are conducted in person to ensure students receive proper guidance, personalized attention, and a hands-on learning experience."},
            {id:4,question:"Do I need any prior experience to join the courses?",answer:"No prior experience is required to join. Our courses are open to beginners, as well as those looking to enhance their existing skills in Bharatanatyam, Kalari, Karnatic Music, Veena, and Mridangam."},
            {id:5,question:"How can I get more information about class schedules and timings?",answer:"For details on class schedules, timings, and availability, please visit the Contact page on our website or reach out to us directly. We’ll be happy to provide you with all the necessary information."}
        ]
        setHomefaq(data);
    },[])
    return null;
}

export const Testimonialsdata = ()=>{
    const {setTestimonials} = useContext(ContextProvide);
    useEffect(()=>{
        const data = [
            {
                id:1,
                review:"Saraswathy Kala Kendra has truly transformed my journey in Bharatanatyam. The teachers are incredibly patient, and their deep knowledge and passion for the art inspire me every day. I’ve gained not only technical skills but also a deeper appreciation for this beautiful tradition",
                name:"Priya S",
                skill:"Bharatanatyam",
                img:<FaUser/>,
                star:[<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,]
                
            },
            {
                id:2,
                review:"Kalari has taught me more than just physical discipline — it has strengthened my mind, body, and spirit. The environment at Saraswathy Kala Kendra is both supportive and challenging, helping me improve my coordination, flexibility, and mental focus while also building physical strength.",
                name:"Rajesh K",
                skill:"Kalari",
                img:<FaUser/>,
                star:[<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,]
                
            },
            {
                id:3,
                review:"As a student of Carnatic Music at Saraswathy Kala Kendra, I have experienced the joy of discovering a connection with music that goes beyond sound. The teachers here help me develop vocal skills, improve my understanding of ragas, and express emotions through music",
                name:"Anjali M",
                skill:"Carnatic Music",
                img:<FaUser/>,
                star:[<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,]
                
            },
            {
                id:4,
                review:"Learning the Veena at Saraswathy Kala Kendra has been a life-changing experience. The personal attention I receive, combined with structured lessons, has helped me develop my finger technique, mastery of ragas, and rhythm, advancing my skills much faster than I expected.",
                name:"Aarav V",
                skill:"Veena",
                img:<FaUser/>,
                star:[<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,]
                
            },
            {
                id:5,
                review:"I’ve been training in Mridangam for the past year, and my experience at Saraswathy Kala Kendra has been nothing short of amazing. The instructors are experts in their field, and through their guidance, I’ve improved my hand technique, timing, and rhythm patterns. The cultural events they organize give us an opportunity to showcase our skills",
                name:" Meera P",
                skill:"Mridangam",
                img:<FaUser/>,
                star:[<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,<MdOutlineStarPurple500/>,]
                
            },

        ]

        setTestimonials(data)
    },[])
}

export const Programsdata = ()=>{
    const {setCourses} = useContext(ContextProvide);
    useEffect(()=>{
        const data = [
            { 
                id: 1,
                img: baradhanatyam, 
                program_name: "Baradhanatyam",
                program_subname:"The Graceful Art of Storytelling",
                intro:"Bharatanatyam is one of India's oldest and most revered classical dance forms. At Saraswathy Kala Kendra, we teach students the essence of Bharatanatyam, combining rhythmic footwork, expressive gestures, and storytelling through movement. This course is designed for students who wish to learn the art's technical aspects and connect with its spiritual roots.",
                slider:[baradhanatyam,baradhanatyam,baradhanatyam]
            },
            { 
                id: 2, 
                img: kalari, 
                program_name: "Kalari",
                program_subname:"The Ancient Martial Art of Warriors",
                intro:"Kalari, the mother of all martial arts, is a discipline that combines physical strength, flexibility, and mental focus. Our Kalari course emphasizes traditional techniques, self-defense, and meditation to help students achieve harmony between mind and body. Whether you're a beginner or looking to deepen your practice, this course offers a transformative journey into this ancient art form.",
                slider:[kalari,kalari,kalari]
            },
            { 
                id: 3, 
                img: mridangam, 
                program_name: "Mridangam",
                program_subname:"The Rhythmic Heartbeat of Tradition",
                intro:"Mridangam is the cornerstone of South Indian classical music, providing the rhythmic foundation for Carnatic compositions. In this course, students will learn to master rhythm patterns, enhance their timing, and develop skills that make the Mridangam an integral part of their musical journey.",
                slider:[mridangam,mridangam,mridangam] 
            },
            { 
                id: 4, 
                img: music, 
                program_name: "Carnatic Music",
                program_subname:"The Soulful Sound of Tradition",
                intro:"Dive into the melodic and rhythmic beauty of Carnatic music. Our course offers structured vocal training, helping students master ragas, talas, and compositions by legendary composers. Through practice and guidance, students will gain a profound appreciation for the intricacies of this classical South Indian music tradition.",
                slider:[music,music,music]

            },
            { 
                id: 5, 
                img: veena, 
                program_name: "Veena",
                program_subname:"The Voice of the Divine Strings",
                intro:"The Veena, a divine string instrument, is known for its rich and soulful melodies. At Saraswathy Kala Kendra, our Veena course is designed to guide students through the art of playing this classical instrument, from basic finger techniques to advanced ragas. Experience the joy of creating music that resonates with the soul.",
                slider:[veena,veena,veena]
            },
        ];
        setCourses(data)
    },[])
    return null;
}