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
  const [isValid, setIsValid] = useState(false);
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

  checkImage(blog?.image);
  if (blog.status === "p") {
    return (
      <div className="flex flex-col border border-green-400 max-h-[340px] max-w-xs">
        <div
          className="max-h-44 max-w-xs cursor-pointer"
          onClick={() => handleOpenDetail()}
        >
          <img
            src={isValid ? blog?.image : "https://picsum.photos/400/300"}
            alt="blog"
            className=" object-contain h-full w-full max-h-64"
          />
        </div>
        <div className="flex flex-col ml-2 gap-y-2">
          <h4>
            {blog?.title.length <= 30
              ? blog?.title.slice(0, 30)
              : blog?.title.slice(0, 30) + "..."}
          </h4>
          <p className="opacity-70">
            {blog?.publish_date.slice(0, 10) +
              " " +
              blog?.publish_date.slice(11, 16)}
          </p>
          <p>
            {blog?.content.length <= 30
              ? blog?.content.slice(0, 30)
              : blog?.content.slice(0, 30) + "..."}
          </p>
        </div>
        <div className="flex mt-2 mb-2 gap-x-2 ml-2">
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
          <div className="flex items-center gap-x-1 ml-2">
            <span
              onClick={(e) => handleLike(e)}
              className="cursor-pointer "
              data-id={blog?.id}
            >
              {blogUserIdContains ? (
                <MdFavorite className="text-red-800 " />
              ) : (
                <MdFavoriteBorder />
              )}
            </span>
            <p>{blog?.likes?.length}</p>
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
