import { useEffect, useContext } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import homegallery_1 from "../assets/Images/home/homegallery_1.jpg";
import homegallery_2 from "../assets/Images/home/homegallery_2.jpg";
import homegallery_3 from "../assets/Images/home/homegallery_3.jpg";
import homegallery_4 from "../assets/Images/home/homegallery_4.jpg";
import homegallery_5 from "../assets/Images/home/homegallery_5.jpg";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { PiNotePencilThin } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Bharatanatyam from "../assets/Images/home/Bharatanatyam.webp";
import kalari from "../assets/Images/home/kalari.webp";
import mridangam from "../assets/Images/home/mridangam.webp";
import music from "../assets/Images/home/music.webp";
import veena from "../assets/Images/home/veena.webp";
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
import whatsappIcon from "../assets/Images/header/whatsapp.png";
import locationIcon from "../assets/Images/header/location.png";
import gmailIcon from "../assets/Images/header/gmail.png";
import youtubeSliderIcon from "../assets/Images/header/youtube-icon.jpg";
import shortsIcon from "../assets/Images/header/shorts-icon.jpg";
import teacherIcon from "../assets/Images/header/teacher.jpg";
import whyLearnIcon from "../assets/Images/header/why-learn-icon.jpg";
import specialityIcon from "../assets/Images/header/speciality-icon.jpg";
import courseIcon from "../assets/Images/header/programs-icon.jpg";
import founderIcon from "../assets/Images/header/founder-icon.jpg";
import testimonialIcon from "../assets/Images/header/testimonoal-icon.jpg";
import AboutFounderIcon from "../assets/Images/header/the-founders-icon.jpg";
import ourVisionIcon from "../assets/Images/header/our-vision-icon.jpg";
import trainAndEstIcon from "../assets/Images/header/training-and-establishment-icon.jpg";
import TheGuruIcon from "../assets/Images/header/the-guru-icon.jpg";
import teachandLearnIcon from "../assets/Images/header/teaching-and-learning-icon.jpg";
import honoursAndAwardsIcon from "../assets/Images/header/honours-and-awards-icon.jpg";
import innovationsIcon from "../assets/Images/header/innovations-icon.jpg";
import activitiesIcon from "../assets/Images/header/activities-icon.jpg";
import tvShowIcon from "../assets/Images/header/tv-show-icon.jpg";
import contemporaryWorksIcon from "../assets/Images/header/contemporary-works-icon.jpg";
import annaiMozhiyeIcon from "../assets/Images/header/annai-mozhiye-icon.jpg";
import artIcon from "../assets/Images/header/art-icon.jpg";
import IntroVideo from "../assets/Images/home/introVideo.mp4";

import axios from 'axios';
import { CiFacebook } from "react-icons/ci";
export const Headerdata = () => {
    const {setNavbarData} = useContext(ContextProvide);
    useEffect(() => {
        const data = [
            { id: 1, title: "Home", to: "/",sublinks:[
                { id: 1, icon:youtubeSliderIcon, label: "YouTube Video", label2: "Video content for all", to: "/#youtubevideo" },
                { id: 2, icon:shortsIcon, label: "YouTube Shorts", label2: "Quick video clips", to: "/#youtubeshorts" },
                { id: 3, icon:founderIcon, label: "Meet The Founder", label2: "Founder introduction", to: "/#meetfounder" },
                { id: 4, icon:teacherIcon, label: "Teachers", label2: "Meet the Gurus", to: "/#gurus" },
                { id: 5, icon:courseIcon, label: "Courses", label2: "Explore the programs", to: "/#programs" },
                { id: 6, icon:whyLearnIcon, label: "Why Learn Bharatanatyam", label2: "Explore the programs", to: "/#whylearnbha" },
                { id: 7, icon:specialityIcon, label: "Speciality of SKK", label2: "Explore the programs", to: "/#specialityofskk" },
                { id: 8, icon:testimonialIcon, label: "Testimonials", label2: "Explore the programs", to: "/#testimonials" },
            ] },
            { id: 2, title: "About", to: "/aboutskk", sublinks: [
                { id: 1, label: "The Founder", icon:AboutFounderIcon, to: "/aboutskk#aboutfounders" },
                { id: 2, label: "Our Vision", icon:ourVisionIcon, to: "/aboutskk#ourvision" },
                { id: 3, label: "Training and Establishment", icon:trainAndEstIcon, to: "/aboutskk#trainandest" },
                { id: 4, label: "The Guru", icon:TheGuruIcon, to: "/aboutskk#theguru" },
                { id: 5, label: "Teaching and Learning", icon:teachandLearnIcon, to: "/aboutskk#teachandlearn" },
                { id: 6, label: "Honours and Awards", icon:honoursAndAwardsIcon, to: "/aboutskk#honoursandawards" },
                { id: 7, label: "Innovations", icon:innovationsIcon, to: "/aboutskk#innovations" },  
                { id: 8, label: "Activities", icon:activitiesIcon, to: "/aboutskk#activities" },  
                { id: 9, label: "TV Shows", icon:tvShowIcon, to: "/aboutskk#tvshow" },  
                { id: 10, label: "Contemporary Works", icon:contemporaryWorksIcon, to: "/aboutskk#contemporary" },  
                { id: 12, label: "Annai Mozhiye", icon:annaiMozhiyeIcon, to: "/aboutskk#annaimoziye" },  
                { id: 13, label: "Margazhi art festival", icon:artIcon, to: "/aboutskk#margazhiartfestival" },    
        ]},
        { id: 3, title: "Gallery", to: "/gallery", sublinks: [
            { id: 1, label: "Bharatanatyam", icon: Bharatanatyam,type:'Bharatanatyam',to: "/gallery"},
            { id: 2, label: "Carnatic Music", icon: music,type:'Music',to: "/gallery"},
            { id: 3, label: "Veena", icon: veena,type:'Veena'},
            { id: 4, label: "Mridangam", icon: mridangam,type:'Mridangam',to: "/gallery"},
            { id: 5, label: "Kalari", icon: kalari,type:'Kalari',to: "/gallery"},            
        ]},
        { id: 4, title: "Courses", to: "/courses", sublinks: [
            { id: 1, label: "Bharatanatyam", icon:Bharatanatyam, to: "/courses/#bharatanatyam" },
            { id: 2, label: "Carnatic Music", icon:music, to: "/courses/#carnatic_music" },
            { id: 3, label: "Veena", icon:veena, to: "/courses/#veena" },
            { id: 4, label: "Mridangam", icon:mridangam, to: "/courses/#mridangam" },
            { id: 5, label: "Kalari", icon:kalari, to: "/courses/#kalari" },
        ]},
        { id: 5, title: "Events", to: "/events"},
        { id: 6, title: "Blogs", to: "/blogs",},
        { id: 7, title: "FAQ", to: "/faq" },
        { id: 8, title: "Contact", sublinks:[
            {id:1,label:"WhatsApp",icon:whatsappIcon,to:"https://wa.me/+919840166155"},
            {id:2,label:"Gmail",icon:gmailIcon,to:"mailto:saraswathykalakendra@gmail.com"},
            {id:3,label:"Location",icon:locationIcon,to:"https://maps.app.goo.gl/QTUhU5Y2hohRnxi38"},
        ] },
        ];
        setNavbarData(data);
    }, []);

    return null;
};

export const Herodata = ()=>{
    const {setBannerVideo,setShorts,setBannerSlider} = useContext(ContextProvide);
    useEffect(() => {
        const fetchbannervideo = () => {
          const data = IntroVideo;
          setBannerVideo(data);
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
       setSpeciality(data);
        
    },[])
    console.log(speciality,"data");
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
            // {id:7,img:homegallery_7}, /
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
            {id:2,title:"About",to:"/aboutskk"},
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
            {id:4,icon:<CiFacebook/>,name:"Facebook",link:""},
        ]
        setFootersocialmedia(data)
    },[setFootersocialmedia])
    useEffect(()=>{
        const data = [
            {id:1,icon:<PiNotePencilThin/>,title:"Leave a Message",link:"https://wa.me/+919840166155"},
            {id:2,icon:<FiPhoneCall/>,title:"+91 98401 66155",link:"tel:919840166155"},
            {id:3,icon:<IoLocationOutline/>,title:"# 73, Kannabiraan Koil St, Chinnaiyan Colony, Perambur, Chennai, Tamil Nadu-600039",link:"https://maps.app.goo.gl/QTUhU5Y2hohRnxi38"},
            {id:4,icon:<TfiEmail/>,title:"saraswathykalakendra@gmail.com",link:"mailto:saraswathykalakendra@gmail.com"},
        ]
        setFootercontact(data);
    },[])
    return null;
}

export const Homefaqdata = ()=>{
    const {setHomefaq} = useContext(ContextProvide);
    useEffect(()=>{
        const fetchFaq = async ()=>{
            try{
                const response = await axios.get("https://skk-api.konceptsdandd.com/fandq");
                setHomefaq(response.data);
            }catch(error){
                console.error(error);
            }
        }
        fetchFaq();
    },[])
    return null;
}

export const Testimonialsdata = ()=>{
    const {setTestimonials} = useContext(ContextProvide);
    useEffect(()=>{
       const getTestimonails = async ()=>{
        try{
            const response = await axios.get("https://skk-api.konceptsdandd.com/testimonials");
            setTestimonials(response.data);
        }
        catch(error){
            console.error(error);
        }
       }
       getTestimonails();
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
                img: music, 
                program_name: "Carnatic Music",
                program_subname:"The Soulful Sound of Tradition",
                intro:"Our course offers structured vocal training, helping students master ragas, talas, and compositions by legendary composers. Through practice and guidance, students will gain a profound appreciation for the intricacies of this classical South Indian music tradition.",
                slider:[music,music,music],
                history_content:"Carnatic music, originating in South India, evolved from ancient Vedic traditions and gained prominence during the Bhakti movement. It was formalized by the contributions of the Carnatic Trinity—Tyagaraja, Muthuswami Dikshitar, and Syama Sastri—who enriched its repertoire with devotional compositions. Carnatic music is characterized by complex ragas and talas, emphasizing both composition and improvisation. Its spiritual themes and technical precision have made it a profound art form. Today, it continues to thrive globally, with numerous festivals, schools, and performers dedicated to preserving and propagating this classical tradition.",
                gallery:[{id:1,img:Carmusicgallery01},{id:2,img:Carmusicgallery02},{id:3,img:Carmusicgallery03},{id:4,img:Carmusicgallery04},{id:5,img:Carmusicgallery05},]

            },
            
            { 
                id: 3, 
                img: veena, 
                program_name: "Veena",
                program_subname:"The Voice of the Divine Strings",
                intro:"Our Veena course is designed to guide students through the art of playing this classical instrument, from basic finger techniques to advanced ragas. Experience the joy of creating music that resonates with the soul.",
                slider:[veena,veena,veena],
                history_content:"The Veena, a classical string instrument, holds a revered place in Carnatic music. It has a long neck, large resonating body, and multiple strings, producing a deep, melodic sound. Played with a plectrum, the Veena is ideal for performing intricate ragas and is associated with Goddess Saraswati, symbolizing knowledge and arts. Traditionally, it is used for both solo performances and accompaniment in Carnatic concerts. The Veena’s rich tones and expressive capabilities make it a cornerstone of Indian classical music, celebrated for its ability to convey complex emotions and spiritual depth.",
                gallery:[{id:1,img:veenagallery01},{id:2,img:veenagallery02},{id:3,img:veenagallery03},{id:4,img:veenagallery04},{id:5,img:veenagallery05},]
            },  
            { 
                id: 4, 
                img: mridangam, 
                program_name: "Mridangam",
                program_subname:"The Rhythmic Heartbeat of Tradition",
                intro:"In this course, students will learn to master rhythm patterns, enhance their timing, and develop skills that make the Mridangam an integral part of their musical journey.",
                slider:[mridangam,mridangam,mridangam],
                history_content:"The Mridangam is a prominent percussion instrument in Carnatic music, known for its deep, resonant sound. Made from wood, it features two drumheads of different pitches, producing a variety of tones when played with both hands. The instrument provides essential rhythmic support in classical music, dance performances, and religious ceremonies. Its intricate playing techniques and ability to create complex rhythms make it a vital part of South Indian musical tradition. The Mridangam continues to be a cornerstone of Carnatic concerts, with many renowned artists dedicating their careers to mastering this instrument.",
                gallery:[{id:1,img:Mirgallery01},{id:2,img:Mirgallery02},{id:3,img:Mirgallery03},{id:4,img:Mirgallery04},{id:5,img:Mirgallery05},]
            },
            { 
                id: 5, 
                img: kalari, 
                program_name: "Kalari",
                program_subname:"The Ancient Martial Art of Warriors",
                intro:"Our Kalari course emphasizes traditional techniques, self-defense, and meditation to help students achieve harmony between mind and body. Whether you're a beginner or looking to deepen your practice, this course offers a transformative journey into this ancient art form.",
                slider:[kalari,kalari,kalari],
                history_content:"Kalaripayattu, one of the world's oldest martial arts, originated in Kerala over 3,000 years ago. It combines combat techniques, weaponry, and healing practices, reflecting a holistic approach to physical and mental discipline. The art form is believed to have been developed by the sage Parashurama and incorporates elements of yoga and Ayurveda. Historically practiced by warriors, Kalaripayattu focuses on strength, agility, and self-defense. Today, it is practiced globally not only for combat skills but also for its therapeutic and spiritual benefits, promoting overall well-being and self-awareness.",
                gallery:[{id:1,img:kalgallery01},{id:2,img:kalgallery02},{id:3,img:kalgallery03},{id:4,img:kalgallery04},{id:5,img:kalgallery05},]
            },

        ];
        setCourses(data)
    },[])
    return null;
}

export const FrontBannerdata = ()=>{
    const {setFrontBanner} = useContext(ContextProvide);
    useEffect(()=>{
       const fetchFrontBanner = async ()=>{
            try{
                const response = await axios.get("https://skk-api.konceptsdandd.com/heroBanner");
                setFrontBanner(response.data);
                console.log(response.data)
            }catch(error){
                console.error(error);
            }
       }
       fetchFrontBanner();
    },[])
    return null;
}


