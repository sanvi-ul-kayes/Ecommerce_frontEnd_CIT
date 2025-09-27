import { Outlet } from "react-router";
import SideBar from "../Components/SideBar";
import { useState } from "react";

const RootLayOut = () => {
  return (
    <div className="flex gap-[11px]">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default RootLayOut;
