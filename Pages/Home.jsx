import React, { useEffect, useState } from "react";
import GroupList from "../Components/GroupList";
import FriendRequest from "../Components/FriendRequest";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logedInUserInfo } from "../Slices/UserSlice";
import UserList from "./../Components/UserList";

const Home = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [varify, setVarify] = useState(false);
  const navigate = useNavigate();
  const data = useSelector((state) => state.userInfo.value);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(logedInUserInfo(user));
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      navigate("/login");
      setVarify(false);
    }
  });

  useEffect(() => {
    if (!data) {
      navigate("/login");
    } else if (!data.emailVerified) {
      setVarify(false);
    } else {
      setVarify(true);
    }
  }, []);

  return (
    <>
      {varify ? (
        <section className="flex gap-5 items-center">
          <div>
            <GroupList />
            <FriendRequest />
          </div>
          <div>
            <UserList />
            <FriendRequest />
          </div>
        </section>
      ) : (
        <div className="w-full h-screen bg-black/75 absolute top-0 left-0 text-white flex justify-center items-center">
          <h1>Please Varify your Email</h1>
        </div>
      )}
    </>
  );
};

export default Home;
