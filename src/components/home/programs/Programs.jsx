import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Programsdata } from "../../../DataStore/HomeStore";
import { useNavigate } from "react-router-dom";

const Programs = () => {
    const {courses} = useContext(ContextProvide);
    const navigate = useNavigate()
    return (
        <>
        <div className="bg-white">

        <div className="container w-full h-full text-gray-700 py-10">
            <div className="text-center py-5 w-5/6 mx-auto">
                <h1 className="headingText py-2">Our Courses</h1>
                <p className="contentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis quasi nisi. Veritatis repudiandae et architecto. Nostrum debitis dolore iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. iste!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-4">
                {/* Left Div - Takes id: 1 */}
                <div className="w-full h-full relative rounded-xl overflow-hidden group">
                {courses.filter(item => item.id === 1).map(({ id, img, program_name,program_subname,slider,intro }) => (
                        <div onClick={()=>{navigate(`/courses/${program_name}`,{state:{id,img,program_name,program_subname,slider,intro}});window.scrollTo(0,0)}} key={id} className="relative w-full h-full rounded-xl overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${img})` }}
                            ></div>
                            <div
                                className="absolute inset-0 w-full h-full flex items-center justify-center group-hover:bg-black/50 rounded-xl transition-colors duration-300"
                            >
                                <h1 className="text-white text-3xl font-mainFont1 font-light transform translate-y-44 group-hover:translate-y-40 transition-all duration-500">
                                    {program_name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Div - Takes remaining properties */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {courses.filter(item => item.id !== 1).map(({id, img, program_name,program_subname,slider,intro}) => (
                        <div onClick={()=>{navigate(`/courses/${program_name}`,{state:{id,img,program_name,program_subname,slider,intro}});window.scrollTo(0,0)}} key={id} className="relative w-full h-52 rounded-xl overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${img})` }}
                            ></div>
                            <div
                                className="absolute inset-0 w-full h-full flex items-center justify-center group-hover:bg-black/50 rounded-xl transition-colors duration-300"
                            >
                                <h1 className="text-white text-3xl font-mainFont1 font-light transform translate-y-[70px] group-hover:translate-y-16 transition-all duration-500">
                                    {program_name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        <Programsdata/>
        </>
    );
};

export default Programs;
