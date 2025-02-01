import { useContext, useEffect } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import Founder1 from "../assets/Images/about/founder1.jpg";
import Founder2 from "../assets/Images/about/founder2.jpg";
import Founder3 from "../assets/Images/about/founder3.jpg";
import Founder4 from "../assets/Images/about/founder4.jpg";
import vision1 from "../assets/Images/about/vision1.jpg";
import vision2 from "../assets/Images/about/vision2.jpg";
import training from "../assets/Images/about/training.jpg";
import guru1 from "../assets/Images/about/guru1.jpg";
import guru2 from "../assets/Images/about/guru2.jpg";
import guru3 from "../assets/Images/about/guru3.jpg";
import guru4 from "../assets/Images/about/guru4.jpg";
import guru5 from "../assets/Images/about/guru5.jpg";
import guru6 from "../assets/Images/about/guru6.jpg";
import guru7 from "../assets/Images/about/guru7.jpg";
import teaching1 from "../assets/Images/about/teaching1.jpg";
import teaching2 from "../assets/Images/about/teaching2.jpg";
import teaching3 from "../assets/Images/about/teaching3.jpg";
import teaching4 from "../assets/Images/about/teaching4.jpg";
import teaching5 from "../assets/Images/about/teaching5.jpg";
import teaching6 from "../assets/Images/about/teaching6.jpg";

const Aboutdata = ()=>{
    const {setTheFounder,setVision,setTraining,setTheGuru,setTeachAndLearn} = useContext(ContextProvide);
    useEffect(()=>{
       const getTheFounder = ()=>{
        const data = [{
            id:1,
            content1:"Saraswathy Kala Kendra was started in the year 1975 and registered in 1981 by Sri. T. Narayanamurthy and his wife Smt. Meera Narayan",
            content2:"Smt. Meera Narayan is a disciple of Thiru Vazhuvur Ramaiah Pillai, Thiru Ellappa, Thirumathi Radha Bai and Thirumathi Janaki Bashiyam, the authorities of Bharathanatyam. Her grandfather Mridanga Vidvan Sri. Devarajulu Naidu and mother vocalist Smt. Dhanalakshmi Ammal contributed vastly to this art. She is a distinguished Bharathanatya artist who was honored and awarded with “Natya Mani” and “Natya Kurisil”.",
            founder1:Founder1,
            founder2:Founder2,
            founder3:Founder3,
            founder4:Founder4,
        }]
        setTheFounder(data)
       };


       const getVision = ()=>{
        const data = [{
            id:1,
            content1:"Saraswathy Kala Kendra aims to create awareness of this divine art of Bharatanatyam and its benefits in this modern sedentary lifestyle era. SKK wishes that this beautiful art should be reached to all levels of people in the community.",
            content2:"SKK believes that through this divine art of Bharatanatyam, it can embed long standing Indian art and culture, humanity and bhakti to their students and to the audience.",
            img1:vision1,
            img2:vision2,
        }];
        setVision(data);
       }

       const getTraining = ()=>{
        const data = [{
            id:1,
            content1:"Saraswathy Kala Kendra is well recognized in-and-around Perambur, Chennai. This school of fine arts is teaching Bhartanatyam, Carnatic Music, Veena and Mridangam. It is conducting teacher training programs and also sending students for Govt. technical exam for bharatanatyam.",
            content2:"This valuable traditional art is being cherished by her daughters Smt. Kiran Mayee and Smt. Yagna Prabha.",
            trainingImg:training,
        }]
        setTraining(data);
       }

       const getTheGuru = ()=>{
        const data = [{
            id:1,
            content1:"Guru Kiran Mayee, who like all great teachers, inspiring her students and teaches the intricacies of the divine art Bharatanatyam. She came from a family that dwelled with traditional music and arts for the past four generations. Her great grandfather Mridanga Vidvan Sri. Devarajulu Naidu and grandmother vocalist Smt. Dhanalakshmi Ammal contributed so much to this art.",
            content2:"She started learning baratanatyam, carnatic music and veena from her mother Guru Smt. Meera Narayan at very young age. Under the able guidance of her mother, she started teaching bharatanatyam and carnatic music at the age of sixteen.",
            content3:"She has conducted many theme-oriented programs and her students won so many awards in various competitions. So far she made arangetram for 120 of her students.",
            content4:"As experience got the better of her she started doing productions like Thevara Sthala Puranam, Kumara Shastagam, Durgashtami, Shabdha Karnam, Eakam, Trishakthi, etc. She has also done contemporary dances relating to Cruelty against animals, nature, and health with the Slogan “Live, Let Live” which is popular among social workers.",
            content5:"She actively worked along with students with a disorder called “Dyslexia” which is characterized by reading difficulty and made them learn through dance and expressions",
            guruImg1:guru1,
            guruImg2:guru2,
            guruImg3:guru3,
            guruImg4:guru4,
            guruImg5:guru5,
            guruImg6:guru6,
            guruImg7:guru7,
        }]
        setTheGuru(data);
       }

       const getTeachingAndLearning = ()=>{
        const data = [{
            id:1,
            content1:"SKK understands the importance of the Guru-Sishya Bhavam and the traditional teaching methodology, it focuses on identify and bring out the talent of the student.",
            content2:"Bharatanatyam: Vazhuvur style is being followed in Sarasathy Kala Kendra. Vazhuvur style gives more importance to the expression. Six to eight years of age is ideal to start the foundation and fundamental training. Exercise, practice steps, slogas and mudras, theory classes are routine here. Adavus and usages are being practiced according to the levels of lessons.",
            content3:"Salanga pooja: In two to three years students would have finished adavu and two or three Urupadigal (items) and they are eligible for salanga pooja. It is a ceremony to wear the salanga for the first time. As a tradition Ganapathy Homam is done in the morning and the student is getting the blessing from her/his parents and guru. After the salaga pooja the student is eligible for stage performance.",
            content4:"Arangetram: In general, after completing one Margam (Set of items, Alarippu, Jathiswaram, Saptham, Varnam, Thillana) the student is eligible for Arangetram, it denotes 'arangu' means 'stage' and 'etram' means 'rising'. It is the first full fledged stage performance of the student. It comprises of Margam and 5-6 special items. A certificate is issued after the arangetram.",
            content5:"Govt. Technical exams: A special training is given for practical and theory for Lower grade and Higher grade conducted by Tamil Nadu Government Technical Examination Board. Students are presented for examination under Saraswathy Kala Kendra.",
            content6:"Saraswathy Kala Kendra is teaching Carnatic music, Veena and Mridangam. It has experience over 30 years in teaching Carnatic music and Tamil Isai.",
            teachingImg1:teaching1,
            teachingImg2:teaching2,
            teachingImg3:teaching3,
            teachingImg4:teaching4,
            teachingImg5:teaching5,
            teachingImg6:teaching6
        }]
        setTeachAndLearn(data);
       }


       getTheFounder();
       getVision();
       getTraining();
       getTheGuru();
       getTheGuru();
       getTeachingAndLearning();
    },[])
    return null;
} 


export default Aboutdata;