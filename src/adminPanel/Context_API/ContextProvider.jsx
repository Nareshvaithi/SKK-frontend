import { createContext, useState } from "react";

export const AdminContextProvide = createContext();

const AdminContext = ({ children }) => {
  const [adminNavData, setAdminNavData] = useState([]);
  const [openCMS, setOpenCMS] = useState(false);
  const [CMS, setCMS] = useState(1);
  const [demoStore, setDemoStore] = useState([]);
  const [items, setItems] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [endPoint, setEndPoint] = useState("banner");
  const [active, setActive] = useState("Home");
  const [imageDisplay,setImageDisplay] = useState([]);
const [display,setDisplay]=useState("Video")
  return (
    <AdminContextProvide.Provider
      value={{
        adminNavData,
        setAdminNavData,
        openCMS,
        setOpenCMS,
        CMS,
        setCMS,
        demoStore,
        setDemoStore,
        items, setItems,
        shorts,
        setShorts,
        teachers,
        setTeachers,
        testimonials,
        setTestimonials,
        endPoint,
        setEndPoint,
        active, setActive,
        imageDisplay,setImageDisplay,
        display,setDisplay
      }}
    >
      {children}
    </AdminContextProvide.Provider>
  );
};

export default AdminContext;
