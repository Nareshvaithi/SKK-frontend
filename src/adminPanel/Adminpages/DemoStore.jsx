import React from 'react'
import Gallery from '../../pages/gallery'
import { RiHomeLine } from "react-icons/ri";
import { RiGalleryLine } from "react-icons/ri";

function DemoStore() {
   const demoData=[

      {     id:1,
            page:"Home",
            icon:<RiHomeLine />,
            subPages:[
                        {id:1,pageType:"Banner",inputs:[{id:1,label:"Banner Image",type:"file",endPoint:"banner",value:"image"}]},
                        {id:2,pageType:"About",inputs:[
                              {id:1,label:"About content",type:"text",endPoint:"homeAbout",value:"abou"},
                              {id:2,label:"About Image",type:"file",endPoint:"homeAbout"},
                        ]},
                        {id:3,pageType:"Teachers",inputs:[
                              {id:1,label:"Teacher Name",type:"text",endPoint:"homeGurus",value:"name"},
                              {id:2,label:"Teacher passion",type:"text",endPoint:"homeGurus",value:"prof"},
                              {id:3,label:"Teacher About",type:"text",endPoint:"homeGurus",value:"about"},
                              {id:4,label:"Teacher Experience",type:"text",endPoint:"homeGurus",value:"experience"},
                              {id:5,label:"Teacher Achivements",type:"text",endPoint:"homeGurus",value:"achivements"},
                              {id:6,label:"Facebook",type:"text",endPoint:"homeGurus",value:"facebook"},
                              {id:7,label:"Instagram",type:"text",endPoint:"homeGurus",value:"instagram"},
                              {id:8,label:"Teacher Image",type:"file",endPoint:"homeGurus",value:"image"}
                              ]},
                        {
                        id:4,pageType:"FandQ",inputs:[
                              {id:1,label:"Question",type:"text",value:"question",endPoint:"fandq"},
                              {id:2,label:"Answer",type:"text",value:"answer",endPoint:"fandq"},
                        ]},
                        {
                        id:5,pageType:"Testimonials",inputs:[
                              {id:1,label:"Name",type:"text",endPoint:"testimonials",value:"name",endPoint:"testimonials"},
                              {id:2,label:"profession",type:"text",endPoint:"testimonials",value:"profession"},
                              {id:2,label:"review",type:"text",endPoint:"testimonials",value:"review"},
                              {id:2,label:"starRating",type:"text",endPoint:"testimonials",label:"starRating"},
                                                ]
                        },
                     
                              
      ]},
      {id:2,
      page:"Gallery",
      icon:<RiGalleryLine />,
      subPages:[
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
      {id:3,
            page:"Events",
            subPages:[
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
              
      ]},
      {id:1,page:Blogs,subPages:[]}
   ]

  return (
    <div></div>
  )
}

export default DemoStore