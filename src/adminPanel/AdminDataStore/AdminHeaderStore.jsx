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
                {id:1,label:"Youtube Banner Video",to:""},
                {id:2,label:"Youtube Banner Video",to:""},
                {id:3,label:"Youtube Banner Video",to:""},
                {id:4,label:"Youtube Banner Video",to:""},
              ]
            },
            {
              id: 2,
              title: "About",
              to: "",
              icon:"emoji_people",
              sublinks:[
                {id:1,label:"Youtube Banner Video",to:""},
                {id:2,label:"Youtube Banner Video",to:""},
                {id:3,label:"Youtube Banner Video",to:""},
                {id:4,label:"Youtube Banner Video",to:""},
              ]
            },
            {
              id: 3,
              title: "Gallery",
              to: "",
              icon:"vrpano",
              sublinks:[
                {id:1,label:"Youtube Banner Video",to:""},
                {id:2,label:"Youtube Banner Video",to:""},
                {id:3,label:"Youtube Banner Video",to:""},
                {id:4,label:"Youtube Banner Video",to:""},
              ]
            },
            {
              id: 4,
              title: "Courses",
              to:"",
              icon: "book",
              sublinks:[
                {id:1,label:"Youtube Banner Video",to:""},
                {id:2,label:"Youtube Banner Video",to:""},
                {id:3,label:"Youtube Banner Video",to:""},
                {id:4,label:"Youtube Banner Video",to:""},
              ]
            },
            {
              id: 5,
              title: "Events",
              to:"",
              icon: "calendar_month",
            },
            {
              id: 6,
              title: "Blogs",
              to:"",
              icon: "edit",
            },
            {
              id: 7,
              title: "Faq",
              to:"",
              icon: "quiz",
            },
          ];
          

            setAdminNavData(data);
    },[setAdminNavData])

    return null
}

export default AdminHeaderStore;