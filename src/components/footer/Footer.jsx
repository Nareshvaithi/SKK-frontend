import { useContext } from "react";
import { Footerdata } from "../../DataStore/HomeStore";
import Logo from "../../assets/Images/header/logo-SKK.png";
import footerBg from "../../assets/Images/footer/footerBg.jpg"
import { ContextProvide } from "../../Context_API/contextProvider";
import { NavLink } from "react-router-dom";
const Footer = ()=>{
    const {footerlinks,footersocialmedia,footercontact} = useContext(ContextProvide);

    return(
        <>
            <div className="w-full h-auto pt-10 pb-5">
                <div style={{backgroundImage:`url(${footerBg})`}} className="relative w-full h-80 bg-center bg-no-repeat bg-cover">
                    <div className="absolute w-full h-full">
                        <div className="text-white font-mainFont2 flex flex-col gap-5 items-center justify-center container h-full">
                            <h1 className="text-xl lg:text-4xl font-bold text-center">Saraswathy Kala Kendra is a vibrant sanctuary where young minds are nurtured to master the divine art of performance.</h1>
                            <NavLink className={"px-4 py-2 bg-themebrown hover:bg-white hover:text-themebrown rounded-xl transition-colors duration-500"}>Explore Our Courses</NavLink>
                        </div>
                    </div>
                </div>
                <div className="container w-full flex-wrap lg:flex-nowrap h-full flex items-start py-10">
                    <div className="w-full lg:w-2/6 flex flex-col items-start gap-3">
                        <div className="w-40">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="font-mainFont2 text-sm">
                            <p className="w-full lg:w-2/3">
                            Saraswathy Kala Kendra is a teaching institute dedicated to promoting the rich performing arts of India among the youth. Our mission is to unearth hidden talents and nurture them into future icons of the world. We provide students, including underprivileged children, with access to quality training in the arts, empowering them to discover and express their creative voices.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/6 flex flex-wrap lg:flex-nowrap items-start">

                    <div className="w-1/2 lg:w-full">
                        <div>
                            <h1 className="font-mainFont1 text-lg">Explore SKK</h1>
                        </div>
                        <div>
                            {
                                footerlinks.map(({id,title,to})=>(
                                    <NavLink key={id} to={to} className={"font-mainFont2 block py-1"}>
                                        <div className="footerlinks w-fit">
                                        {title}
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-full">
                        <div>
                            <h1 className="font-mainFont1 text-lg">Follow Us</h1>
                        </div>
                        <div>
                            {
                                footersocialmedia.map(({id,icon,name,link})=>(
                                    <NavLink 
                                        to={link} 
                                        className={({ isActive }) => 
                                            `font-mainFont2 py-1 flex gap-2 items-center group ${isActive ? 'active' : ''}`
                                          }
                                        >
                                        <div className="text-2xl">{icon}</div>
                                        <div className="footerlinks">{name}</div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <h1 className="font-mainFont1 text-lg">Contact</h1>
                        </div>
                        <div>
                            {
                                footercontact.map(({id,icon,title,link})=>(
                                    <NavLink key={id} to={'/'} className={`flex gap-2 items-center font-mainFont2 group py-1`}>
                                        <div className="text-xl">{icon}</div>
                                        <div className="footerlinks">{title}</div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-5"></div>
                <div className="container flex flex-col lg:flex-row justify-between items-center font-mainFont2 text-sm">
                    <div className="flex gap-2 items-center">
                        <NavLink>Terms of use</NavLink>
                        <NavLink>Private Policy</NavLink>
                    </div>
                    <div className="text-center">
                        copyright Saraswathi Kala Kendra &copy; {new Date().getFullYear()}. All Rights Reserved
                    </div>
                </div>
            </div>
            <Footerdata/>
        </>
    )
}

export default Footer;