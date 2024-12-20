import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import FaqItems from "./FaqItems";
import { Homefaqdata } from "../../../DataStore/HomeStore";

const HomeFaq = ()=>{
    const {homefaq} = useContext(ContextProvide);
    return(
        <>
            <div className="">
                <div className="text-center">
                    <h1 className="headingText py-5">FAQ</h1>
                </div>
                <div className="container flex flex-col justify-center items-center">
                    {
                        homefaq.map(({id,answer,question})=>(
                            <FaqItems id={id} answer={answer} question={question}/>
                        ))
                    }
                </div>
            </div>
            <Homefaqdata/>
        </>
    )
}

export default HomeFaq;