import React from "react";
import { useContext, useEffect, useState } from "react";
import { PiUploadLight } from "react-icons/pi";
import { AdminContext } from "../Context_API/ContextProvider";

function GuruApi() {
  const {
    adminNavData,
    CMS,
    endPoint,
    setEndPoint,
    active,
    setActive,
    imageDisplay,
    setImageDisplay,
    display,
    setDisplay,
    items,
    setItems,
  } = useContext(AdminContext);

  return <>
  <div className="flex gap-10 flex-wrap">
  {items.map((value)=>{
      console.log(value.about)
      const about = value.about ? value.about.slice(0, 60) : "No description available";
      return <>
      <div className="border shadow-md p-4">
            <div  className="w-80">
            <img src={value.url} alt={value.name} className="w-full h-full object-cover" />
            </div>
            <div className="w-80">
            <p><b>Name</b> : {value.name}</p>
            <p><b>Profession</b> : {value.prof}</p>
            <p><b>Facebook</b> : {value.facebook}</p>
            <p><b>Instagram</b> : {value.instagram}</p>
            <p><b>About</b> : {about}</p>
            </div>
      </div>
      </>
  })}
    <div className="border border-dashed border-gray-600 w-80  h-40 flex justify-center items-center p-4">
    <div className="">
      <p className="text-4xl flex justify-center items-center text-gray-600"><PiUploadLight /></p>
      <p className="text-2xl flex justify-center items-center text-gray-600">Add+</p>
    </div>
    </div>
  
  </div> 
  </>;
}

export default GuruApi;
