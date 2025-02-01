import { useContext } from "react";
import { Footerdata } from "../../DataStore/HomeStore";
import Logo from "../../assets/Images/header/logo-SKK.png";
import footerBg from "../../assets/Images/footer/footerBg.webp"
import { ContextProvide } from "../../Context_API/contextProvider";
import { NavLink } from "react-router-dom";
import TejusdigiLogo from "../../assets/Images/footer/Logo.webp";
import Button from "../Button/Button";
const Footer = ()=>{
    const {footerlinks,footersocialmedia,footercontact} = useContext(ContextProvide);

    return(
        <>
            <div className="w-full h-auto pb-5">
                <div style={{backgroundImage:`url(${footerBg})`}} className="relative w-full h-80 bg-center bg-no-repeat bg-cover">
                    <div className="absolute w-full h-full">
                        <div className="text-white font-mainFont2 flex flex-col gap-5 items-center justify-center container h-full">
                            <h1 className="text-xl lg:text-4xl font-bold text-center">Saraswathy Kala Kendra is a vibrant sanctuary where young minds are nurtured to master the divine art of performance.</h1>
                            <div onClick={()=>{window.scrollTo(0, 0)}}>
                            <Button 
                                text="Explore Our Courses"
                                link="/courses"
                                hoverbg="bg-white"
                                textcolor="text-white"
                                hovertextcolor="group-hover:text-themebrown" 
                                bg="bg-themebrown" 
                                px={"px-5"}
                                py={"py-3"}                 
                            />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container w-full flex-wrap lg:flex-nowrap h-full flex items-start pt-5">
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
                        <div className="pb-3">
                            <h1 className="font-mainFont1 text-lg font-semibold">Explore SKK</h1>
                        </div>
                        <div>
                            {
                                footerlinks.map(({id,title,to})=>(
                                    <NavLink onClick={()=>{window.scrollTo(0,0)}} key={id} to={to} className={"font-mainFont2 block pb-2"}>
                                        <div className="footerlinks w-fit">
                                        {title}
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-full">
                        <div className="pb-3">
                            <h1 className="font-mainFont1 text-lg font-semibold">Follow Us</h1>
                        </div>
                        <div>
                            {
                                footersocialmedia.map(({id,icon,name,link})=>(
                                    <NavLink 
                                        key={id}
                                        to={link} 
                                        className={({ isActive }) => 
                                            `font-mainFont2 pb-2 flex gap-2 items-center group ${isActive ? 'active' : ''}`
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
                        <div className="pb-3">
                            <h1 className="font-mainFont1 text-lg font-semibold">Contact</h1>
                        </div>
                        <div>
                            {
                                footercontact.map(({id,icon,title,link})=>(
                                    <NavLink onClick={()=>{window.open(link);window.scrollTo(0,0)}} key={id} className={`flex gap-2 items-start font-mainFont2 group pb-2`}>
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
                    &copy; {new Date().getFullYear()} copyright Saraswathi Kala Kendra. All Rights Reserved
                    </div>
                    <div title="TejusDigi" alt="this site developed by https://tejusdigi.com" className="w-20 cursor-pointer" onClick={()=>window.open('https://tejusdigi.com')}>
                        <img src={TejusdigiLogo} alt="" />
                    </div>
                </div>
            </div>
            <Footerdata/>
        </>
    )
}

export default Footer;