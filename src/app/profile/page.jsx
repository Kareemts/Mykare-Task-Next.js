"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("myKare_logged_User")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("myKare_logged_User");
    router.push("/");
  };

  return (
    <div className="min-h-screen ">
      <nav className="bg-[#183D3D]  shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg text-[#93B1A6] font-semibold cursor-pointer">
            Mykare
          </div>
          <button
            className="text-blue-400 hover:text-blue-500 font-medium"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4 flex justify-center items-center">
        <div className="bg-[#183D3D]  p-8 rounded-xl shadow-md w-full sm:w-96 text-center">
          <h2 className="text-2xl  text-[#93B1A6] font-semibold mb-4">
            Welcome, {user?.name}
          </h2>
          <p className="text-[#93B1A6]">Thank you for joining with us</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
