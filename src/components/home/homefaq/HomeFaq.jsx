import { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import FaqItems from "./FaqItems";
import { Homefaqdata } from "../../../DataStore/HomeStore";
import { useLocation } from "react-router-dom";

const HomeFaq = () => {
    const { homefaq } = useContext(ContextProvide);
    const location = useLocation(false);
    const [headinghider,setHeadinghider] = useState(false);
    useEffect(()=>{
        if(location.pathname === '/faq'){
            setHeadinghider(true);
        }
        else{
            setHeadinghider(false);
        }
    },[location.pathname])

    return (
        <>
            <div className="py-10">
                <div className={`text-center ${headinghider === true ? "hidden" : "block"}`}>
                    <h1 className="headingText pb-5">FAQ</h1>
                </div>
                <div className="container flex flex-col justify-center items-center">
                    {
                        homefaq.map(({ _id, answer, question }, index) => (
                            <FaqItems 
                                key={_id} 
                                id={_id} 
                                answer={answer} 
                                question={question} 
                                index={index} 
                                totalFaqs={homefaq.length} 
                            />
                        ))
                    }
                </div>
            </div>
            <Homefaqdata />
        </>
    );
}

export default HomeFaq;
