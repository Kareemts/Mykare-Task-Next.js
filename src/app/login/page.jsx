import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-xl shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center ">Login</h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm  font-semibold "
            >
              User Name
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
        <span className="text-sm font-normal flex justify-center p-3 mt-5 gap-1">
          <p>Don't have an account? </p>
          <p className="text-blue-400 cursor-pointer">Signup</p>
        </span>
      </div>
    </div>
  );
};

export default page;
