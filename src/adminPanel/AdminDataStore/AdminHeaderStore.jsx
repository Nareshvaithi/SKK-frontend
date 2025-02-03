import { useContext, useEffect } from "react"
import { AdminContextProvide } from "../Context_API/ContextProvider"

const AdminHeaderStore = ()=>{

    const {setAdminNavData} = useContext(AdminContextProvide);
  
    useEffect(()=>{
        const data = [
            {
              id: 1,
              title: "Home",
              to: "",
              icon:"roofing",
              sublinks:[
                {id:1,label:"Youtube Banner Video",endPoint:"banner",to:"",inputs:[
                  {id:1,label:"Youtube Banner Video Title",type:"text",value:"title",endPoint:"banner"},
                  {id:2,label:"YouTube Video Embeded Id",type:"text",value:"url"},
                ]},
                {id:2,label:"Youtube Shorts",endPoint:"bannerShorts",to:"",inputs:[
                  {id:1,label:"Youtube Shorts Title",type:"text",value:"title",endPoint:"bannerShorts"},
                  {id:2,label:"YouTube Shorts Embeded Id",type:"text",value:"url",endPoint:"bannerShorts"},
                ]},
                {id:3,label:"Teachers",to:"",endPoint:"homeGurus",inputs:[
                  {id:1,label:"Teacher Name",type:"text",endPoint:"homeGurus",value:"name"},
                  {id:2,label:"Teacher passion",type:"text",endPoint:"homeGurus",value:"prof"},
                  {id:2,label:"Teacher About",type:"text",endPoint:"homeGurus",value:"about"},
                  {id:2,label:"Teacher Experience",type:"text",endPoint:"homeGurus",value:"experience"},
                  {id:2,label:"Teacher Achivements",type:"text",endPoint:"homeGurus",value:"achivements"},
                  {id:2,label:"Facebook",type:"text",endPoint:"homeGurus",value:"facebook"},
                  {id:2,label:"Instagram",type:"text",endPoint:"homeGurus",value:"instagram"},
                  {id:3,label:"Teacher Image",type:"file",endPoint:"homeGurus",value:"url"}
                ]},
                {id:4,label:"Home Gallery",to:"",endPoint:"gallery",inputs:[
                  {id:1,label:"Youtube Banner Video Title",type:"text",endPoint:"gallery"},
                  {id:2,label:"YouTube Video Embeded Id",type:"text",endPoint:"gallery"},
                ]},
                {id:5,label:"Testimonials",to:"",endPoint:"testimonials",inputs:[
                  {id:1,label:"Youtube Banner Video Title",type:"text",endPoint:"testimonials"},
                  {id:2,label:"YouTube Video Embeded Id",type:"text",endPoint:"testimonials"},
                ]},
              ],
            },
            {
              id: 2,
              title: "About",
              to: "",
              icon:"emoji_people",
              sublinks:[
                {id:1,label:"Youtube Banner Video1",to:""},
                {id:2,label:"Youtube Banner Video1",to:""},
                {id:3,label:"Youtube Banner Video1",to:""},
                {id:4,label:"Youtube Banner Video1",to:""},
              ]
            },
            {
              id: 3,
              title: "Gallery",
              to: "",
              icon:"vrpano",
              sublinks:[
                {id:1,label:"Bharatanayam",to:""},
                {id:2,label:"Carnatic Music",to:""},
                {id:3,label:"Veena",to:""},
                {id:4,label:"Mirdangam",to:""},
                {id:4,label:"Kalari",to:""},
              ]
            },
            {
              id: 4,
              title: "Courses",
              to:"",
              icon: "book",
              sublinks:[
                {id:1,label:"Bharatanayam",to:""},
                {id:2,label:"Carnatic Music",to:""},
                {id:3,label:"Veena",to:""},
                {id:4,label:"Mirdangam",to:""},
                {id:4,label:"Kalari",to:""},
              ]
            },
            {
              id: 5,
              title: "Events",
              to:"",
              icon: "calendar_month",
              sublinks:[
                {id:1,label:"Bharatanayam",to:""},
                {id:2,label:"Carnatic Music",to:""},
                {id:3,label:"Veena",to:""},
                {id:4,label:"Mirdangam",to:""},
                {id:4,label:"Kalari",to:""},

              ]
            },
            
            {
              id: 6,
              title: "Blogs",
              to:"",
              icon: "edit",
              sublinks:[
                {id:1,label:"Blogs",to:""},
              
              ]
            },
            {
              id: 7,
              title: "Faq",
              to:"",
              icon: "quiz",
              sublinks:[
                {id:1,label:"FAQ",to:""},
               
              ]
            },
          ];
          setAdminNavData(data);
    },[])

    return null
}

export default AdminHeaderStore;