import React from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import List from "./List";

const GroupList = () => {
  return (
    <div className="w-[427px] h-[347px] mt-[43px] py-[13px] px-[20px]  shadow-xl rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="text-[20px] font-semibold">Groups List</div>
        <PiDotsThreeOutlineVertical className="text-teal" />
      </div>
      <div className="w-[400px] h-[300px] overflow-y-scroll ">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default GroupList;
