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
import Bharatanatyam from "../assets/Images/home/Bharatanatyam.jpg";
import kalari from "../assets/Images/home/kalari.jpg";
import mridangam from "../assets/Images/home/mridangam.jpg";
import music from "../assets/Images/home/music.jpg";
import veena from "../assets/Images/home/veena.jpg";
import Bhagallery01 from "../assets/Images/gallery/bharatanatyamGallery/gallery01.webp";
import Bhagallery02 from "../assets/Images/gallery/bharatanatyamGallery/gallery02.webp";
import Bhagallery03 from "../assets/Images/gallery/bharatanatyamGallery/gallery03.webp";
import Bhagallery04 from "../assets/Images/gallery/bharatanatyamGallery/gallery04.webp";
import Bhagallery05 from "../assets/Images/gallery/bharatanatyamGallery/gallery05.webp";
import kalgallery01 from "../assets/Images/gallery/kalariGallery/gallery01.webp";
import kalgallery02 from "../assets/Images/gallery/kalariGallery/gallery02.webp";
import kalgallery03 from "../assets/Images/gallery/kalariGallery/gallery03.webp";
import kalgallery04 from "../assets/Images/gallery/kalariGallery/gallery04.webp";
import kalgallery05 from "../assets/Images/gallery/kalariGallery/gallery05.webp";
import Carmusicgallery01 from "../assets/Images/gallery/carnaticmusicGallery/gallery01.webp";
import Carmusicgallery02 from "../assets/Images/gallery/carnaticmusicGallery/gallery02.webp";
import Carmusicgallery03 from "../assets/Images/gallery/carnaticmusicGallery/gallery03.webp";
import Carmusicgallery04 from "../assets/Images/gallery/carnaticmusicGallery/gallery04.webp";
import Carmusicgallery05 from "../assets/Images/gallery/carnaticmusicGallery/gallery05.webp";
import Mirgallery01 from "../assets/Images/gallery/mirdhandamGallery/gallery01.webp";
import Mirgallery02 from "../assets/Images/gallery/mirdhandamGallery/gallery02.webp";
import Mirgallery03 from "../assets/Images/gallery/mirdhandamGallery/gallery03.webp";
import Mirgallery04 from "../assets/Images/gallery/mirdhandamGallery/gallery04.webp";
import Mirgallery05 from "../assets/Images/gallery/mirdhandamGallery/gallery05.webp";
import veenagallery01 from "../assets/Images/gallery/veenaGallery/gallery01.webp";
import veenagallery02 from "../assets/Images/gallery/veenaGallery/gallery02.webp";
import veenagallery03 from "../assets/Images/gallery/veenaGallery/gallery03.webp";
import veenagallery04 from "../assets/Images/gallery/veenaGallery/gallery04.webp";
import veenagallery05 from "../assets/Images/gallery/veenaGallery/gallery05.webp";
import axios from 'axios';
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

export const Herodata = ()=>{
    const {setBannerVideo,setShorts,setBannerSlider} = useContext(ContextProvide);
    useEffect(() => {
        const fetchbannervideo = async () => {
          try {
            const getBannerVideoLink = await axios.get("https://skk-api.konceptsdandd.com/banner");
            setBannerVideo(getBannerVideoLink.data);
          } catch (error) {
            console.error("Error fetching video links:", error);
          }
        };
        const fetchshortslink = async () => {
          try {
            const getShortsLink = await axios.get("https://skk-api.konceptsdandd.com/bannershorts");
            setShorts(getShortsLink.data);
          } catch (error) {
            console.error("Error fetching video links:", error);
          }
        };
        const fetchsliderlink = async ()=>{
          try{
            const getsliderdata = await axios.get("https://skk-api.konceptsdandd.com/bannerimages");
            setBannerSlider(getsliderdata.data);
          }
          catch(error){
            console.log(error)
          }
        }
    
        fetchbannervideo();
        fetchshortslink();
        fetchsliderlink();
      }, []);
    
} 

export const Gurusdata = ()=>{
    const {setGurus} = useContext(ContextProvide);
    useEffect(() => {
        const fetchGurus = async () => {
            const getGurus = await axios.get('https://skk-api.konceptsdandd.com/homegurus');
            setGurus(getGurus.data);
        }

        fetchGurus();
    }, []);
}

export const Specialitydata = ()=>{
    const {speciality,setSpeciality} = useContext(ContextProvide);
    useEffect(()=>{
       const data = [
                {id:1,points:"Learn Bharatanatyam  from a 20 years experienced Guru."},
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
                img: Bharatanatyam, 
                program_name: "Bharatanatyam",
                program_subname:"The Graceful Art of Storytelling",
                intro:"We teach students the essence of Bharatanatyam, combining rhythmic footwork, expressive gestures, and storytelling through movement. This course is designed for students who wish to learn the art's technical aspects and connect with its spiritual roots.",
                slider:[Bharatanatyam,Bharatanatyam,Bharatanatyam],
                history_content:"Bharatanatyam, one of India's oldest classical dance forms, originated in Tamil Nadu over 2,000 years ago. Rooted in temple rituals and the Natya Shastra, it was performed by Devadasis as a devotional offering, narrating stories of deities like Shiva and Vishnu. This dance form declined during the colonial era but was revived in the 20th century by pioneers like Rukmini Devi Arundale, transforming it into a respected art form. Bharatanatyam is known for its intricate footwork, expressive gestures, and deep spiritual essence. Today, it is globally celebrated as a symbol of India’s rich cultural heritage.",
                gallery:[{id:1,img:Bhagallery01},{id:2,img:Bhagallery02},{id:3,img:Bhagallery03},{id:4,img:Bhagallery04},{id:5,img:Bhagallery05},]
                
            },
            { 
                id: 2, 
                img: kalari, 
                program_name: "Kalari",
                program_subname:"The Ancient Martial Art of Warriors",
                intro:"Our Kalari course emphasizes traditional techniques, self-defense, and meditation to help students achieve harmony between mind and body. Whether you're a beginner or looking to deepen your practice, this course offers a transformative journey into this ancient art form.",
                slider:[kalari,kalari,kalari],
                history_content:"Kalaripayattu, one of the world's oldest martial arts, originated in Kerala over 3,000 years ago. It combines combat techniques, weaponry, and healing practices, reflecting a holistic approach to physical and mental discipline. The art form is believed to have been developed by the sage Parashurama and incorporates elements of yoga and Ayurveda. Historically practiced by warriors, Kalaripayattu focuses on strength, agility, and self-defense. Today, it is practiced globally not only for combat skills but also for its therapeutic and spiritual benefits, promoting overall well-being and self-awareness.",
                gallery:[{id:1,img:kalgallery01},{id:2,img:kalgallery02},{id:3,img:kalgallery03},{id:4,img:kalgallery04},{id:5,img:kalgallery05},]
            },
            { 
                id: 3, 
                img: mridangam, 
                program_name: "Mridangam",
                program_subname:"The Rhythmic Heartbeat of Tradition",
                intro:"In this course, students will learn to master rhythm patterns, enhance their timing, and develop skills that make the Mridangam an integral part of their musical journey.",
                slider:[mridangam,mridangam,mridangam],
                history_content:"The Mridangam is a prominent percussion instrument in Carnatic music, known for its deep, resonant sound. Made from wood, it features two drumheads of different pitches, producing a variety of tones when played with both hands. The instrument provides essential rhythmic support in classical music, dance performances, and religious ceremonies. Its intricate playing techniques and ability to create complex rhythms make it a vital part of South Indian musical tradition. The Mridangam continues to be a cornerstone of Carnatic concerts, with many renowned artists dedicating their careers to mastering this instrument.",
                gallery:[{id:1,img:Mirgallery01},{id:2,img:Mirgallery02},{id:3,img:Mirgallery03},{id:4,img:Mirgallery04},{id:5,img:Mirgallery05},]
            },
            { 
                id: 4, 
                img: music, 
                program_name: "Carnatic Music",
                program_subname:"The Soulful Sound of Tradition",
                intro:"Our course offers structured vocal training, helping students master ragas, talas, and compositions by legendary composers. Through practice and guidance, students will gain a profound appreciation for the intricacies of this classical South Indian music tradition.",
                slider:[music,music,music],
                history_content:"Carnatic music, originating in South India, evolved from ancient Vedic traditions and gained prominence during the Bhakti movement. It was formalized by the contributions of the Carnatic Trinity—Tyagaraja, Muthuswami Dikshitar, and Syama Sastri—who enriched its repertoire with devotional compositions. Carnatic music is characterized by complex ragas and talas, emphasizing both composition and improvisation. Its spiritual themes and technical precision have made it a profound art form. Today, it continues to thrive globally, with numerous festivals, schools, and performers dedicated to preserving and propagating this classical tradition.",
                gallery:[{id:1,img:Carmusicgallery01},{id:2,img:Carmusicgallery02},{id:3,img:Carmusicgallery03},{id:4,img:Carmusicgallery04},{id:5,img:Carmusicgallery05},]

            },
            { 
                id: 5, 
                img: veena, 
                program_name: "Veena",
                program_subname:"The Voice of the Divine Strings",
                intro:"Our Veena course is designed to guide students through the art of playing this classical instrument, from basic finger techniques to advanced ragas. Experience the joy of creating music that resonates with the soul.",
                slider:[veena,veena,veena],
                history_content:"The Veena, a classical string instrument, holds a revered place in Carnatic music. It has a long neck, large resonating body, and multiple strings, producing a deep, melodic sound. Played with a plectrum, the Veena is ideal for performing intricate ragas and is associated with Goddess Saraswati, symbolizing knowledge and arts. Traditionally, it is used for both solo performances and accompaniment in Carnatic concerts. The Veena’s rich tones and expressive capabilities make it a cornerstone of Indian classical music, celebrated for its ability to convey complex emotions and spiritual depth.",
                gallery:[{id:1,img:veenagallery01},{id:2,img:veenagallery02},{id:3,img:veenagallery03},{id:4,img:veenagallery04},{id:5,img:veenagallery05},]
            },  

        ];
        setCourses(data)
    },[])
    return null;
}