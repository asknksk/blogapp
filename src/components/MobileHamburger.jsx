import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navbarDropdownConstants } from "../constants/navbarDropdownConstants";
const MobileHamburger = ({ toggleDropdown, innerRef, setToggleDropdown }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const token = JSON.parse(localStorage.getItem("loginCredentials"))?.result
  //   .token;
  const handleLogout = (e) => {
    e.preventDefault();
    // TODO: logout api yazildiktan sonra asagidaki yorum satiri kaldirilacak
    //dispatch(logoutUser({ token, navigate }));
  
  };


  return (
    <>
      <ul
        ref={innerRef}
        className={
          !toggleDropdown
            ? "hidden"
            : "absolute tablet:hidden top-0 left-0 overflow-y-scroll w-full child:w-full z-50 bg-white  flex flex-col justify-center items-center"
        }
      >
        <div className="flex w-full justify-end">
          <img
            onMouseUp={() => setToggleDropdown(false)}
            className="w-[12px] mr-16 my-4 cursor-pointer"
            src="/assets/cross-icon.svg"
            alt=""
          />
        </div>

        {navbarDropdownConstants.map((item, idx) => (
          <li key={idx} className="py-4 text-2xl ">
            <div
              className=" border-b cursor-pointer border-b-gray-300 hover:bg-gray-50  py-2 "
              onMouseUp={() => {
                setToggleDropdown(false);

                if (item.title === "Logout") {
                  handleLogout();
                }
                navigate(item.link);
              }}
            >
              <div className="flex justify-center items-center mx-4">
                {item.title}
                {!!item.icon && (
                  <img src={item.icon} alt="" className="w-[2rem] mx-4" />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileHamburger;
