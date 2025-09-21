import React from "react";
import GroupList from "../Components/GroupList";
import FriendRequest from "../Components/FriendRequest";

const Home = () => {
  return (
    <section>
      <div>
        <GroupList />
        <FriendRequest />
      </div>
    </section>
  );
};

export default Home;
