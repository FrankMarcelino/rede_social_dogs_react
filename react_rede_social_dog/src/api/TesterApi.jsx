import React from "react";
import UserPost from "./tester_endpopints/UserPost";
import TokenPost from "./tester_endpopints/TokenPost";
import PhotoPost from "./tester_endpopints/PhotoPost";
import PhotoGet from "./tester_endpopints/PhotoGet";
const TesterApi = () => {
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

export default TesterApi;
