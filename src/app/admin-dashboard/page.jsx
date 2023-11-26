"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("myKare_Data")));
  }, []);

  // for logout fuctionality
  const handleLogout = () => {
    localStorage.removeItem("myKare_logged_User");
    router.push("/");
  };

  return (
    <div className="min-h-screen ">
      <nav className="bg-[#183D3D]  shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg text-[#93B1A6] font-semibold cursor-pointer">
            Mykare Admin
          </div>
          <button
            className="text-blue-400 hover:text-blue-500 font-medium"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="overflow-x-auto pt-10 sm:p-10 ">
        <table className="min-w-full bg-[#183D3D] text-[#93B1A6]    table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300   px-4 py-2">No</th>
              <th className="border border-gray-300  px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.userName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
