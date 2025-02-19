import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import { Context } from "./Context_API/contextProvider";
import AdminProvider from "./adminPanel/Context_API/ContextProvider"; 
import Meta from "./components/meta/meta";
import ProtectedRoute from "./adminPanel/Components/ProtectedRoutes";

const About = lazy(() => import("./pages/about"));
const Gallery = lazy(() => import("./pages/gallery"));
const Events = lazy(() => import("./pages/events"));
const Courses = lazy(() => import("./pages/courses"));
const Blogs = lazy(() => import("./pages/blogs"));
const Faq = lazy(() => import("./pages/faq"));
const Nopage = lazy(() => import("./pages/nopage"));
const CoursesDetails = lazy(() => import("./pages/ProgramsDetails"));
const BlogsDetails = lazy(() => import("./pages/BlogsDetails"));
const GuruDetails = lazy(() => import("./pages/GuruDetails"));
const Admin = lazy(() => import("./adminPanel/Adminpages/Admin"));
const AdminWorkSpace = lazy(() => import("./adminPanel/Components/AdminWorkSpace"));
const Login = lazy(() => import("./adminPanel/Adminpages/Login"));

function App() {
  return (
    <Context>
      <AdminProvider>  
        <BrowserRouter>
          <Meta />
          <Suspense fallback={<div className="pt-24">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/aboutskk" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:title" element={<CoursesDetails />} />
                <Route path="/events" element={<Events />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:title" element={<BlogsDetails />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/guru/:name" element={<GuruDetails />} />
                
                <Route path="*" element={<Nopage />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/admin/workspace" element={
                <ProtectedRoute>
                  <AdminWorkSpace />
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AdminProvider> 
    </Context>
  );
}

export default App;
