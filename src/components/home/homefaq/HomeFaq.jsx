import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import FaqItems from "./FaqItems";
import { Homefaqdata } from "../../../DataStore/HomeStore";

const HomeFaq = () => {
    const { homefaq } = useContext(ContextProvide);

    return (
        <>
            <div className="py-10">
                <div className="text-center">
                    <h1 className="headingText pb-5">FAQ</h1>
                </div>
                <div className="container flex flex-col justify-center items-center">
                    {
                        homefaq.map(({ id, answer, question }, index) => (
                            <FaqItems 
                                key={id} 
                                id={id} 
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
