import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";


const Admin = ()=>{
    return(
        <div className="">
            <div className="flex">
                <SideBar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Admin;