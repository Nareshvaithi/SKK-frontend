import { useContext, useEffect } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import axios from "axios";

const Gallerydata = ()=>{
    const {setGallery, APIurl} = useContext(ContextProvide);
    useEffect(()=>{
        const fetchGallery = async ()=>{
            try{
                const galleryimages = await axios.get(`${APIurl}/gallery`);
                setGallery(galleryimages.data);
                console.log("mark",galleryimages.data)
            }
            catch(error){
                console.log(error);
            }
        }
        fetchGallery();
    },[])
    return null;
}


export default Gallerydata