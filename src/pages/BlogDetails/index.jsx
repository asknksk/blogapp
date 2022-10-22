import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { MdFavorite, MdVisibility } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { state } = useLocation();
  const [newComment, setNewComment] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value);
    if(newComment !== ""){
        setNewComment(e.target.value)
    }
  };
  const handeSendComment = (e) => {
    e.preventDefault();
    console.log(newComment);
  };
  return (
    <MainLayout>
      <div className="flex flex-col border border-green-400  max-w-3xl">
        <div className=" max-w-3xl ">
          <img
            src={state?.blogDetail?.image}
            alt="blogDetail"
            className=" object-contain h-full w-full"
          />
        </div>
        <div className="flex flex-col ml-2 gap-y-2">
          <h4>{state?.blogDetail?.title}</h4>
          <p className="opacity-70">
            {state?.blogDetail?.publish_date.slice(0, 10) +
              " " +
              state?.blogDetail?.publish_date.slice(11, 16)}
          </p>
          <p>
            {state?.blogDetail?.content.length <= 75
              ? state?.blogDetail?.content.slice(0, 75)
              : state?.blogDetail?.content.slice(0, 75) + "..."}
          </p>
        </div>
        <div className="flex mt-2 mb-2 gap-x-2 ml-2">
          <img
            className="object-contain"
            src={state?.blogDetail?.author?.image || "/assets/default.png"}
            width={"25px"}
            height={"25px"}
            alt="profile-img"
          />
          <p>{state?.blogDetail?.author}</p>
        </div>
        <div className="flex gap-x-3 ml-2">
          <div className="flex items-center gap-x-1">
            <span>
              <MdFavorite className="text-red-800" />
            </span>
            <p>{state?.blogDetail?.likes}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <span>
              <MdVisibility />
            </span>
            <p>{state?.blogDetail?.post_views}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <span>
              <BsChatLeft />
            </span>
            <p>{state?.blogDetail?.comment_count}</p>
          </div>
        </div>

        <div className="flex flex-col gap-x-3 gap-y-3 mt-2 mb-3">
          <h4 className="font-normal text-lg border-b border-green-500 text-center">
            Comments
          </h4>
          {state?.blogDetail?.comments?.map((comment) => {
            return (
              <div className="flex flex-col gap-y-2 border-b border-green-400">
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
