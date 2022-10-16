import React from "react";
import BlogCard from "./components/BlogCard";
import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL
const Blogs = () => {

  var config = {
    method: 'get',
    url: 'http://127.0.0.1:8000/blog/blog/',
    headers: { 
      'Cookie': 'csrftoken=BnJ9MyP9GgXqec3Mdb3Qrf979jMi7Pov; sessionid=7609xuxjxoz1q1co1wdnflf0k725zzpi'
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <div className="flex gap-2 mt-4 flex-wrap items-center justify-center">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blogs;
