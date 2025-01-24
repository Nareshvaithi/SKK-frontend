import React, { useContext,useEffect } from 'react'
import { ContextProvide } from '../Context_API/contextProvider';
import bannerImg1 from "../assets/Images/Events/Banner/29.webp"
import bannerImg2 from "../assets/Images/Events/Banner/31.webp"
import bannerImg3 from "../assets/Images/Events/Banner/51.webp"
import bannerImg4 from "../assets/Images/Events/Banner/19.webp"
import bannerImg5 from "../assets/Images/Events/Banner/110.webp"

//bharathanatiyam............................................................................
//event_01 images ...............................................
import bharathanatiyam_event_01 from "../assets/Images/Events/bharathanattiyam/teaching01.webp"
import bharathanatiyam_event_02 from "../assets/Images/Events/bharathanattiyam/teaching02.webp"
import bharathanatiyam_event_03 from "../assets/Images/Events/bharathanattiyam/teaching03.webp"
import bharathanatiyam_event_04 from "../assets/Images/Events/bharathanattiyam/teaching04.webp"
import bharathanatiyam_event_05 from "../assets/Images/Events/bharathanattiyam/teaching05.webp"
import bharathanatiyam_event_06 from "../assets/Images/Events/bharathanattiyam/teaching06.webp"
import bharathanatiyam_event_07 from "../assets/Images/Events/bharathanattiyam/teaching07.webp"
import bharathanatiyam_event_08 from "../assets/Images/Events/bharathanattiyam/teaching08.webp"
import bharathanatiyam_event_09 from "../assets/Images/Events/bharathanattiyam/teaching09.webp"
import bharathanatiyam_event_10 from "../assets/Images/Events/bharathanattiyam/teaching10.webp"

//event_02 images ...............................................
import bharathanatiyam_event_11 from "../assets/Images/Events/bharathanattiyam/teaching11.webp"
import bharathanatiyam_event_12 from "../assets/Images/Events/bharathanattiyam/teaching12.webp"
import bharathanatiyam_event_13 from "../assets/Images/Events/bharathanattiyam/teaching13.webp"
import bharathanatiyam_event_14 from "../assets/Images/Events/bharathanattiyam/teaching14.webp"
import bharathanatiyam_event_15 from "../assets/Images/Events/bharathanattiyam/teaching15.webp"
import bharathanatiyam_event_16 from "../assets/Images/Events/bharathanattiyam/teaching16.webp"
import bharathanatiyam_event_17 from "../assets/Images/Events/bharathanattiyam/teaching17.webp"
import bharathanatiyam_event_18 from "../assets/Images/Events/bharathanattiyam/teaching18.webp"

//event_03 images ...............................................
import bharathanatiyam_event_19 from "../assets/Images/Events/bharathanattiyam/teaching19.webp"
import bharathanatiyam_event_20 from "../assets/Images/Events/bharathanattiyam/teaching20.webp"
import bharathanatiyam_event_21 from "../assets/Images/Events/bharathanattiyam/teaching21.webp"
import bharathanatiyam_event_22 from "../assets/Images/Events/bharathanattiyam/teaching01.webp"
import bharathanatiyam_event_23 from "../assets/Images/Events/bharathanattiyam/teaching02.webp"

//Kalari............................................................................
//event_01 images ...............................................
import kalari_event_01 from "../assets/Images/Events/kalari/01.webp"
import kalari_event_02 from "../assets/Images/Events/kalari/02.webp"
import kalari_event_03 from "../assets/Images/Events/kalari/03.webp"
import kalari_event_04 from "../assets/Images/Events/kalari/04.webp"

//event_02 images ...............................................
import kalari_event_05 from "../assets/Images/Events/kalari/05.webp"
import kalari_event_06 from "../assets/Images/Events/kalari/06.webp"
import kalari_event_07 from "../assets/Images/Events/kalari/07.webp"
import kalari_event_08 from "../assets/Images/Events/kalari/08.webp"
import kalari_event_09 from "../assets/Images/Events/kalari/09.webp"
import kalari_event_10 from "../assets/Images/Events/kalari/10.webp"

function EventsStore() {
      const {eventBanner,setEventBanner,eventList,setEventList}=useContext(ContextProvide)
      const bannerImages=[bannerImg1,bannerImg2,bannerImg3,bannerImg4,bannerImg5]
      const list=[
            
            {     
                  id:1,
                  categeroy:"bharatanatyam",
                  events:[
                        
                              {
                                    id:1,
                                    event_name:"Bharatahanatiyam_Event_01",
                                    about:"",
                                    date:"dd/mm/yyyy",
                                    images:[bharathanatiyam_event_01,bharathanatiyam_event_02,bharathanatiyam_event_03,bharathanatiyam_event_04,bharathanatiyam_event_05,bharathanatiyam_event_06,bharathanatiyam_event_07,bharathanatiyam_event_08,bharathanatiyam_event_09,bharathanatiyam_event_10,]
                              },

                              {
                                    id:2,
                                    event_name:"Bharatahanatiyam_Event_02",
                                    date:"dd/mm/yyyy",
                                    images:[bharathanatiyam_event_11,bharathanatiyam_event_12,bharathanatiyam_event_13,bharathanatiyam_event_14,bharathanatiyam_event_15,bharathanatiyam_event_16,bharathanatiyam_event_17,bharathanatiyam_event_18]
                              },
                              {
                                    id:3,
                                    event_name:"Bharatahanatiyam_Event_03",
                                    date:"dd/mm/yyyy",
                                    images:[bharathanatiyam_event_12,bharathanatiyam_event_11,bharathanatiyam_event_13,bharathanatiyam_event_14,bharathanatiyam_event_15,bharathanatiyam_event_16,bharathanatiyam_event_17,bharathanatiyam_event_18]
                              }
                        ]
                  },
                  {
                        id:2,
                        categeroy:"kalari",
                        events:[
                                    
                                          {
                                                id:1,
                                                event_name:"Kalari_Event_01",
                                                date:"dd/mm/yyyy",
                                                images:[kalari_event_01,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_05,kalari_event_06,kalari_event_07,kalari_event_08,kalari_event_09,kalari_event_10,]
                                          },
                                          {
                                                id:2,
                                                event_name:"Kalari_Event_02",
                                                date:"dd/mm/yyyy",
                                                images:[kalari_event_02,kalari_event_01,kalari_event_03,kalari_event_04,kalari_event_05,]
                                          },                                          {
                                                id:3,
                                                event_name:"Kalari_Event_03",
                                                date:"dd/mm/yyyy",
                                                images:[kalari_event_03,kalari_event_02,kalari_event_01,kalari_event_04,kalari_event_05,]
                                          },
            
            
                                          
                                    ]
                              },
                              {
                                    id:3,
                                    categeroy:"Mridangam",
                                    events:[
                                                
                                                      {
                                                            id:1,
                                                            event_name:"Mridangam_Event_01",
                                                            date:"dd/mm/yyyy",
                                                            images:[kalari_event_04,kalari_event_02,kalari_event_03,kalari_event_01,kalari_event_05,kalari_event_06,kalari_event_07,kalari_event_08,kalari_event_09,kalari_event_10,]
                                                      },
                                                      {
                                                            id:2,
                                                            event_name:"Mridangam_Event_02",
                                                            date:"dd/mm/yyyy",
                                                            images:[kalari_event_05,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_01,]
                                                      },
                                                      {
                                                            id:3,
                                                            event_name:"Mridangam_Event_03",
                                                            date:"dd/mm/yyyy",
                                                            images:[kalari_event_03,kalari_event_02,kalari_event_05,kalari_event_04,kalari_event_01,]
                                                      },

                                                      
                                                ]
                                          },
                                          {
                                                id:4,
                                                categeroy:"Carnatic Music",
                                                events:[
                                                            
                                                                  {
                                                                        id:1,
                                                                        event_name:"Carnatic Music_Event_01",
                                                                        date:"dd/mm/yyyy",
                                                                        images:[kalari_event_07,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_05,kalari_event_06,kalari_event_01,kalari_event_08,kalari_event_09,kalari_event_10,]
                                                                  },
                                                                  {
                                                                        id:2,
                                                                        event_name:"Carnatic Music_Event_02",
                                                                        date:"dd/mm/yyyy",
                                                                        images:[kalari_event_10,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_05,]
                                                                  },
                                                                  {
                                                                        id:3,
                                                                        event_name:"Carnatic Music_Event_03",
                                                                        date:"dd/mm/yyyy",
                                                                        images:[kalari_event_08,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_05,kalari_event_06,kalari_event_01,kalari_event_07,kalari_event_09,kalari_event_10,]
                                                                  },
                                    
                                                                  
                                                            ]
                                                      },
                                                      {
                                                            id:5,
                                                            categeroy:"Veena",
                                                            events:[
                                                                        
                                                                              {
                                                                                    id:1,
                                                                                    event_name:"Veena_Event_01",
                                                                                    date:"dd/mm/yyyy",
                                                                                    images:[kalari_event_09,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_05,kalari_event_06,kalari_event_07,kalari_event_08,kalari_event_01,kalari_event_10,]
                                                                              },
                                                                              {
                                                                                    id:2,
                                                                                    event_name:"Veena_Event_02",
                                                                                    date:"dd/mm/yyyy",
                                                                                    images:[kalari_event_06,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_05,]
                                                                              },
                                                                              {
                                                                                    id:3,
                                                                                    event_name:"Veena_Event_03",
                                                                                    date:"dd/mm/yyyy",
                                                                                    images:[kalari_event_07,kalari_event_02,kalari_event_03,kalari_event_04,kalari_event_05,kalari_event_06,kalari_event_01,kalari_event_08,kalari_event_09,kalari_event_10,]
                                                                              },
                                                
                                                                              
                                                                        ]
                                                                  }
                        
            
      ]
      const eventData=[]
      useEffect(()=>{
            const bannerData=()=>{
            setEventBanner(bannerImages)
            }
            bannerData()

            const eventData=()=>{
                  setEventList(list)
            }
            eventData()
      },[])
  return null;
}

export default EventsStore