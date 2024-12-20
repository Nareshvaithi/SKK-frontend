import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import { Specialitydata } from "../../../DataStore/HomeStore";
import specialityimg_0 from "../../../assets/Images/home/speciality_0.jpg"

const SpecialityOfSkk = ()=>{
    const {speciality} = useContext(ContextProvide);
   
    return(
        <>
        <div className="pb-10 bg-gray-100">
            <div className="container">
                <div className="text-center py-10">
                    <h1 className="headingText">Speciality of Sarawathy Kala Kendra</h1>
                </div>
                <div className="flex items-center flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-1/2 rounded-xl">
                        <img src={specialityimg_0} className="w-full h-full rounded-xl" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <ol className="list-disc pl-5">
                            {
                                speciality.map(({id,points})=>(
                                    <li key={id} className="font-mainFont2 text-lg leading-10">{points}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
            <Specialitydata/>
        </>
    )
}

export default SpecialityOfSkk;

