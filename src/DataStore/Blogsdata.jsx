import { useContext, useEffect } from "react"
import { ContextProvide } from "../Context_API/contextProvider"
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiOutlineX } from "react-icons/ai";

import axios from "axios";
const Blogsdata = ()=>{
    const {setBlogSocialMedia,setBlogs,APIurl} = useContext(ContextProvide);
    useEffect(()=>{
        const socialMedia = [
            {id:1,name:"Instagram",icon:<AiOutlineInstagram size={25}/>,link:""},
            {id:2,name:"Youtube",icon:<AiOutlineYoutube size={25}/>,link:""},
            {id:3,name:"Facebook",icon:<AiOutlineFacebook size={23}/>,link:""},
            {id:4,name:"X",icon:<AiOutlineX size={20}/>,link:""},
        ]
        const fetchBlogs = async ()=>{
            try{
                const response = await axios.get(`${APIurl}/blogs`);
                setBlogs(response.data);
                console.log(response.data)
            }
            catch (error) {
            console.error("Error fetching Blogs:", error);
            }
        } 
        setBlogSocialMedia(socialMedia);
        fetchBlogs();
    },[])

    return null;
}

export default Blogsdata;