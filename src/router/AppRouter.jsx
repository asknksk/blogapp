import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "../pages/BlogDetails/index.jsx";
import NewBlog from "../pages/BlogCreatePage/index.jsx";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import MyBlogs from "../pages/MyBlogs/index.jsx";
// import Details from "../pages/Details";
// import Profile from "../pages/Profile";
// import NewBlog from "../pages/NewBlog";
// import PrivateRouter from "./PrivateRouter";
// import UpdateBlog from "../pages/UpdateBlog";
// import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage pageType={"login"} />} />
        <Route path="/register" element={<LoginPage pageType={"register"} />} />
        <Route path="/create_blog" element={<NewBlog />} />
        <Route path="/detail/:id" element={<BlogDetails />} />
        <Route path="/my-blogs/" element={<MyBlogs />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
