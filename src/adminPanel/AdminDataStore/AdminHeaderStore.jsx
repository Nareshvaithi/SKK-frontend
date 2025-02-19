import { useContext, useEffect } from "react"
import { AdminContext } from "../Context_API/ContextProvider"

const AdminHeaderStore = ()=>{

<<<<<<< HEAD
    const {setAdminNavData} = useContext(AdminContext);
=======
    const {setAdminNavData,video,setVideo,shorts,setShorts,teachers,setTeachers,testimonials,setTestimonials,items, setItems,} = useContext(AdminContextProvide);
>>>>>>> refs/remotes/origin/main
  
    useEffect(()=>{
      const points=["banner",,"bannershorts","bannerimages","homegurus","fandq","testimonials","blogs"]
        const data = [
            {
              id: 1,
              title: "Home",
              to: "",
              icon:"roofing",
              sublinks:[
                {id:1,label:"Video",endPoint:"banner",to:"",inputs:[
                  {id:1,label:"Youtube Banner Video Title",type:"text",value:"title",endPoint:"banner"},
                  {id:2,label:"YouTube Video Embeded Id",type:"text",value:"url",endPoint:"banner"},
                ],
              innerData:items
              },
                {id:2,label:"Shorts",endPoint:"bannerShorts",to:"",inputs:[
                  {id:1,label:"Youtube Shorts Title",type:"text",value:"title",endPoint:"bannerShorts"},
                  {id:2,label:"YouTube Shorts Embeded Id",type:"text",value:"url",endPoint:"bannerShorts"},
                ],
              innerData:items},
                {id:3,label:"Teachers",to:"",endPoint:"homeGurus",inputs:[
                  {id:1,label:"Teacher Name",type:"text",endPoint:"homeGurus",value:"name"},
                  {id:2,label:"Teacher passion",type:"text",endPoint:"homeGurus",value:"prof"},
                  {id:3,label:"Teacher About",type:"text",endPoint:"homeGurus",value:"about"},
                  {id:4,label:"Teacher Experience",type:"text",endPoint:"homeGurus",value:"experience"},
                  {id:5,label:"Teacher Achivements",type:"text",endPoint:"homeGurus",value:"achivements"},
                  {id:6,label:"Facebook",type:"text",endPoint:"homeGurus",value:"facebook"},
                  {id:7,label:"Instagram",type:"text",endPoint:"homeGurus",value:"instagram"},
                  {id:8,label:"Teacher Image",type:"file",endPoint:"homeGurus",value:"image"}
<<<<<<< HEAD
                ]},
=======
                ],innerData:items},
>>>>>>> refs/remotes/origin/main
                {id:4,label:"Testimonials",to:"",endPoint:"testimonials",inputs:[
                  {id:1,label:"Name",type:"text",endPoint:"testimonials",value:"name"},
                  {id:2,label:"profession",type:"text",endPoint:"testimonials",value:"profession"},
                  {id:3,label:"review",type:"text",endPoint:"testimonials",value:"review"},
                  {id:4,label:"starRating",type:"text",endPoint:"testimonials",label:"starRating"},
<<<<<<< HEAD
                ]},
=======
                ],innerData:items},
>>>>>>> refs/remotes/origin/main
              ],
            },
            {
              id: 2,
              title: "Gallery",
              to: "",
              icon:"vrpano",
              sublinks:[
                {id:1,label:"Bharatanayam",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"gallery",value:"Bharatanayam"},
                  {id:2,label:"image",type:"file",endPoint:"gallery",value:"image"},
                ]},
                {id:2,label:"Carnatic Music",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"gallery",value:"Carnatic Music"},
                  {id:2,label:"image",type:"file",endPoint:"gallery",value:"image"},
                ]},
                {id:3,label:"Veena",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"gallery",value:"Veena"},
                  {id:2,label:"image",type:"file",endPoint:"gallery",value:"image"},
                ]},
                {id:4,label:"Mirdangam",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"gallery",value:"Mirdangam"},
                  {id:2,label:"image",type:"file",endPoint:"gallery",value:"image"},
                ]},
                {id:4,label:"Kalari",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"gallery",value:"Kalari"},
                  {id:2,label:"image",type:"file",endPoint:"gallery",value:"image"},
                ]},
              ]
            },
            {
              id: 4,
              title: "Events",
              to:"",
              icon: "calendar_month",
              sublinks:[
                {id:1,label:"Bharatanayam",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"events",value:"Bharatanayam"},
                  {id:2,label:"Event Name",type:"text",endPoint:"events",value:"Event Name"},
                  {id:3,label:"Event date",type:"date",endPoint:"events",value:"Event date"},
                  {id:4,label:"Event about",type:"text",endPoint:"events",value:"Event about"},
                  {id:5,label:"Image",type:"file",endPoint:"events",value:"image"},
                ]},
                {id:2,label:"Carnatic Music",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"events",value:"Carnatic Music"},
                  {id:2,label:"Event Name",type:"text",endPoint:"events",value:"Event Name"},
                  {id:3,label:"Event date",type:"date",endPoint:"events",value:"Event date"},
                  {id:4,label:"Event about",type:"text",endPoint:"events",value:"Event about"},
                  {id:5,label:"Image",type:"file",endPoint:"events",value:"image"},
                ]},
                {id:3,label:"Veena",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"events",value:"Veena"},
                  {id:2,label:"Event Name",type:"text",endPoint:"events",value:"Event Name"},
                  {id:3,label:"Event date",type:"date",endPoint:"events",value:"Event date"},
                  {id:4,label:"Event about",type:"text",endPoint:"events",value:"Event about"},
                  {id:5,label:"Image",type:"file",endPoint:"events",value:"image"},
                ]},
                {id:4,label:"Mirdangam",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"events",value:"Mirdangam"},
                  {id:2,label:"Event Name",type:"text",endPoint:"events",value:"Event Name"},
                  {id:3,label:"Event date",type:"date",endPoint:"events",value:"Event date"},
                  {id:4,label:"Event about",type:"text",endPoint:"events",value:"Event about"},
                  {id:5,label:"Image",type:"file",endPoint:"events",value:"image"},
                ]},
                {id:4,label:"Kalari",to:"",inputs:[
                  {id:1,label:"Category",type:"text",endPoint:"events",value:"Kalari"},
                  {id:2,label:"Event Name",type:"text",endPoint:"events",value:"Event Name"},
                  {id:3,label:"Event date",type:"date",endPoint:"events",value:"Event date"},
                  {id:4,label:"Event about",type:"text",endPoint:"events",value:"Event about"},
                  {id:5,label:"Image",type:"file",endPoint:"events",value:"image"},
                ]},
              ]            },
            
            {
              id: 5,
              title: "Blogs",
              to:"",
              icon: "edit",
              sublinks:[
                {id:1,label:"Blogs",to:"",inputs:[
                  {id:1,label:"Title",type:"text",endPoint:"blogs",value:"Title"},
                  {id:2,label:"Author Name",type:"text",endPoint:"blogs",value:"authorName"},
                  {id:3,label:"Content",type:"text",endPoint:"blogs",value:"content"},
                  {id:4,label:"Gallary Image",type:"file",endPoint:"blogs",value:"gallaryImage"},
                  {id:5,label:"Banner Image",type:"file",endPoint:"blogs",value:"bannerImage"},
                ]},
              
              ]
            },
            {
              id: 7,
              title: "Faq",
              to:"",
              icon: "quiz",
              sublinks:[
                {id:1,label:"FandQ",to:"",inputs:[
                {id:1,label:"Question",type:"text",value:"question",endPoint:"fandq"},
                {id:2,label:"Answer",type:"text",value:"answer",endPoint:"fandq"},
                ]}
              ]
            },
          ];
          setAdminNavData(data);
    },[setAdminNavData,items])

    return null
}

export default AdminHeaderStore;