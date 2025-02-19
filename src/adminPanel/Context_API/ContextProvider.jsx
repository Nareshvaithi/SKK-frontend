import { createContext, useState, useMemo, useEffect } from "react";

export const AdminContext = createContext(null);

<<<<<<< HEAD
const AdminProvider = ({ children }) => {
    const [adminNavData, setAdminNavData] = useState([]);
    const [openCMS, setOpenCMS] = useState(false);
    const [CMS, setCMS] = useState(1);
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => JSON.parse(localStorage.getItem("isAuthenticated")) || false
    );

    useEffect(() => {
        localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
    };

    const contextValue = useMemo(() => ({
        adminNavData, setAdminNavData,
        openCMS, setOpenCMS,
        CMS, setCMS,
        isAuthenticated, setIsAuthenticated,
        login, logout,
    }), [adminNavData, openCMS, CMS, isAuthenticated]);

    return (
        <AdminContext.Provider value={contextValue}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;
=======
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
>>>>>>> refs/remotes/origin/main
