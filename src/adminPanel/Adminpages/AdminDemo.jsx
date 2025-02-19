import React from "react";
import logo from "../../assets/Images/header/logo-SKK.png";
import { RiPagesFill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AdminContextProvide } from "../Context_API/ContextProvider";
import AdminHeaderStore from "../AdminDataStore/AdminHeaderStore";
import axios from "axios";
import { PiUploadLight } from "react-icons/pi";
import GuruApi from "../ApiPages/GuruApi";
import TestimonialApi from "../ApiPages/TestimonialApi";

function AdminDemo() {
  const { adminNavData, CMS,endPoint,setEndPoint ,active, setActive,imageDisplay,setImageDisplay,display,setDisplay,        items, setItems,
  } = useContext(AdminContextProvide);
  const API_URL = import.meta.env.VITE_API_URI;

  const [subPages, setSubPages] = useState([]);

  useEffect(() => {

    const filteredPages = adminNavData.filter(
      (value) => active === value.title
    );
    setSubPages(filteredPages);
    subPages.map((value)=>{
      const filterFile=value.sublinks.filter((items)=>items.innerData 
    )
      return filterFile.forEach((value)=>{
          if(value.label===display){
            
            return setImageDisplay(value.innerData)
          }
        })
      
      
    })

  }, [active, adminNavData]);

useEffect(()=>{
  const fetchItems = async () => {
    console.log(endPoint)
    try {
      
      const response = await axios.get(`${API_URL}/${endPoint}`);
      if (response.data == null) {
        throw Error("Items not found");
      }
       setItems(response.data);

      
    } catch (err) {
      console.log(err);
    }
  };
  fetchItems();
},[endPoint])
console.log("items",items)

  return (
    <>
      <AdminHeaderStore />

      <div className="p-4">
        <div className="flex w-full">
          <div className="w-2/12  bg-[#f9fbfa]">
            <div className=" w-full ">
              <div className="flex items-center w-36">
                <img src={logo} alt="" className="w-full " />
              </div>
            </div>
            {adminNavData.map((value) => {
              return (
                <>
                  <div className="w-3/4 p-2">
                    <div
                      className={`${
                        active == value.title ? "bg-[#3b82f6]" : ""
                      }  p-2 rounded-md  flex justify-start gap-x-4 items-center hover:bg-[#3b82f6] hover:text-white`}
                      onClick={() => setActive(value.title)}
                    >
                      <i
                        className={`${
                          active == value.title ? "text-white" : "text-gray-600"
                        } material-icons-outlined text-black rounded-md`}
                      >
                        {value.icon}
                      </i>
                      <p
                        className={`${
                          active == value.title ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {value.title}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="w-10/12  border-blue-800">
            <div className="p-4">
              <div className="text-lg flex items-center ">
                <p className="text-gray-600">Saraswathy Kala Kendra -{active}</p>
              </div>
              <div className="">
                {subPages.map((value) => {
                  return (
                    <>
                    <div className="flex gap-x-4 mt-6">
                      {value.sublinks.map((value) => {
                       
                        return (
                          <>
                            <div className={`${display == value.label ? "bg-[#3b82f6] text-white" : "text-gray-600"} p-[6px] px-3 rounded-md hover:bg-[#3b82f6] hover:text-white`} 
                            onClick={()=>{
                              setDisplay(value.label)
                              setEndPoint(value.endPoint)
                              }}>
                              <p className="">{value.label}</p>
                            </div>
                          </>
                        );
                      })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            {
  display === "Video" || display === "Shorts"  ? <>
  <div className="flex gap-4 flex-wrap" >
  {items.map((value)=>{
    return <>
    <div>
    <iframe src={`https://youtube.com/embed/${value.url}`} title={value.title} className="h-40"></iframe>
    </div>
    </>

  })}
  <div className="border border-dashed border-gray-600 w-40  h-40 flex justify-center items-center">
  <div className="">
    <p className="text-4xl flex justify-center items-center text-gray-600"><PiUploadLight /></p>
    <p className="text-2xl flex justify-center items-center text-gray-600">Add+</p>
  </div>
  </div>
  </div>
  </>: display === "Teachers" ? <GuruApi />: display=="Testimonials" ? <TestimonialApi /> :"" 
}

          </div>
        </div>

      </div>
      
    </>
  );
}

export default AdminDemo;
