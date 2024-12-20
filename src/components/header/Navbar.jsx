import { useContext, useState, useEffect } from "react";
import { ContextProvide } from "../../Context_API/contextProvider";
import Logo from "../../assets/Images/header/logo-SKK.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { LiaUser } from "react-icons/lia";
import { RiMenuFoldLine } from "react-icons/ri";
import { Headerdata } from "../../DataStore/HomeStore";

const Navbar = () => {
    const { menu, setMenu } = useContext(ContextProvide);
    const navigate = useNavigate();
    const { navbarData } = useContext(ContextProvide);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                setIsScrollingUp(false); // Scrolling down
            } else {
                setIsScrollingUp(true); // Scrolling up
            }

            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
        };
    }, [lastScrollTop]);

    return (
        <>
            <div className={`${isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'} transition-all duration-500 bg-white fixed top-0 right-0 left-0 shadow-themebrown/30 shadow-sm z-30`}>
                <div className="container mx-auto flex justify-between items-center py-4">
                    <div className="w-40">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className="hidden lg:flex items-center gap-5">
                        {navbarData.map(({ id, title, to, sublinks }) => (
                            <li key={id} className="group relative">
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `relative text-gray-700 group ${isActive ? 'text-themebrown' : ''} font-mainFont2 links`
                                    }
                                >
                                    {title}
                                </NavLink>

                                {sublinks && (
                                    <div className="fixed top-20 left-0 w-screen h-screen transition-all duration-1000 translate-x-[100%] group-hover:translate-x-0 bg-white group-hover:flex flex-col items-center justify-center">
                                        <div className="w-full h-full container pt-20">
                                            {sublinks.map(({ id, label, label2, to ,icon }) => (
                                                    <NavLink 
                                                        key={id}
                                                        to={to} 
                                                        className="flex gap-5 items-center group py-3"
                                                    >
                                                        <div className="w-14">
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <h1 className="group-hover:sublinks font-mainFont1 text-lg">{label}</h1>
                                                            <p className="font-mainFont2 text-sm pt-1">{label2}</p>
                                                        </div>
                                                    </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}

                        <div className="border-r border-black h-4"></div>

                        <div className="flex items-center gap-2">
                            <li>
                                <AiOutlineWhatsApp size={19} />
                            </li>
                            <li>
                                <AiOutlineInstagram size={20} />
                            </li>
                            <li>
                                <AiOutlineYoutube size={22} />
                            </li>
                        </div>

                        <div className="border-r border-black h-4"></div>

                        <div
                            onClick={() => window.location.href = "tel:+919840166155"}
                            className="flex items-center gap-1 cursor-pointer font-mainFont2"
                        >
                            <li>
                                <LuPhone />
                            </li>
                            <li>+91 98401 66155</li>
                        </div>

                        <div className="border-r border-black h-4"></div>

                        <div onClick={() => navigate('/adminlayout')}>
                            <LiaUser size={20} />
                        </div>
                    </ul>

                    <div className="block lg:hidden" onClick={() => setMenu(true)}>
                        <RiMenuFoldLine size={30} />
                    </div>
                </div>
            </div>
            <Headerdata />
        </>
    );
};

export default Navbar;
