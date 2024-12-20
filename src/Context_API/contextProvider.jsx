import React, { createContext, useState } from "react";

export const ContextProvide = createContext();

export const Context = ({ children }) => {
    const [menu,setMenu] = useState(false);
    const [navbarData, setNavbarData] = useState([]);
    const [adminNavbarData,setAdminNavbarData] = useState([]);
    const [speciality,setSpeciality] = useState([]);
    const [homegallery,setHomegallery] = useState([]);
    const [footerlinks,setFooterlinks] = useState([]);
    const [footersocialmedia,setFootersocialmedia] = useState([]);
    const [footercontact,setFootercontact] = useState([]);
    const [founderSocialmedia,setFounderSocialmedia] = useState([]);
    const [studentRev,setStudentRev] = useState([]);
    const [homefaq,setHomefaq] = useState([]);
    const [studioVideo,setStudioVideo] = useState();
    const [environment,setEnvironment] = useState([]);
    
    return (
        <ContextProvide.Provider value={{
            navbarData,
            setNavbarData,
            menu,
            setMenu,
            speciality,
            setSpeciality,
            homegallery,
            setHomegallery,
            footerlinks,
            setFooterlinks,
            footersocialmedia,
            setFootersocialmedia,
            footercontact,
            setFootercontact,
            founderSocialmedia,
            setFounderSocialmedia,
            studentRev,
            setStudentRev,
            homefaq,
            setHomefaq,
            studioVideo,
            setStudioVideo,
            environment,
            setEnvironment
            }}>
            {children}
        </ContextProvide.Provider>
    );
};

export default Context;
