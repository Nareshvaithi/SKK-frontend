import { useContext } from "react";
import { AdminContext } from "../Context_API/ContextProvider";

const AdminNav = ()=>{
    const {openCMS,setOpenCMS} = useContext(AdminContext);
    return(
        <div className="fixed w-full h-20 flex items-center border border-gray-200">
            <div onClick={()=>{setOpenCMS(!openCMS)}} className="cursor-pointer">
                <i className="material-icons-outlined">menu</i>
            </div>
        </div>
    )
}

export default AdminNav;