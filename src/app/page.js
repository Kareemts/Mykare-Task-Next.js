"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


const Login = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });


  useEffect(()=>{
    const logged = JSON.parse(localStorage.getItem("myKare_logged_User"));
    if (!logged) {
      router.push("/");
    } else {
      logged.userName === "admin"
        ? router.push("/admin-dashboard")
        : router.push("/profile");
    }
  },[])

  const adminCredentials = {
    name: "admin",
    userName: "admin",
    password: "admin",
  };

  // for creating admin credentials
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("myKare_Data")) || [];

    const adminData = admin.find(
      (user) => user.userName === adminCredentials.userName
    );
    if (!adminData) {
      localStorage.setItem("myKare_Data", JSON.stringify([adminCredentials]));
    }
  }, []);

  // for storing the user credentials into login state
  const credentials = (value) => {
    setLogin((pre) => ({ ...pre, ...value }));
  };

  // for user login
  const handleSubmit = () => {
    if (login.userName === "" || login.password === "") {
      toast("Enter login credentials");
    } else {
      const prevCredentials =
        JSON.parse(localStorage.getItem("myKare_Data")) || [];
      const loggedUser = prevCredentials.find(
        (user) =>
          user.userName === login.userName && user.password === login.password
      );

      if (loggedUser) {
        localStorage.setItem("myKare_logged_User", JSON.stringify(loggedUser));
        loggedUser?.userName === "admin"
          ? router.push("/admin-dashboard")
          : router.push("/profile");
      } else {
        toast("User name or password is incorrect");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="sm:bg-[#183D3D] p-12 rounded-xl shadow-md w-full sm:w-96">
        <h2 className="text-2xl text-[#93B1A6] font-semibold mb-6 text-center ">
          Login
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="User Name"
              className="block mb-1 text-sm text-[#93B1A6]  font-semibold "
            >
              User Name
            </label>
            <input
              type="text"
              id="user-name"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#93B1A6]"
              placeholder="Enter your user name"
              value={login.userName}
              onChange={(e) => credentials({ userName: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-[#93B1A6] font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#93B1A6]"
              placeholder="Enter your password"
              value={login.password}
              onChange={(e) => credentials({ password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5C8374] text-white py-2 rounded-md hover:bg-[#93B1A6] transition duration-300"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <span className="text-sm font-normal flex justify-center p-3 mt-5 gap-1">
          <p className="text-[#93B1A6]">Don't have an account? </p>
          <Link href={"/signup"} className="text-blue-400 cursor-pointer">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
