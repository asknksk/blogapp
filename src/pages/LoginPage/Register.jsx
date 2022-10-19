import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { validatePasswordsandRegister } from "../../utils/passwordValditator";
import Input from "./Input";
import Submit from "./Submit";

const Register = () => {
  const Username = useRef();
  const UserEmail = useRef();
  const UserPassword = useRef();
  const UserPassword2 = useRef();
  const FirstName = useRef();
  const LastName = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(UserEmail.current.value, UserPassword.current.value);
    validatePasswordsandRegister(UserPassword, UserPassword2)
  };
  return (
    <div className=" flex flex-col justify-center overflow-hidden w-96 mt-10 ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline mb-4">
          Register
        </h1>
        <form
          className="grid grid-cols-2 w-full gap-4 pb-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="col-span-2 ">
            <Input innerRef={Username} type="text" placeholder="Username" />
          </div>
          <div className="col-span-2 ">
            <Input
              innerRef={UserPassword}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col-span-2 ">
            <Input
              innerRef={UserPassword2}
              type="password"
              placeholder="Password again"
            />
          </div>
          <div className="col-span-2 ">
            <Input innerRef={UserEmail} type="email" placeholder="Email" />
          </div>
          <div className="col-span-2 ">
            <Input innerRef={FirstName} type="text" placeholder="First name" />
          </div>
          <div className="col-span-2 ">
            <Input innerRef={LastName} type="text" placeholder="Last name" />
          </div>
          <Link
            to="/"
            className="text-xs text-purple-600 hover:underline col-span-2"
          >
            Forget Password?
          </Link>
          <div className="text-center col-span-2">
            <Submit value="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
