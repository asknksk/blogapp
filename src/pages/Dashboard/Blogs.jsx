import React, { useEffect, useState, useCallback } from "react";
import DefaultSpinner from "../../components/DefaultSpinner";
import { useDispatch, useSelector } from "react-redux";
import { mainBlogs } from "../../functions/mainBlogs";
import BlogCard from "./components/BlogCard";

const Blogs = () => {
  const { loading, error, blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const [fetchState, setFetchState] = useState(false);
  const [increment, setIncrement] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (increment >= blogs?.length) setHidden(true);
  }, [increment]);

  const onLoadMore = useCallback(() => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
      setIncrement(() => increment + 2);
    }, 3000);
  }, [increment, disabled]);

  useEffect(() => {
    dispatch(mainBlogs());
  }, [fetchState]);

  if (loading) {
    return <DefaultSpinner />;
  }
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid tablet:grid-cols-2 phone:grid-cols-1 desktop:grid-cols-3  gap-4 mt-4 ">
        {blogs?.slice(0, increment + 1).map((blog, idx) => {
          return (
            <BlogCard
              key={idx}
              blog={blog}
              fetchState={fetchState}
              setFetchState={setFetchState}
            />
          );
        })}
      </div>

      {disabled !== true && (
        <button
          className="rounded-full mx-auto py-2 px-6  bg-indigo-600 font-montserrat cursor-pointer font-semibold text-xs text-white mr-3 "
          onClick={() => onLoadMore()}
          disabled={hidden !== false ? true : false}
          style={{ display: hidden === false ? "block" : "none" }}
        >
          <span className="py-2"> Load more...</span>
        </button>
      )}
      {disabled !== false && (
        <div
          className="rounded-full py-2 px-6 mx-auto bg-indigo-600 font-montserrat  cursor-pointer font-semibold text-xs text-white mr-3"
          onClick={() => onLoadMore()}
          disabled={disabled}
          style={{ display: hidden === false ? "block" : "none" }}
        >
          {" "}
          <span>
            <span className="border-t-transparent border-solid animate-spin rounded-full border-white border-2 ">
              Loading
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Blogs;
