import { useContext, useState } from "react";
import AdminHeaderStore from "../AdminDataStore/AdminHeaderStore";
import { AdminContextProvide } from "../Context_API/ContextProvider";
import AdminLogo from "../../assets/Images/AdminLogo.png";

const SideBar = () => {
    const { adminNavData } = useContext(AdminContextProvide);
    const [activeId, setActiveId] = useState(null); // State to manage active icon

    const handleIconClick = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id)); // Toggle active state
    };

    const closeSublinksBar = () => {
        setActiveId(null); // Reset activeId to close the sublinks bar
    };

    return (
        <div className="flex w-20 bg-white h-screen fixed top-0 z-50">
            {/* Main Sidebar */}
            <div className="px-5 border-r border-gray-300 h-full flex flex-col justify-around w-20">
                {/* Admin Logo */}
                <div className="w-10 mx-auto">
                    <img src={AdminLogo} alt="Admin Logo" />
                </div>

                {/* Navigation Items */}
                {adminNavData.map(({ id, title, icon }) => (
                    <div key={id} className="py-3 relative group cursor-pointer">
                        {/* Icon */}
                        <i
                            className={`material-icons-outlined text-3xl text-themebrown w-fit mx-auto hover:bg-themebrown/20 p-1 rounded-full ${
                                activeId === id ? "bg-gray-200 rounded-lg" : ""
                            }`}
                            onClick={() => handleIconClick(id)}
                        >
                            {icon}
                        </i>

                        {/* Tooltip */}
                        <div className="font-mainFont2 absolute top-1/4 left-16 group-hover:opacity-100 opacity-0 transition-opacity duration-500 bg-themebrown text-white px-5 py-1 rounded-bl-sm rounded-tr-sm rounded-full z-10">
                            {title}
                        </div>
                    </div>
                ))}

                {/* Account Icon */}
                <div>
                    <i className="material-icons-outlined text-4xl text-themebrown">account_circle</i>
                </div>
            </div>
            <AdminHeaderStore />
        </div>
    );
};

export default SideBar;
