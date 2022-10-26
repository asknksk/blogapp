import { MdFavorite, MdVisibility } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PatchBlog } from "../../functions/mainBlogs";
import { useNavigate } from "react-router-dom";

const MyBlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const handleOpenDetail = () => {
    const blogDetail = blog;
    navigate(`/detail/${blogDetail?.id}`, {
      state: {
        blogDetail,
      },
    });
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loginCredentials"))) {
      setToken(JSON.parse(localStorage.getItem("loginCredentials")).key);
      setUserName(
        JSON.parse(localStorage.getItem("loginCredentials")).user.username
      );
    }
  }, []);

  const handlePublish = () => {
    const blog_id = blog.id;
    const data = {
      title: blog.title,
      content: blog.content,
      status: "p",
    };
    dispatch(PatchBlog({ data, token, blog_id, navigate }));
  };


  if (blog.author === userName) {
    return (
      <div className="flex flex-col border border-green-400 max-h-96 max-w-xs">
        <div className="flex flex-col " onClick={() => handleOpenDetail()}>
          <div className="max-h-44 max-w-xs ">
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
            <div className="flex items-center gap-x-1">
              <span>
                <MdFavorite className="text-red-800" />
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

        <div className={blog?.status === "d" ? "text-center" : "hidden"}>
          <p className="text-[11px]">
            This blog page appears as a draft. Would you like to publish?
          </p>
          <button
            className="rounded-full py-2 px-6 bg-indigo-600 font-montserrat text-btnGiris cursor-pointer font-semibold text-xs text-white"
            onClick={() => handlePublish()}
          >
            Publish
          </button>
        </div>
      </div>
    );
  }
};
export default MyBlogCard;
