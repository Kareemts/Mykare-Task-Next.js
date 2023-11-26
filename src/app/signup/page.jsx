import React from "react";
import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from 'next/router';

const Page = () => {
  // const router = useRouter();
  // const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-[#183D3D] p-8 rounded-xl shadow-md w-full sm:w-96">
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5C8374] text-white py-2 rounded-md hover:hover:bg-[#93B1A6]  transition duration-300"
          >
            Sign Up
          </button>
        </div>
        <span className="text-sm font-normal flex justify-center p-3 mt-5 gap-1">
          <p className="text-[#93B1A6]">Have an account? </p>
          <Link href={"/login"} className="text-blue-400 cursor-pointer">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Page;
