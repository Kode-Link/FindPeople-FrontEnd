import { Navbar } from "@/components/@home/navbar";
import Sidebar from "@/components/@home/sidebar";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="absolute top-[80px] ml-[260px]">
        <Outlet />
      </div>
    </>
  );
};
