import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm,setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 bg-black bg-opacity-70 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-gray-600 rounded-xl"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 rounded-xl"
        />
        <button className="p-4 my-6 rounded-xl bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign up now" : "Already Registered!!Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
