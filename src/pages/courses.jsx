import { useContext } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import CourseItems from "../components/courses/courseItem/CourseItems";
import { Programsdata } from "../DataStore/HomeStore";

const Courses = ()=>{
    const {courses} = useContext(ContextProvide);
  
    return(
        <div className="pt-24 bg-white">
            <div>
            {
                courses.map(({id,img,intro,program_name,program_subname,slider,history_content,gallery})=>(
                    <CourseItems 
                        key={id}
                        id={id}
                        img={img}
                        intro={intro}
                        program_name={program_name} 
                        program_subname={program_subname} 
                        slider={slider} 
                        history_content={history_content}
                        gallery={gallery}
                        />
                ))
            }
            </div>
            <Programsdata/>
        </div>
    )
}

export default Courses;