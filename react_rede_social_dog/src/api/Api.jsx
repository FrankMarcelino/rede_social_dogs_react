import React from "react";
import UserPost from "./endpopints/UserPost";
import TokenPost from "./endpopints/TokenPost";
import PhotoPost from "./endpopints/PhotoPost";
import PhotoGet from "./endpopints/PhotoGet";
const Api = () => {
  return (
    <div>
      <h2>User Posts</h2>
      <UserPost />
      <h2>Token Posts</h2>
      <TokenPost />
      <h2>Photo Posts</h2>
      <PhotoPost />
      <h2>Photo Get</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
