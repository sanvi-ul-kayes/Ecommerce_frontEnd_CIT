import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { PiMessengerLogoLight } from "react-icons/pi";
import { MdOutlineNotifications } from "react-icons/md";
import { PiGearBold } from "react-icons/pi";

const SideBar = () => {
  return (
    <div className="py-[35px] px-[32px]  h-screen">
      <div className="w-[186px] h-full bg-teal rounded-[20px] ">
        <div className=" flex justify-center items-center ">
          <img
            className="w-[100px] h-[100px] rounded-full mt-[38px] "
            src="signUP.png"
            alt="signUP"
          />
        </div>
        <div>
          <h2 className="font-bold text-white items-center justify-center flex  mb-[58px]">
            Kayes Molla
          </h2>
          <div className="relative w-[186px] h-[88px] mb-[57px]">
            <div className="w-[161px] h-full bg-white ml-auto  rounded-s-[20px] after:absolute after:h-full after:w-2 after:bg-teal after:top-0 after:right-0 after:rounded-s-[20px]">
              <HiOutlineHome className="text-[43px] text-teal absolute top-1/2 translate-y-[-50%] translate-x-[80%]" />
            </div>
          </div>
          <div className="relative w-[186px] h-[88px] mb-[57px]">
            <div className="w-[161px] h-full bg-white ml-auto  rounded-s-[20px] after:absolute after:h-full after:w-2 after:bg-teal after:top-0 after:right-0 after:rounded-s-[20px]">
              <PiMessengerLogoLight className="text-[43px] text-teal absolute top-1/2 translate-y-[-50%] translate-x-[80%]" />
            </div>
          </div>
          <div className="relative w-[186px] h-[88px] mb-[57px]">
            <div className="w-[161px] h-full bg-white ml-auto  rounded-s-[20px] after:absolute after:h-full after:w-2 after:bg-teal after:top-0 after:right-0 after:rounded-s-[20px]">
              <MdOutlineNotifications className="text-[43px] text-teal  absolute top-1/2 translate-y-[-50%] translate-x-[80%]" />
            </div>
          </div>
          <div className="relative w-[186px] h-[88px] mb-[187px]">
            <div className="w-[161px] h-full bg-white ml-auto  rounded-s-[20px] after:absolute after:h-full after:w-2 after:bg-teal after:top-0 after:right-0 after:rounded-s-[20px]">
              <PiGearBold className="text-[43px] text-teal  absolute top-1/2 translate-y-[-50%] translate-x-[80%]" />
            </div>
          </div>
        </div>
        <div>
          <RiLogoutBoxRLine className="text-[46px] text-white w-full mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
