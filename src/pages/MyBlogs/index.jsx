import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/MainLayout";
import { mainBlogs } from "../../functions/mainBlogs";
import MyBlogCard from "./MyBlogCard";

const MyBlogs = () => {
  const dispatch = useDispatch();
  const { loading, error, blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(mainBlogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <div className="grid tablet:grid-cols-2 phone:grid-cols-1 desktop:grid-cols-3  gap-4 mt-4 ">
        {blogs?.map((blog, idx) => {
          return <MyBlogCard key={idx} blog={blog} />;
        })}
      </div>
    </MainLayout>
  );
};

export default MyBlogs;
