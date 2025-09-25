import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import List from "./List";
import { getDatabase, ref, onValue } from "firebase/database";
import moment from "moment";

const UserList = () => {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userListRef = ref(db, "users/");
    onValue(userListRef, (snapshot) => {
      const array = [];
      snapshot.forEach((items) => {
        array.push(items.val());
      });
      console.log(array);
      setUserList(array);
    });
  }, []);

  return (
    <div className="w-[427px] h-[347px] mt-[43px] py-[13px] px-[20px]  shadow-xl rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="text-[20px] font-semibold">User List</div>
        <PiDotsThreeOutlineVertical className="text-teal" />
      </div>
      <div className="w-[400px] h-[300px] overflow-y-scroll ">
        {userList.map((item) => (
          <List
            name={item.username}
            date={moment(item.date, "MM-DD-YYYY & HH:mm:ss").fromNow()}
            image={item.profile_picture}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
