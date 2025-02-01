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
import award1 from "../assets/Images/about/award1.jpg";
import award2 from "../assets/Images/about/award2.jpg";
import award3 from "../assets/Images/about/award3.jpg";
import award4 from "../assets/Images/about/award4.jpg";
import award5 from "../assets/Images/about/award5.jpg";
import award6 from "../assets/Images/about/award6.jpg";
import award7 from "../assets/Images/about/award7.jpg";
import innovation1 from "../assets/Images/about/innovation1.jpg";
import innovation2 from "../assets/Images/about/innovation2.jpg";
import innovation3 from "../assets/Images/about/innovation3.jpg";
import innovation4 from "../assets/Images/about/innovation4.jpg";
import activity1 from "../assets/Images/about/activity1.jpg";
import activity2 from "../assets/Images/about/activity2.jpg";
import activity3 from "../assets/Images/about/activity3.jpg";
import tvshow1 from "../assets/Images/about/tvshow1.jpg";
import tvshow2 from "../assets/Images/about/tvshow2.jpg";
import tvshow3 from "../assets/Images/about/tvshow3.jpg";
import tvshow4 from "../assets/Images/about/tvshow4.jpg";
import tvshow5 from "../assets/Images/about/tvshow5.jpg";
import tvshow6 from "../assets/Images/about/tvshow6.jpg";
import tvshow7 from "../assets/Images/about/tvshow7.jpg";
import tvshow8 from "../assets/Images/about/tvshow8.jpg";
import contemporary1 from "../assets/Images/about/contemporary1.jpg";
import contemporary2 from "../assets/Images/about/contemporary2.jpg";
import contemporary3 from "../assets/Images/about/contemporary3.jpg";
import contemporary4 from "../assets/Images/about/contemporary4.jpg";
import annaiMozhiye1 from "../assets/Images/about/annai1.jpg";
import annaiMozhiye2 from "../assets/Images/about/annai2.jpg";
import annaiMozhiye3 from "../assets/Images/about/annai3.jpg";
import annaiMozhiye4 from "../assets/Images/about/annai4.jpg";
import margazh1 from "../assets/Images/about/margazh1.jpg";
import margazh2 from "../assets/Images/about/margazh2.jpg";
import margazh3 from "../assets/Images/about/margazh3.jpg";
import margazh4 from "../assets/Images/about/margazh4.jpg";
import margazh5 from "../assets/Images/about/margazh5.jpg";
import activity2_1 from "../assets/Images/about/activity2.1.jpg";
import activity2_2 from "../assets/Images/about/activity2.2.jpg";
import activity2_3 from "../assets/Images/about/activity2.3.jpg";
import activity2_4 from "../assets/Images/about/activity2.4.jpg";
import activity2_5 from "../assets/Images/about/activity2.5.jpg";
import activity2_6 from "../assets/Images/about/activity2.6.jpg";
import activity2_7 from "../assets/Images/about/activity2.7.jpg";
import activity2_8 from "../assets/Images/about/activity2.8.jpg";
import activity2_9 from "../assets/Images/about/activity2.9.jpg";
import activity2_10 from "../assets/Images/about/activity2.10.jpg";
import RunImg1 from "../assets/Images/about/RunningImage/01.jpg";
import RunImg2 from "../assets/Images/about/RunningImage/02.jpg";
import RunImg3 from "../assets/Images/about/RunningImage/03.jpg";
import RunImg4 from "../assets/Images/about/RunningImage/04.jpg";
import RunImg5 from "../assets/Images/about/RunningImage/05.jpg";
import RunImg6 from "../assets/Images/about/RunningImage/06.jpg";
import RunImg7 from "../assets/Images/about/RunningImage/07.jpg";
import RunImg8 from "../assets/Images/about/RunningImage/08.jpg";
import RunImg9 from "../assets/Images/about/RunningImage/09.jpg";
import RunImg10 from "../assets/Images/about/RunningImage/10.jpg";
import RunImg11 from "../assets/Images/about/RunningImage/11.jpg";
import RunImg12 from "../assets/Images/about/RunningImage/12.jpg";
import RunImg13 from "../assets/Images/about/RunningImage/13.jpg";
import RunImg14 from "../assets/Images/about/RunningImage/14.jpg";
import RunImg15 from "../assets/Images/about/RunningImage/15.jpg";
import RunImg16 from "../assets/Images/about/RunningImage/16.jpg";
import RunImg17 from "../assets/Images/about/RunningImage/17.jpg";
import RunImg18 from "../assets/Images/about/RunningImage/18.jpg";
import RunImg19 from "../assets/Images/about/RunningImage/19.jpg";
import RunImg20 from "../assets/Images/about/RunningImage/20.jpg";
import RunImg21 from "../assets/Images/about/RunningImage/21.jpg";
import RunImg22 from "../assets/Images/about/RunningImage/22.jpg";
import RunImg23 from "../assets/Images/about/RunningImage/23.jpg";
import RunImg24 from "../assets/Images/about/RunningImage/24.jpg";
import RunImg25 from "../assets/Images/about/RunningImage/25.jpg";
import RunImg26 from "../assets/Images/about/RunningImage/26.jpg";
import RunImg27 from "../assets/Images/about/RunningImage/27.jpg";
import RunImg28 from "../assets/Images/about/RunningImage/28.jpg";
import RunImg29 from "../assets/Images/about/RunningImage/29.jpg";
import RunImg30 from "../assets/Images/about/RunningImage/30.jpg";
import RunImg31 from "../assets/Images/about/RunningImage/31.jpg";
import RunImg32 from "../assets/Images/about/RunningImage/32.jpg";
import RunImg33 from "../assets/Images/about/RunningImage/33.jpg";
import RunImg34 from "../assets/Images/about/RunningImage/34.jpg";
import RunImg35 from "../assets/Images/about/RunningImage/35.jpg";
import RunImg36 from "../assets/Images/about/RunningImage/36.jpg";
import RunImg37 from "../assets/Images/about/RunningImage/37.jpg";
import RunImg38 from "../assets/Images/about/RunningImage/38.jpg";
import RunImg39 from "../assets/Images/about/RunningImage/39.jpg";
import RunImg40 from "../assets/Images/about/RunningImage/40.jpg";
import RunImg41 from "../assets/Images/about/RunningImage/41.jpg";
import RunImg42 from "../assets/Images/about/RunningImage/42.jpg";
import RunImg43 from "../assets/Images/about/RunningImage/43.jpg";
import RunImg44 from "../assets/Images/about/RunningImage/44.jpg";
import RunImg45 from "../assets/Images/about/RunningImage/45.jpg";
import RunImg46 from "../assets/Images/about/RunningImage/46.jpg";
import RunImg47 from "../assets/Images/about/RunningImage/47.jpg";
import RunImg48 from "../assets/Images/about/RunningImage/48.jpg";
import RunImg49 from "../assets/Images/about/RunningImage/49.jpg";
import RunImg50 from "../assets/Images/about/RunningImage/50.jpg";

const Aboutdata = ()=>{
    const {
        setTheFounder,
        setVision,
        setTraining,
        setTheGuru,
        setTeachAndLearn,
        setAwardAndHonour,
        setInnovation,
        setActivity,
        setTvShow,
        setContemporary,
        setAnnaiMozhiye,
        setMargazh,
        setActivity2,
        setRunningImage,

    } = useContext(ContextProvide);

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

       const getAwardAndHonour = ()=>{
        const data = [{
            id:1,
            content1:"The Government of Tamilnadu inspired by our services in the art field honored us with the state recognition in 1981. Krishna leela, Dasavatharam, Padmavathi Kalyanam are few among the many choreographs made by Meera Narayan which got appreciation from people all around.",
            content2:"Then Chief Minister J Jayalalitha appreciated Meera Narayan for her choreography in republic day Celebration at St. Fort George in the year 1992.",
            content3:"Celebrities who gave appreciation and support during their visits for our institute's annual day programmes.",
            awardImg1:award1,
            awardImg2:award2,
            awardImg3:award3,
            awardImg4:award4,
            awardImg5:award5,
            awardImg6:award6,
            awardImg7:award7
        }];
        setAwardAndHonour(data);
       }

       const getInnovations = ()=>{
            const data = [{
                id:1,
                content1:"It was in the year 2008 the foundation for the production of VEERATTAM was laid. The research and study for Veerattam took almost 1 and half year; before it was recorded and orchestrated by popular Music director of Engayum Eppothum film C.Sathya in the year 2009.",
                content2:"After that Students started performing VEERATTAM as a special Performance in their Arangetram along with the Routine Margam , which got paramount appreciation for the out of the box thinking and making a revolution in the Dance field.",
                innovationImg1:innovation1,
                innovationImg2:innovation2,
                innovationImg3:innovation3,
                innovationImg4:innovation4,
            }];
            setInnovation(data);
       }

       const getActivity = ()=>{
        const data = [{
            id:1,
            content1:(
                    <>
                    <span className="font-bold">Study trips:</span> Senior students are enthusiastically participating their field trips that are arranged twice in a year where they are visiting ancient temples and enlighten their knowledge on sthala puranam, sculptures, mythology, spiritual and tradition. Projects will be given to students after the field trip in groups.
                    </>
                ),
            content2:(
                <span className="font-bold">Recent performances:</span>   
            ),
            points:[
                {id:1,point:"Sivarathri program at Thiruvenkadu temple"},
                {id:2,point:"Natyanjali art festival, Thiruvarur"},
                {id:3,point:"Natyanjali art festival, Chidambaram"},
                {id:4,point:"Navarathri performance in Thiruvanmiyur, Karneeswarar temple, Purasawakkam, Puliyur-Kodambakkam, Seerkazhi, Thirukovalur Veerattam temple"},
            ],
            activityImg1:activity1,
            activityImg2:activity2,
            activityImg3:activity3,
        }];
        setActivity(data);
       } 

       const getTvshow = ()=>{
        const data = [{
            content1:`Saraswathy Kala Kendra has been recognized with the prestigious Vijay TV's dance programme "Dancing Super Stars" which was globally appreciated for its India's variety dances in single concept.`,
            content2:"Moreover, SKK Team participated and won many awards in the dance competition in Makkal TV and Doordarshan and performed many dance programs in various TV channels.",
            content3:"SKK shows lot of interest to teach this invaluable art of Bharatanatyam to as many as students and brings out the talent from them.",
            tvshowImg1:tvshow1,
            tvshowImg2:tvshow2,
            tvshowImg3:tvshow3,
            tvshowImg4:tvshow4,
            tvshowImg5:tvshow5,
            tvshowImg6:tvshow6,
            tvshowImg7:tvshow7,
            tvshowImg8:tvshow8,
        }]
        setTvShow(data);
        
       }
       const getContemporary = ()=>{
        const data = [{
            id:1,
            content1:(
                <p><span className="block font-bold">Veenaiyadi nee enakku...</span>A contemporary Dance production based on female abuse and unreported crimes.</p>
            ),
            contemporaryImg1:contemporary1,
            contemporaryImg2:contemporary2,
            contemporaryImg3:contemporary3,
            contemporaryImg4:contemporary4,
        }]
        setContemporary(data)
       }

       const getAnnaiMozhiye = ()=>{
        const data = [{
            id:1,
            content1:"SKK Team has also been recognised by the government of Tamilnadu to perform the Tamil lessons of school children in dance form which is telecasted in Government Television Channel.",
            annaiMozhiyeImg1:annaiMozhiye1,
            annaiMozhiyeImg2:annaiMozhiye2,
            annaiMozhiyeImg3:annaiMozhiye3,
            annaiMozhiyeImg4:annaiMozhiye4,
        }];
        setAnnaiMozhiye(data);
       }

       const getMargazh = ()=>{
        const data = [{
            id:1,
            margazhImg1:margazh1,
            margazhImg2:margazh2,
            margazhImg3:margazh3,
            margazhImg4:margazh4,
            margazhImg5:margazh5,
        }]
        setMargazh(data);
       }

       const getActivity2 = ()=>{
        const data = [{
            id:1,
            points:[
                {id:1,point:"Performance at Karaikkal Ammaiyar temple"},
                {id:2,point:"Vishranti, Old age home"},
                {id:3,point:"Madurai Meenakshi Amman Temple"},
                {id:4,point:"TV channels"},
                {id:4,point:"TV channels"},
                {id:5,point:"Special show in Sun TV for Vijayadhasami (2013)"},
                {id:6,point:"Conducted two season programs called “Bhaava Raaga Thaalam” in Makkal TV (2014 and 2015)"},
                {id:7,point:"Deepavali special program in Puthuyugam (2017)"},
                {id:8,point:"Margazhi utsavam at Kapaleeshwar temple, Mylapore (2019)"},
            ],
            activityImg1:activity2_1,
            activityImg2:activity2_2,
            activityImg3:activity2_3,
            activityImg4:activity2_4,
            activityImg5:activity2_5,
            activityImg6:activity2_6,
            activityImg7:activity2_7,
            activityImg8:activity2_8,
            activityImg9:activity2_9,
            activityImg10:activity2_10
        }]
        setActivity2(data);
       }

       const getRunningImage = ()=>{
        const data = [
            RunImg1,RunImg2,RunImg3,RunImg4,RunImg5,RunImg6,RunImg7,RunImg8,RunImg9,RunImg10,
            RunImg11,RunImg12,RunImg13,RunImg14,RunImg15,RunImg16,RunImg17,RunImg18,RunImg19,RunImg20,
            RunImg21,RunImg22,RunImg23,RunImg24,RunImg25,RunImg26,RunImg27,RunImg28,RunImg29,RunImg30,
            RunImg31,RunImg32,RunImg33,RunImg34,RunImg35,RunImg36,RunImg37,RunImg38,RunImg39,RunImg40,
            RunImg41,RunImg42,RunImg43,RunImg44,RunImg45,RunImg46,RunImg47,RunImg48,RunImg49,RunImg50
        ];
        setRunningImage(data);
       }
       
       getTheFounder();
       getVision();
       getTraining();
       getTheGuru();
       getTheGuru();
       getTeachingAndLearning();
       getAwardAndHonour();
       getInnovations();
       getActivity();
       getTvshow();
       getContemporary();
       getAnnaiMozhiye();
       getMargazh();
       getActivity2();
       getRunningImage();
    },[])
    return null;
} 


export default Aboutdata;