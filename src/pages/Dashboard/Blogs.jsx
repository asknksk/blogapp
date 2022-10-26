import React, { useEffect, useState } from "react";
import DefaultSpinner from "../../components/DefaultSpinner";
import { useDispatch, useSelector } from "react-redux";
import { mainBlogs } from "../../functions/mainBlogs";
import BlogCard from "./components/BlogCard";

const Blogs = () => {
  const { loading, error, blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const [fetchState, setFetchState] = useState(false);

  useEffect(() => {
    dispatch(mainBlogs());
  }, [fetchState]);

  if (loading) {
    return <DefaultSpinner />;
  }
  return (
    <div className="grid tablet:grid-cols-2 phone:grid-cols-1 desktop:grid-cols-3  gap-4 mt-4 ">
      {blogs?.map((blog, idx) => {
        return <BlogCard key={idx} blog={blog} fetchState={fetchState} setFetchState={setFetchState}/>;
      })}
    </div>
  );
};

export default Blogs;
