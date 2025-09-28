import { Navbar } from "@/components/@home/navbar";
import Sidebar from "@/components/@home/sidebar";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
      </div>
    </div>
  );
};
