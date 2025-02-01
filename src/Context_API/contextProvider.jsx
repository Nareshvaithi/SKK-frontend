import React, { createContext, useState } from "react";

export const ContextProvide = createContext();

export const Context = ({ children }) => {
    const APIurl = "https://skk-api.konceptsdandd.com";
    const [menu, setMenu] = useState(false);
    const [navbarData, setNavbarData] = useState([]);
    const [bannerVideo, setBannerVideo] = useState([]);
    const [shorts, setShorts] = useState([]);
    const [bannerSlider, setBannerSlider] = useState([]);
    const [gurus, setGurus] = useState([]);
    const [courses, setCourses] = useState([]);
    const [speciality, setSpeciality] = useState([]);
    const [homegallery, setHomegallery] = useState([]);
    const [theFounder,setTheFounder] = useState([]);
    const [vision,setVision] = useState([]);
    const [training,setTraining] = useState([]);
    const [theGuru,setTheGuru] = useState([]);
    const [teachAndLearn,setTeachAndLearn] = useState([]);
    const [awardAndHonour,setAwardAndHonour] = useState([]);
    const [innovation,setInnovation] = useState([]);
    const [activity,setActivity] = useState([]);
    const [tvShow,setTvShow] = useState([]);
    const [contemporary,setContemporary] = useState([]);
    const [annaiMozhiye,setAnnaiMozhiye] = useState([]);
    const [margazh,setMargazh] = useState([]);
    const [activity2,setActivity2] = useState([]);
    const [runningImage,setRunningImage] = useState([]);
    const [footerlinks, setFooterlinks] = useState([]);
    const [footersocialmedia, setFootersocialmedia] = useState([]);
    const [footercontact, setFootercontact] = useState([]);
    const [founderSocialmedia, setFounderSocialmedia] = useState([]);
    const [studentRev, setStudentRev] = useState([]);
    const [homefaq, setHomefaq] = useState([]);
    const [studioVideo, setStudioVideo] = useState();
    const [environment, setEnvironment] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [eventBanner, setEventBanner] = useState([]);
    const [eventList, setEventList] = useState([]);
    const [blogSocialMedia, setBlogSocialMedia] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [curriculam,setCurriculam] = useState([]);
    const [galleryType,setGalleryType] = useState(null);

    return (
        <ContextProvide.Provider value={{
            APIurl,
            navbarData,setNavbarData,
            bannerVideo,setBannerVideo,
            shorts,setShorts,
            bannerSlider,setBannerSlider,
            gurus,setGurus,
            menu,setMenu,
            speciality,setSpeciality,
            courses,setCourses,
            homegallery,setHomegallery,
            footerlinks,setFooterlinks,
            footersocialmedia,setFootersocialmedia,
            footercontact,setFootercontact,
            founderSocialmedia,setFounderSocialmedia,
            studentRev,setStudentRev,
            homefaq,setHomefaq,
            studioVideo,setStudioVideo,
            environment,setEnvironment,
            gallery,setGallery,
            testimonials,setTestimonials,
            eventBanner,setEventBanner,
            eventList,setEventList,
            blogs,setBlogs,
            blogSocialMedia,setBlogSocialMedia,
            curriculam,setCurriculam,
            galleryType,setGalleryType,
            theFounder,setTheFounder,
            vision,setVision,
            training,setTraining,
            theGuru,setTheGuru,
            teachAndLearn,setTeachAndLearn,
            awardAndHonour,setAwardAndHonour,
            innovation,setInnovation,
            activity,setActivity,
            tvShow,setTvShow,
            contemporary,setContemporary,
            annaiMozhiye,setAnnaiMozhiye,
            margazh,setMargazh,
            activity2,setActivity2,
            runningImage,setRunningImage
        }}>
            {children}
        </ContextProvide.Provider>
    );
};

export default Context;
