import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { MdFavorite, MdFavoriteBorder, MdVisibility } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddComment,
  DeleteBlog,
  LikeFunction,
  mainBlogs,
  singleBlogDetail,
} from "../../functions/mainBlogs";
import { useDispatch, useSelector } from "react-redux";
import { toastWarnNotify } from "../../utils/customToastify";
import { openModal } from "../../store/modal";
import store from "../../store";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const { singleBlogData } = useSelector((state) => state.singleBlog);
  const blog_id = id;
  const [userId, setUserId] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [fetchState, setFetchState] = useState(false);
  const blogUserIdContains = singleBlogData?.likes?.filter((like) => like.user_id === userId).length > 0;
  useEffect(() => {
    dispatch(mainBlogs());
  }, [fetchState]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loginCredentials"))) {
      setToken(JSON.parse(localStorage.getItem("loginCredentials")).key);
      setUserName(
        JSON.parse(localStorage.getItem("loginCredentials")).user.username
      );
      setUserId(JSON.parse(localStorage.getItem("loginCredentials")).user.id);
    }
  }, []);

  const handleLike = async (e) => {
    if (!!token) {
      dispatch(LikeFunction({ token, blog_id })).then(() =>
        setFetchState(!fetchState)
      );
    } else {
      toastWarnNotify("Please login");
    }
  };
  useEffect(() => {
    dispatch(singleBlogDetail({ id, token }));
  }, [fetchState]);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handeSendComment = async (e) => {
    e.preventDefault();
    const data = {
      content: newComment,
    };

    if (!!newComment) {
      if (!!token) {
        dispatch(AddComment({ data, token, id })).then(() =>
          dispatch(singleBlogDetail({ id, token }))
        );
      } else {
        toastWarnNotify("Please login");
      }
    }
    setNewComment("");
  };
  const handleOpenEditModal = () => {
    store.dispatch(
      openModal({
        name: "blog-edit",
        data: singleBlogData,
      })
    );
  };
  const handleBlogDelete = () => {
    dispatch(DeleteBlog({ token, id })).then(() => navigate("/"));
  };
  function checkImage(url) {
    var image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        setIsValid(true);
      }
    };
    image.onerror = function () {
      setIsValid(false);
    };
    image.src = url;
  }
  checkImage(singleBlogData?.image);

  return (
    <MainLayout>
      <div className="flex flex-col border border-green-400  max-w-3xl">
        <div className=" max-w-3xl ">
          <img
            src={isValid ? singleBlogData?.image : "https://picsum.photos/400/300"}
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
            {singleBlogData?.content}
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
            <span
              onClick={(e) => handleLike(e)}
              className="cursor-pointer "
              data-id={singleBlogData?.id}
            >
              {blogUserIdContains ? (
                <MdFavorite className="text-red-800 " />
              ) : (
                <MdFavoriteBorder />
              )}
            </span>
            <p>{singleBlogData?.likes?.length}</p>
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
        <div
          className={
            singleBlogData?.author === userName ? "text-center mt-2" : "hidden"
          }
        >
          <button
            className="rounded-full py-2 px-6 bg-indigo-600 font-montserrat text-btnGiris cursor-pointer font-semibold text-xs text-white mr-3"
            onClick={() => handleOpenEditModal()}
          >
            Edit
          </button>
          <button
            className="rounded-full py-2 px-6 bg-indigo-600 font-montserrat text-btnGiris cursor-pointer font-semibold text-xs text-white"
            onClick={(e) => handleBlogDelete(e)}
          >
            Delete
          </button>
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
                <h6 className="text-[12px] ml-1">{comment.user}:</h6>
                <p className="text-[11px] font-light ml-3">{comment.content}</p>
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
