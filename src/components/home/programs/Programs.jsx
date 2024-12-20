import axios from "axios";
import { useEffect, useState } from "react";
import baradhanatyam from "../../../assets/Images/home/baradhanatyam.jpg";
import kalari from "../../../assets/Images/home/kalari.jpg";
import mridangam from "../../../assets/Images/home/mridangam.jpg";
import music from "../../../assets/Images/home/music.jpg";
import veena from "../../../assets/Images/home/veena.jpg";

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const datas = [
        { id: 1, img: baradhanatyam, program_name: "Baradhanatyam" },
        { id: 2, img: kalari, program_name: "Kalari" },
        { id: 3, img: mridangam, program_name: "Mridangam" },
        { id: 4, img: music, program_name: "Carnatic Music" },
        { id: 5, img: veena, program_name: "Veena" },
    ];

    useEffect(() => {
        const fetchprograms = async () => {
            try {
                const getprograms = await axios.get("https://skk-api.konceptsdandd.com/programs");
                setPrograms(getprograms.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchprograms();
    }, []);

    return (
        <div className="bg-white">

        <div className="container w-full h-full text-gray-700 py-10">
            <div className="text-center py-5 w-5/6 mx-auto">
                <h1 className="headingText py-2">Our Courses</h1>
                <p className="contentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis quasi nisi. Veritatis repudiandae et architecto. Nostrum debitis dolore iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. iste!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-4">
                {/* Left Div - Takes id: 1 */}
                <div className="w-full h-full relative rounded-xl overflow-hidden group">
                {datas.filter(item => item.id === 1).map(({ id, img, program_name }) => (
                        <div key={id} className="relative w-full h-full rounded-xl overflow-hidden group">
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
                    {datas.filter(item => item.id !== 1).map(({ id, img, program_name }) => (
                        <div key={id} className="relative w-full h-52 rounded-xl overflow-hidden group">
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
    );
};

export default Programs;
