import React from "react";
import { MdFavorite, MdVisibility } from 'react-icons/md';
import { BsChatLeft } from 'react-icons/bs';

const AllBlogs = ({ blog }) => {
  return (
    <div className="flex flex-col border border-green-400 max-h-80 max-w-xs">
      <div className="max-h-44 max-w-xs ">
        <img
          src={blog?.image}
          alt="blog"
          className=" object-contain h-full w-full"
        />
      </div>
      <div className="flex flex-col">
        <h4>{blog?.title}</h4>
        <p>{blog?.publish_date}</p>
        <p>
        {blog?.content.length <= 75
          ? blog?.content.slice(0, 75)
          : blog?.content.slice(0, 75) + "..."}</p>
      </div>
      <div className="flex ">
        <img src={blog?.author?.image} alt="profile-img" />
        <p>{blog?.author}</p>
      </div>
      <div className="flex gap-x-3">
        <div className="flex items-center gap-x-1">
          <span >
            <MdFavorite className="text-red-800"/>
            </span>
          <p >{blog?.likes}</p>
        </div>
        <div className="flex items-center gap-x-1">
         <span><MdVisibility/></span>
          <p>{blog?.post_views}</p>
        </div>
        <div className="flex items-center gap-x-1">
          <span >
            <BsChatLeft />
            </span>
          <p>{blog?.comment_count}</p>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
