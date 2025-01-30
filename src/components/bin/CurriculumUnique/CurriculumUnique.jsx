import { useContext } from "react";
import { Curriculumdata } from "../../../DataStore/Aboutdata";
import { ContextProvide } from "../../../Context_API/contextProvider";

const CurriculumUnique = ()=>{
    const {curriculam} = useContext(ContextProvide);
    return(
        <div className="py-10">
            <div className="container">
                <div className="text-center">
                    <h1 className="headingText pb-5">What makes our curriculum unique?</h1>
                    <p className="contentText pb-5">Our curriculum at Saraswathy Kala Kendra is uniquely designed to offer a comprehensive and enriching learning experience. We provide Diverse Artistic Disciplines, including Bharatanatyam, Kalari, Carnatic Music, Veena, and Mridangam, allowing students to explore and master multiple traditional art forms. With a strong Focus on Traditional Art Forms, we aim to preserve and promote India’s rich cultural heritage. Students benefit from Performance Opportunities, enabling them to showcase their skills and gain confidence on stage. Our program emphasizes Individual Mentorship, ensuring personalized guidance to help each student reach their full potential. Upon completion, students receive Certification, providing formal recognition of their achievements and skills.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 relative">
                    {
                        curriculam.map(({id,title,icon}) =>(
                            <div key={id} className="">
                                <div className="w-32 bg-gray-100 p-5 shadow-2xl rounded-full mx-auto relative">
                                    <img src={icon} alt={title} title={title} />
                                </div>
                                <div className="w-5/6 mx-auto text-center pt-3">
                                    <p className="text-center contentText">{title}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="absolute bg-themebrown w-full h-1 top-1/3 -z-10 hidden lg:block"></div>
                </div>
            </div>
            <Curriculumdata/>
        </div>
    )
}

export default CurriculumUnique;