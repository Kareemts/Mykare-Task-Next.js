"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";


const Signup = () => {
  const router = useRouter();
  const [signup, setSignup] = useState({
    name: "",
    userName: "",
    password: "",
  });

  // for storing the user credentials into signup state
  const credentials = (value) => {
    setSignup((pre) => ({ ...pre, ...value }));
  };

  // for storing the user credentials into local storage
  const handleSubmit = () => {
    if (
      signup.name === "" ||
      signup.userName === "" ||
      signup.password === ""
    ) {
      toast("Enter signup credentials");
    } else {
      const prevCredentials =
        JSON.parse(localStorage.getItem("myKare_Data")) || [];

      const userName = prevCredentials.find(
        (user) => user.userName === signup.userName
      );
      if (userName) {
        toast("User name exist");
      } else {
        const updatedCredentials = [...prevCredentials, signup];
        localStorage.setItem("myKare_Data", JSON.stringify(updatedCredentials));
        localStorage.setItem("myKare_logged_User", JSON.stringify(signup));
        router.push("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="sm:bg-[#183D3D] p-8 rounded-xl shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6 text-[#93B1A6]  text-center">
          Sign Up
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm  text-[#93B1A6]  font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#93B1A6]"
              placeholder="Enter your name"
              value={signup.name}
              onChange={(e) => credentials({ name: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="User Name"
              className="block mb-1 text-sm text-[#93B1A6]   font-semibold"
            >
              User Name
            </label>
            <input
              type="text"
              id="user-name"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#93B1A6]"
              placeholder="Enter your user name"
              value={signup.userName}
              onChange={(e) => credentials({ userName: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-[#93B1A6]  font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#93B1A6]"
              placeholder="Enter your password"
              value={signup.password}
              onChange={(e) => credentials({ password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5C8374] text-white py-2 rounded-md hover:hover:bg-[#93B1A6]  transition duration-300"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <span className="text-sm font-normal flex justify-center p-3 mt-5 gap-1">
          <p className="text-[#93B1A6]">Have an account? </p>
          <Link href={"/"} className="text-blue-400 cursor-pointer">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
