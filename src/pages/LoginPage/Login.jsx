import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Submit from "./Submit";

const Login = () => {
  const UserName = useRef();
  const UserEmail = useRef();
  const UserPassword = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(UserEmail.current.value, UserPassword.current.value);
  };
  return (
    <div className=" flex flex-col justify-center overflow-hidden w-96 mt-10 ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline mb-4">
          Sign in
        </h1>
        <form
          className="grid grid-cols-2 w-full gap-4 pb-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="col-span-2 ">
            <Input innerRef={UserName} type="text" placeholder="Username" />
          </div>
          <div className="col-span-2 ">
            <Input innerRef={UserEmail} type="email" placeholder="Email" />
          </div>
          <div className="col-span-2 ">
            <Input
              innerRef={UserPassword}
              type="password"
              placeholder="Password"
            />
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

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
