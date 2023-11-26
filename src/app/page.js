export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <nav className="bg-[#183D3D]  shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg text-[#93B1A6] font-semibold cursor-pointer">Mykare</div>
          <button className="text-blue-400 hover:text-blue-500 font-medium">
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 flex justify-center items-center">
        <div className="bg-[#183D3D]  p-8 rounded-xl shadow-md w-full sm:w-96 text-center">
          <h2 className="text-2xl  text-[#93B1A6] font-semibold mb-4">
            Welcome, name
          </h2>
          {/* Other dashboard content can be added here */}
          <p className="text-[#93B1A6]">Thank you for joining with us</p>
        </div>
      </div>
    </div>
  );
}
