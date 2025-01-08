import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
const CourseItems = ({ id, img, intro, program_name, program_subname, slider }) => {
    const navigate = useNavigate();
    return (
        <div className="container py-10">
            <h2 className="text-center headingText mb-5">{program_name}</h2>
            <div className={`flex flex-col lg:flex-row ${id % 2 === 0 ? "lg:flex-row-reverse" : ""} gap-5 items-stretch w-full group`}>
                <div className="rounded-xl w-full lg:w-5/12 h-[300px] overflow-hidden">
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700" src={img} alt="" />
                </div>
                <div className="w-full lg:w-7/12 bg-themebrown/40 px-10 py-5 rounded-xl flex flex-col justify-center relative overflow-hidden pb-20 lg:pb-0">
                    <h2 className="font-mainFont1 text-xl text-themebrown">{program_subname}</h2>
                    <p className="font-mainFont2 text-[18px] line-clamp-3 text-gray-800">{intro}</p>
                    <div onClick={()=>{navigate(`/courses/${program_name}`,{state:{id,img,intro,program_name,program_subname,slider}})}} className="absolute bottom-5 left-10 translate-y-[200%] group-hover:translate-y-0 transition-transform duration-1000 ease-in-out">
                        <Button
                            text="View Details"
                            hoverbg="bg-themebrown"
                            textcolor="text-themebrown"
                            hovertextcolor="group-hover:text-white"
                            bg="bg-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseItems;
