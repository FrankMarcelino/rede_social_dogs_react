import React from "react";
import UserPost from "./tester_endpoints/UserPost";
import TokenPost from "./tester_endpoints/TokenPost";
import PhotoPost from "./tester_endpoints/PhotoPost";
import PhotoGet from "./tester_endpoints/PhotoGet";
const TesterApi = () => {
  return (
    <div>
      <h2>User Post</h2>
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
