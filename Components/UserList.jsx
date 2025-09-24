import React, { useEffect } from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import List from "./List";
import { getDatabase, ref, onValue } from "firebase/database";

const UserList = () => {
  const db = getDatabase();

  useEffect(() => {
    const userListRef = ref(db, "users/");
    onValue(userListRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <div className="w-[427px] h-[347px] mt-[43px] py-[13px] px-[20px]  shadow-xl rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="text-[20px] font-semibold">User List</div>
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

export default UserList;
