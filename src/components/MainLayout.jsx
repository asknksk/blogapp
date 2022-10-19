import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MobileHamburger from "./MobileHamburger";
import DefaultSpinner from "./DefaultSpinner";

const MainLayout = ({ children, pageType, ...props }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const menuRef = useRef();
  const hamburgerRef = useRef();

  // useEffect(() => {
  //   const handle = (e) => {
  //     if (
  //       hamburgerRef.current.contains(e.target) ||
  //       menuRef.current.contains(e.target)
  //     ) {
  //       setToggleDropdown(true);
  //     } else {
  //       setToggleDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handle);
  //   return () => {
  //     document.removeEventListener("mousedown", handle);
  //   };
  // }, []);


  if (loading) {
    return <DefaultSpinner />;
  }

  return (
    <div
      className=" m-0 px-2.5 py-3.5 bg-indigo-100"
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <nav className="bg-indigo-400 flex items-center justify-between py-4 px-6 rounded-md shadow-md">
        <Link to="/" className="">MyBlog</Link>
        
        <div className="flex items-center gap-x-6 tablet:hidden">
          <div
            className="space-y-1 cursor-pointer"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          >
            <div
              className="w-6 h-hamburger"
              style={{ backgroundColor: "#C4C4C4" }}
            ></div>
            <div
              className="w-6 h-hamburger"
              style={{ backgroundColor: "#C4C4C4" }}
            ></div>
            <div
              className="w-6 h-hamburger rounded"
              style={{ backgroundColor: "#C4C4C4" }}
            ></div>
          </div>
          <img src="" alt="" />

          {/* Mobile Hamburger Menu */}
          <MobileHamburger
            innerRef={hamburgerRef}
            setToggleDropdown={setToggleDropdown}
            toggleDropdown={toggleDropdown}
          />
        </div>
        <ul className="hidden tablet:flex gap-x-12">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
     
    </div>
  );
};

export default MainLayout;
