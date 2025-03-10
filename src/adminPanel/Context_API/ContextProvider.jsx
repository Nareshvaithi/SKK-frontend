import { createContext, useState } from "react";

// Create context
export const AdminContext = createContext(null);

// Create context provider component
const AdminProvider = ({ children }) => {
  const [adminNavData, setAdminNavData] = useState([]);
  const [openCMS, setOpenCMS] = useState(false);
  const [demoStore, setDemoStore] = useState([]);
  const [items, setItems] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [endPoint, setEndPoint] = useState("banner");
  const [active, setActive] = useState("Home");
  const [imageDisplay, setImageDisplay] = useState([]);
  const [display, setDisplay] = useState("Video");

  return (
    <AdminContext.Provider
      value={{
        adminNavData,
        setAdminNavData,
        openCMS,
        setOpenCMS,
        demoStore,
        setDemoStore,
        items,
        setItems,
        shorts,
        setShorts,
        teachers,
        setTeachers,
        testimonials,
        setTestimonials,
        endPoint,
        setEndPoint,
        active,
        setActive,
        imageDisplay,
        setImageDisplay,
        display,
        setDisplay,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
