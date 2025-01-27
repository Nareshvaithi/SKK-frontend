import { useContext, useState, useEffect } from "react";
import { ContextProvide } from "../../Context_API/contextProvider";
import Logo from "../../assets/Images/header/logo-SKK.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { LiaUser } from "react-icons/lia";
import { RiMenuFoldLine, RiMenuUnfold2Line } from "react-icons/ri";
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
                        <img src={Logo} alt="Saraswathy Kala Kendra Logo" />
                    </div>
                    <ul className="hidden lg:flex items-center gap-5">
                        {navbarData.map(({ id, title, to, sublinks }) => (
                            <li key={id} className="group relative">
                                <NavLink
                                onClick={()=>{window.scrollTo(0,0)}}
                                    to={to}
                                    className={({ isActive }) =>
                                        `relative text-gray-700 group-hover:text-themebrown ${isActive && to ? 'text-themebrown' : ''} font-mainFont2 links`
                                    }
                                >
                                    {title}
                                </NavLink>
                                
                                {sublinks && (
                                    <div className="w-fit hidden group-hover:block absolute top-5 bg-white shadow-lg -ml-12 mt-2 rounded-xl">
                                        <div className="p-3">
                                            {sublinks.map(({ id, label, to ,icon }) => (
                                                <NavLink
                                                to={to.split("#")[0]} // Navigate to the page without the hash
                                                key={id}
                                                className="flex items-center gap-5 py-2 px-2 hover:bg-gray-100"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent default anchor behavior
                                            
                                                    const [path, hash] = to.split("#");
                                            
                                                    // Navigate to the correct page
                                                    navigate(path, {
                                                        replace: false,
                                                        state: { hash }, // Pass the hash as state
                                                    });
                                                }}
                                            >
                                                <div className="w-10">
                                                    <img className="object-cover" src={icon} alt={label} />
                                                </div>
                                                <div>
                                                    <h1 className="text-sm font-mainFont2 text-nowrap">{label}</h1>
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
                            <li className="cursor-pointer" onClick={()=>{window.open('https://wa.me/+919840166155')}}>
                                <AiOutlineWhatsApp size={19} />
                            </li>
                            <li className="cursor-pointer" onClick={()=>{window.open('https://instagram.com/this_is_skk')}}>
                                <AiOutlineInstagram size={20} />
                            </li>
                            <li className="cursor-pointer" onClick={()=>{window.open('https://facebook.com/SKK1971')}}>
                                <CiFacebook size={20} />
                            </li>
                            <li className="cursor-pointer" onClick={()=>{window.open('https://www.youtube.com/@saraswathykalakendra5572')}}>
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

                        <div className="cursor-pointer" onClick={() => navigate('/admin')}>
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
