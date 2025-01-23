import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

const CourseItems = ({ id, img, intro, program_name, program_subname, slider, history_content, gallery }) => {
    const navigate = useNavigate();

    return (
        <div className="container py-10">
            <div className={`flex flex-col lg:flex-row items-stretch ${id % 2 === 0 ? "lg:flex-row-reverse" : ""} w-full h-full group`}>
               
                <div className="rounded-xl w-full lg:w-5/12 h-[300px] relative overflow-hidden">
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700" src={img} alt="" />
                    <div className={`bg-[#f7eee8] w-14 h-14 rotate-45 ${id % 2 === 0 ? "left-0 group-hover:-translate-x-[200%] -translate-x-1/2" : "right-0 group-hover:translate-x-[200%] translate-x-1/2"}  transition-transform duration-1000 absolute top-10`}></div>
                </div>
                
                <div className="w-full lg:w-7/12 bg-themebrown/10 px-10 rounded-xl flex flex-col items-stretch relative overflow-hidden flex-grow pt-5">
                    <h2 className="headingText pb-2">{program_name}</h2>
                    <h2 className="font-mainFont1 text-xl text-themebrown">{program_subname}</h2>
                    <p className="contentText line-clamp-4 text-gray-800">{intro}</p>
                    <div 
                        onClick={() => {
                            navigate(`/courses/${program_name}`, { state: { id, img, intro, program_name, program_subname, slider, history_content, gallery } });
                            window.scrollTo(0, 0);
                        }} 
                        className="absolute bottom-5 left-10 translate-y-[200%] group-hover:translate-y-0 transition-transform duration-1000 ease-in-out"
                    >
                        <Button
                            text="View Details"
                            hoverbg="bg-themebrown"
                            textcolor="text-themebrown"
                            hovertextcolor="group-hover:text-white"
                            bg="bg-white"
                            px={"px-5"}
                            py={"py-2"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseItems;
