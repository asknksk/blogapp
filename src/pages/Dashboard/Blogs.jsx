import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import axios from "axios";
import DefaultSpinner from "../../components/DefaultSpinner";

const baseUrl = process.env.REACT_APP_BASE_URL;

const Blogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogData, setblogData] = useState([]);

  const blogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}blog/blog/`);
      setblogData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    blogs();
  }, []);

  if (loading) {
    return <DefaultSpinner />;
  }
  return (
    <div className="flex gap-2 mt-4 flex-wrap items-center justify-center">
      {blogData?.map((blog,idx) => {
        return <BlogCard key={idx} blog={blog}/>;
      })}
    </div>
  );
};

export default Blogs;
