import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Courses from "./pages/courses";
import Blogs from "./pages/blogs";
import Faq from "./pages/faq";
import { Context } from "./Context_API/contextProvider";
import Nopage from "./pages/nopage";
import AdminContext from "./adminPanel/Context_API/ContextProvider";
import CoursesDetails from "./pages/ProgramsDetails";
import BlogsDetails from "./pages/BlogsDetails";
import GuruDetails from "./pages/GuruDetails";
import Meta from "./components/meta/meta";
import Admin from "./adminPanel/Adminpages/Admin";
import AdminWorkSpace from "./adminPanel/Components/AdminWorkSpace";
import AdminDemo from "./adminPanel/Adminpages/AdminDemo";


function App() {
  return (
    <Context>
      <AdminContext>
        <BrowserRouter>
          <Meta/>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/aboutskk" element={<About />} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:title" element={<CoursesDetails />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:title" element={<BlogsDetails/>}/>
              <Route path="/faq" element={<Faq />} />
              <Route path="/guru/:name" element={<GuruDetails/>}/>
              <Route path="*" element={<Nopage />} />
              
            </Route>
             {/* Admin Route */}
              <Route path="/admin" element={<Admin/>}>
              
              <Route index element={<AdminWorkSpace/>}/>
              
              </Route>
              <Route path="/admin1" element={<AdminDemo/>}></Route>
          </Routes>
        </BrowserRouter>
      </AdminContext>
    </Context>
  );
}

export default App;
