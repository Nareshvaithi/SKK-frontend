import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import ResponsiveNav from "../components/header/ResponsiveNav";
import Footer from "../components/footer/Footer";


const Layout = ()=>{
 
    return(
        <div>
            <Navbar/>
            <ResponsiveNav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;