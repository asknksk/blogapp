import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
// import Details from "../pages/Details";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
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
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;