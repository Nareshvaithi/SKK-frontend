import { useContext, useState } from "react";
import { ContextProvide } from "../../Context_API/contextProvider";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/Images/header/logo-SKK.png";
import { NavLink } from "react-router-dom";

const ResponsiveNav = () => {
    const { navbarData, footersocialmedia, footercontact } = useContext(ContextProvide);
    const { menu, setMenu } = useContext(ContextProvide);

    const [expandedItem, setExpandedItem] = useState(null);

    const toggleSublinks = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <div className={`w-full h-full z-[99999] bg-white fixed top-0 ${menu ? "transform translate-x-0" : "transform -translate-x-[150%]"} transition-all duration-1000 ease-in-out`}>
            <div className="flex justify-between items-center py-4 px-3 shadow-sm shadow-themebrown/30">
                <div className="w-40">
                    <img src={Logo} alt="Saraswathy Kala Kendra Logo" />
                </div>
                <div onClick={() => { setMenu(false); window.scrollTo(0, 0); }}>
                    <RiMenuUnfold2Line size={30} />
                </div>
            </div>
            <div className="px-5 pb-10 grid grid-cols-2 overflow-y-auto h-[calc(100vh-72px)]">
                <div>
                    <h1 className="font-mainFont1 text-xl py-2">Explore SKK</h1>
                    <nav>
                        <ul className="flex flex-col gap-2 font-mainFont2 text-lg">
                            {navbarData.map(({ id, title, to, sublinks }) => (
                                <div key={id} className={`${id === 8 ? "hidden" : "block"} flex flex-col gap-2`}>
                                    <div className="flex items-center gap-2">
                                        <NavLink
                                            onClick={() => { setMenu(false); window.scrollTo(0, 0); }}
                                            to={to}
                                        >
                                            {title}
                                        </NavLink>
                                        {sublinks && (
                                            <p onClick={() => toggleSublinks(id)} className="flex items-center cursor-pointer">
                                                <MdKeyboardArrowDown size={20} />
                                            </p>
                                        )}
                                    </div>
                                    {sublinks && (
                                        <ul className={`overflow-hidden transition-all ease-linear duration-1000 ${expandedItem === id ? 'max-h-screen' : 'max-h-0'}`}>
                                            {sublinks.map(({ id, label, to }) => (
                                                <li key={id}>
                                                    <NavLink to={to}>{label}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <h1 className="font-mainFont1 text-xl py-2">Follow Us</h1>
                    <nav>
                        <ul className="flex flex-col gap-2 font-mainFont2 text-lg">
                            {footersocialmedia.map(({ id, icon, name, link }) => (
                                <NavLink
                                    key={id}
                                    to={link}
                                    className={({ isActive }) => `font-mainFont2 py-1 flex gap-2 items-center group ${isActive ? 'active' : ''}`}
                                >
                                    <div className="text-2xl">{icon}</div>
                                    <div className="footerlinks">{name}</div>
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="col-span-2">
                    <h1 className="font-mainFont1 text-xl py-2">Contact Us</h1>
                    <nav>
                        <ul className="flex flex-col gap-2 font-mainFont2 text-lg">
                            {footercontact.map(({ id, icon, title, link }) => (
                                <NavLink key={id} to={'/'} className={`flex gap-2 items-center font-mainFont2 group py-1`}>
                                    <div className="text-xl">{icon}</div>
                                    <div className="footerlinks">{title}</div>
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNav;
