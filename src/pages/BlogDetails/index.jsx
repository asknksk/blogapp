import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { MdFavorite, MdVisibility } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { AddComment, singleBlogDetail } from "../../functions/mainBlogs";
import { useDispatch, useSelector } from "react-redux";
import DefaultSpinner from "../../components/DefaultSpinner";

const BlogDetails = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const { loading, singleBlogData } = useSelector((state) => state.singleBlog);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loginCredentials"))) {
      setToken(JSON.parse(localStorage.getItem("loginCredentials")).key);
    }
  }, []);

  useEffect(() => {
    dispatch(singleBlogDetail({ id, token }));
  }, []);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handeSendComment = async (e) => {
    e.preventDefault();
    const data = {
      content: newComment,
    };

    if (!!newComment) {
      dispatch(AddComment({ data, token, id })).then(() =>
        dispatch(singleBlogDetail({ id, token }))
      );
    }
    setNewComment("");
  };

  if (loading) {
    return <DefaultSpinner />;
  }

  return (
    <MainLayout>
      <div className="flex flex-col border border-green-400  max-w-3xl">
        <div className=" max-w-3xl ">
          <img
            src={singleBlogData?.image}
            alt="blogDetail"
            className=" object-contain h-full w-full"
          />
        </div>
        <div className="flex flex-col ml-2 gap-y-2">
          <h4>{singleBlogData?.title}</h4>
          <p className="opacity-70">
            {singleBlogData?.publish_date?.slice(0, 10) +
              " " +
              singleBlogData?.publish_date?.slice(11, 16)}
          </p>
          <p>
            {singleBlogData?.content?.length <= 75
              ? singleBlogData?.content?.slice(0, 75)
              : singleBlogData?.content?.slice(0, 75) + "..."}
          </p>
        </div>
        <div className="flex mt-2 mb-2 gap-x-2 ml-2">
          <img
            className="object-contain"
            src={singleBlogData?.author?.image || "/assets/default.png"}
            width={"25px"}
            height={"25px"}
            alt="profile-img"
          />
          <p>{singleBlogData?.author}</p>
        </div>
        <div className="flex gap-x-3 ml-2">
          <div className="flex items-center gap-x-1">
            <span>
              <MdFavorite className="text-red-800" />
            </span>
            <p>{singleBlogData?.likes}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <span>
              <MdVisibility />
            </span>
            <p>{singleBlogData?.post_views}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <span>
              <BsChatLeft />
            </span>
            <p>{singleBlogData?.comment_count}</p>
          </div>
        </div>

        <div className="flex flex-col gap-x-3 gap-y-3 mt-2 mb-3">
          <h4 className="font-normal text-lg border-b border-green-500 text-center">
            Comments
          </h4>
          {singleBlogData?.comments?.map((comment, id) => {
            return (
              <div
                className="flex flex-col gap-y-2 border-b border-green-400"
                key={id}
              >
                <h6 className="text-[12px]">{comment.user}:</h6>
                <p className="text-[11px] font-light">{comment.content}</p>
              </div>
            );
          })}
        </div>
        <form
          className="my-3 flex gap-x-3 mx-2"
          onSubmit={(e) => handeSendComment(e)}
        >
          <input
            type="text"
            placeholder="Write your comment..."
            className="border-b border-green-500 w-full outline-none text-[11px] font-medium rounded-md bg-indigo-100"
            value={newComment}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            value="Send"
            className="rounded-full py-2 px-6 bg-indigo-600 font-montserrat text-btnGiris cursor-pointer font-semibold text-xs text-white"
          />
        </form>
      </div>
    </MainLayout>
  );
};

export default BlogDetails;
