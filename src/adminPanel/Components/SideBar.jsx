import { useContext, useState, useEffect } from "react";
import AdminHeaderStore from "../AdminDataStore/AdminHeaderStore";
import { AdminContextProvide } from "../Context_API/ContextProvider";
import AdminLogo from "../../assets/Images/AdminLogo.png";
import { div, h1 } from "framer-motion/client";

const SideBar = () => {
    const { openCMS, setOpenCMS, adminNavData, setCMS } = useContext(AdminContextProvide);
    
    const [activeSublinks, setActiveSublinks] = useState([]);
    const [activeTitle, setActiveTitle] = useState('');

    useEffect(() => {
        if (adminNavData.length > 0 && adminNavData[0].sublinks) {
            setActiveSublinks(adminNavData[0].sublinks);
            setActiveTitle(adminNavData[0].title);
            setOpenCMS(true);
        }
    }, [adminNavData, setOpenCMS]);

    return (
       <div>
            <div className="fixed h-screen w-20 border-r border-gray-300 py-5">
                <div className="w-10 mx-auto pb-10">
                    <img src={AdminLogo} alt="" />
                </div>
                <div className="flex flex-col items-center gap-2">
                {
                    adminNavData.map(({id, title, icon, sublinks}) => (
                        <div key={id} className="relative group">
                            <div 
                                onClick={() => {
                                    if (sublinks) {
                                        setActiveSublinks(sublinks);
                                        setActiveTitle(title);
                                        setOpenCMS(true);
                                    } else {
                                        setActiveSublinks([]);
                                        setOpenCMS(false);
                                    };
                                    setCMS(id)
                                }} 
                                className="p-3 rounded-full text-admintheme text-xl bg-admintheme/10 hover:bg-admintheme/30"
                            >
                                <i className="material-icons-outlined">{icon}</i>
                                <div className="absolute top-4 group-hover:translate-x-10 translate-x-7 group-hover:opacity-100 opacity-0 py-1 px-5 rounded-full rounded-bl-sm rounded-tr-sm bg-admintheme text-white text-lg font-mainFont2 transition-all duration-500">
                                    {title}
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="ml-20 overflow-hidden border-r border-gray-200">
                <div className={`${openCMS ? "w-60" : "w-0"} bg-gray-100 h-screen overflow-hidden transition-all duration-500 px-2`}>
                    <div className="h-full overflow-hidden py-10">
                        <div className="flex items-center justify-between">
                        <h1 className="py-5 font-adminFont font-semibold">{activeTitle}</h1>
                        <i onClick={()=>setOpenCMS(false)} className="cursor-pointer material-icons-outlined text-xl">close</i>
                        </div>
                            {activeSublinks.map(({ id, label }) => (
                                <div key={id} className="font-adminFont text-gray-700">
                                    <ul>
                                        <li className="cursor-pointer py-3 hover:bg-gray-200 px-3 rounded-2xl flex items-center gap-2">
                                            <i className="material-icons-outlined text-sm text-admintheme">radio_button_checked</i>
                                            <p>{label}</p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <AdminHeaderStore />
       </div>
    );
};

export default SideBar;
