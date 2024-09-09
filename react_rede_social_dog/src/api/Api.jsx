import React from "react";
import UserPost from "./endpopints/UserPost";
import TokenPost from "./endpopints/TokenPost";
const Api = () => {
  return (
    <div>
      <h2>User Posts</h2>
      <UserPost />
      <h2>Token Posts</h2>
      <TokenPost />
    </div>
  );
};

export default Api;
