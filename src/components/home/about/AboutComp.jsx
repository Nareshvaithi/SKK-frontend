import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";

const AboutComp = ()=>{
    const [aboutImg,setAboutImg] = useState([]);
    useEffect(()=>{
        const fetchAboutImg = async ()=>{
            try{
                const getAboutImage = await axios.get("https://skk-api.konceptsdandd.com/bannerabout");
                setAboutImg(getAboutImage.data);
            }
            catch(error){
                console.log(error)
            }
        }

        fetchAboutImg();
    },[])
 
    return(
        <div className="w-full h-auto bg-white">
           <div className="container mx-auto w-full lg:w-4/5">
            <div className="text-center">
                <h1 className="headingText">Meet The Founder</h1>
                <p className="contentText pt-5">The roots of Saraswathy Kala Kendra (SKK) were planted in 1967 by T Narayanamurthy and Meera Narayan in Perambur, with just three students embracing Bharathanatyam and Carnatic Music.</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 py-5">
            <div className="w-full lg:w-6/12 font-mainFont2">
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <h1 className="font-black">Founder name</h1>
                        <p className="font-semibold">style name</p>
                        <p className="text-lg pb-5">Salangai poojai, Arangetram, and captivating stage performances soon became our signature. The Government of Tamil Nadu recognized our dedication to the arts and honored us with state recognition in 1981. Meera Narayan's choreographic brilliance shone in productions like Krishna Leela, Dasavatharam, and Padmavathi Kalyanam, earning admiration from all corners. Her daughters, Kiran Mayee and Yagna Prabha, embraced the mantle of teaching at our institution.</p>
                    </div>
                    <div>
                    <Button
                     text="Read More" 
                     link="/about" 
                     hoverbg="bg-white"
                     textcolor="text-white" 
                     hovertextcolor="group-hover:text-themebrown"
                     bg="bg-themebrown"
                     px={"px-5"}
                     py={"py-2"}
                     border={"border"}
                     borderColor={"border-themebrown"}
                     /> 
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-6/12 rounded-xl">
                {
                    aboutImg.map(({_id,url})=>(
                        <img className="object-contain rounded-xl" key={_id} src={url} alt="" />
                    ))
                }
            </div>
            </div>
           </div>
        </div>
    )
}

export default AboutComp;