import React from "react";

const AllBlogs = () => {
  return (
    <div className="flex flex-col border border-green-400 max-h-80">
      <img src="" alt="blog-image" />
      <div className="flex flex-col">
        <h4>Blog Title</h4>
        <p>Datetime</p>
        <p>content with ...</p>
      </div>
      <div className="flex ">
        <img src="" alt="profile-img" />
        <p>Username</p>
      </div>
      <div className="flex gap-x-1">
        <div className="flex">
          <p>icon</p>
          <p>count</p>
        </div>
        <div className="flex">
          <p>icon</p>
          <p>count</p>
        </div>
        <div className="flex">
          <p>icon</p>
          <p>count</p>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
