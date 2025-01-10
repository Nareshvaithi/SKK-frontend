import { useContext, useEffect, useRef } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Studiodata } from "../../../DataStore/Aboutdata";
import video from "../../../assets/Images/about/ourstudio.webm"
const OurStudio = () => {
    const { studioVideo } = useContext(ContextProvide);
    const videoRef = useRef(null); // Reference to the video element

    useEffect(() => {
        const videoElement = videoRef.current;

        // Toggle mute on video click
        const handleVideoClick = () => {
            videoElement.muted = !videoElement.muted; // Toggle mute
        };

        // Attach the click event listener
        if (videoElement) {
            videoElement.addEventListener('click', handleVideoClick);
        }

        // Create an Intersection Observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoElement.muted = false; // Unmute when video is in the viewport
                } else {
                    videoElement.muted = true; // Mute when video is out of the viewport
                }
            },
            { threshold: 0.5 } // 50% of the video should be visible to trigger unmute
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        // Cleanup observer and event listener when component unmounts
        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
                videoElement.removeEventListener('click', handleVideoClick);
            }
        };
    }, []);

    return (
        <>
            <div className="w-full">
                <div className="container">
                    <div className="text-center py-5">
                        <h1 className="headingText py-5">Our Studio</h1>
                        <p className="font-mainFont2 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error veniam, aut laboriosam magnam cupiditate omnis aliquid facilis distinctio expedita voluptatem accusamus, quisquam placeat quod repellendus incidunt non reprehenderit. Quo, error!</p>
                    </div>
                </div>
                <div className="w-full px-52 relative">
                    <video 
                        ref={videoRef} 
                        className="block w-full h-1/2 focus:outline-none cursor-pointer" 
                        autoPlay 
                        muted 
                        loop
                    >
                        <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <Studiodata />
        </>
    )
}

export default OurStudio;
