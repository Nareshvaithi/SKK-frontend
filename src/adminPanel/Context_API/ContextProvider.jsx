import { createContext, useState, useMemo, useEffect } from "react";

export const AdminContext = createContext(null);

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