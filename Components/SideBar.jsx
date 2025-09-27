import { HiOutlineHome } from "react-icons/hi2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { PiMessengerLogoLight } from "react-icons/pi";
import { MdOutlineNotifications } from "react-icons/md";
import { PiGearBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { LuCloudUpload } from "react-icons/lu";

const SideBar = () => {
  const data = useSelector((state) => state.userInfo.value);
  console.log(data);
  return (
    <div className="py-[35px] px-[32px] h-screen relative">
      <div className="bg-teal w-[186px] h-screen rounded-2xl pt-[36px]">
        <div>
          <div className="w-[100px] h-[100px]  mx-auto relative group  cursor-pointer ">
            <img
              className="w-full h-full rounded-full"
              src="login.jpg"
              alt="login.jpg"
            />
            <div className="w-full h-full rounded-full  mx-auto absolute top-0 left-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100">
              <LuCloudUpload className="text-4xl  text-white " />
            </div>
          </div>
          <h2 className="font-bold text-white items-center justify-center flex  mb-[58px]">
            {data.displayName}
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
            <div className="mt-[187px]">
              <RiLogoutBoxRLine className="text-[46px] text-white w-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
