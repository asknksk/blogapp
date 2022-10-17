import React from "react";

const AllBlogs = ({blog}) => {
  console.log(blog)
  return (
    <div className="flex flex-col border border-green-400 max-h-80">
      <img src={blog.image} alt="blog"  className="max-h-72 max-w-xs "/>
      <div className="flex flex-col">
        <h4>{blog.title}</h4>
        <p>{blog.publish_date}</p>
        <p>{blog.content}</p>
      </div>
      <div className="flex ">
        <img src="" alt="profile-img" />
        <p>{blog.author}</p>
      </div>
      <div className="flex gap-x-1">
        <div className="flex">
          <p>icon</p>
          <p>{blog.likes}</p>
        </div>
        <div className="flex">
          <p>icon</p>
          <p>{blog.post_views}</p>
        </div>
        <div className="flex">
          <p>icon</p>
          <p>{blog.comment_count}</p>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
