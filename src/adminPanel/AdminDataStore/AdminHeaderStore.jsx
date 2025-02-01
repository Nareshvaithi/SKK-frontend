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
                {id:1,label:"Youtube Banner Video",to:"",inputs:[
                  {id:1,label:"Youtube Banner Video Title",type:"text"},
                  {id:2,label:"YouTube Video Embeded Id",type:"text"},
                ]},
                {id:2,label:"Youtube Shorts",to:"",inputs:[
                  {id:1,label:"Youtube Shorts Title",type:"text"},
                  {id:2,label:"YouTube Shorts Embeded Id",type:"text"},
                ]},
                {id:3,label:"Teachers",to:"",inputs:[
                  {id:1,label:"Teacher Name",type:"text"},
                  {id:2,label:"Teacher Style",type:"text"},
                  {id:3,label:"Teacher Image",type:"file"}
                ]},
                {id:4,label:"Home Gallery",to:"",inputs:[
                  {id:1,label:"Youtube Banner Video Title",type:"text"},
                  {id:2,label:"YouTube Video Embeded Id",type:"text"},
                ]},
                {id:5,label:"Testimonials",to:"",inputs:[
                  {id:1,label:"Youtube Banner Video Title",type:"text"},
                  {id:2,label:"YouTube Video Embeded Id",type:"text"},
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