import { createContext, useState } from "react";

export const AdminContextProvide = createContext();

const AdminContext = ({children})=>{
    const [adminNavData,setAdminNavData] = useState([]);
    const [openCMS,setOpenCMS] = useState(false);
    const [CMS,setCMS] = useState(1)
    return(
        <AdminContextProvide.Provider value={{
            adminNavData,setAdminNavData,
            openCMS,setOpenCMS,
            CMS,setCMS
        }}>
            {children}
        </AdminContextProvide.Provider>
    )
}

export default AdminContext;