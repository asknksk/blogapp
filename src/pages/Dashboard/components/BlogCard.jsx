import { MdFavorite, MdFavoriteBorder, MdVisibility } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LikeFunction } from "../../../functions/mainBlogs";
import { useEffect, useState } from "react";
import { toastWarnNotify } from "../../../utils/customToastify";

const BlogCard = ({ blog, fetchState, setFetchState }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  const blog_id = blog?.id;
  const blogUserIdContains =
    blog?.likes.filter((like) => like.user_id === userId).length > 0;
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loginCredentials"))) {
      setToken(JSON.parse(localStorage.getItem("loginCredentials")).key);
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
  const handleOpenDetail = () => {
    const blogDetail = blog;
    navigate(`/detail/${blogDetail?.id}`);
  };

  if (blog.status === "p") {
    return (
      <div className="flex flex-col border border-green-400 max-h-80 max-w-xs">
        <div
          className="max-h-44 max-w-xs cursor-pointer"
          onClick={() => handleOpenDetail()}
        >
          <img
            src={blog?.image}
            alt="blog"
            className=" object-contain h-full w-full"
          />
        </div>
        <div className="flex flex-col">
          <h4>{blog?.title}</h4>
          <p>
            {blog?.publish_date.slice(0, 10) +
              " " +
              blog?.publish_date.slice(11, 16)}
          </p>
          <p>
            {blog?.content.length <= 75
              ? blog?.content.slice(0, 75)
              : blog?.content.slice(0, 75) + "..."}
          </p>
        </div>
        <div className="flex gap-x-2">
          <img
            src={blog?.author?.image || "/assets/default.png"}
            className=" object-contain"
            width={"25px"}
            height={"25px"}
            alt="profile-img"
          />
          <p>{blog?.author}</p>
        </div>
        <div className="flex gap-x-3">
          <div className="flex items-center gap-x-1 likeBtnDiv">
            <span
              onClick={(e) => handleLike(e)}
              className="cursor-pointer likeBtnDiv"
              data-id={blog?.id}
            >
              {blogUserIdContains ? (
                <MdFavorite className="text-red-800 likeBtnDiv" />
              ) : (
                <MdFavoriteBorder />
              )}
            </span>
            <p className="likeBtnDiv">{blog?.likes?.length}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <span>
              <MdVisibility />
            </span>
            <p>{blog?.post_views}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <span>
              <BsChatLeft />
            </span>
            <p>{blog?.comment_count}</p>
          </div>
        </div>
      </div>
    );
  }
};
export default BlogCard;
