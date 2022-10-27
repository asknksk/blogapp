import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PatchBlog } from "../../functions/mainBlogs";
import Input from "../../pages/BlogCreatePage/Input";
import Submit from "../../pages/LoginPage/Submit";
import { modalClose } from "../../utils/modalClose";
import { useFetchCategories } from "../../utils/usefetchBlogs";

export default function EditBlog({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [newObj, setNewObj] = useState([]);
  const [optionCategory, setOptionCategory] = useState(1);
  const [optionStatus, setOptionStatus] = useState("d");

  const Title = useRef();
  const Content = useRef();
  const categories = useFetchCategories();
  const blog_id = data.id

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loginCredentials"))) {
      setToken(JSON.parse(localStorage.getItem("loginCredentials")).key);
    }
  }, []);
  useEffect(() => {
    const objecta = Object.assign({}, categories);
    const newArr = Object.entries(objecta);
    setNewObj(newArr);
  }, [categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data;
    if (blogImage === "") {
      data = {
        title: Title.current.value,
        content: Content.current.value,
        category: Number(optionCategory),
        status: optionStatus,
      };
    } else {
      data = {
        title: Title.current.value,
        content: Content.current.value,
        image: blogImage,
        category: Number(optionCategory),
        status: optionStatus,
      };
    }
    dispatch(PatchBlog({ data, token, blog_id, navigate }));
    modalClose()

  };
  return (
    <div className=" flex flex-col justify-center overflow-hidden w-96 mt-10 ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline mb-4">
          Update Your Blog
        </h1>
        <form
          className="grid grid-cols-2 w-full gap-4 pb-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="col-span-2 ">
            <Input
              innerRef={Title}
              type="text"
              placeholder="Blog title"
              required={true}
              value={data?.title}
            />
          </div>
          <div className="col-span-2 ">
            <textarea
              required={true}
              ref={Content}
              className="border border-primary text-[11px] font-medium rounded-xl py-1.5 px-6 bg-white w-full resize-none  focus:outline-none focus:border-primary focus:ring-1 "
              rows="4"
              placeholder="Blog Content"
            ></textarea>
          </div>
          <div className="col-span-2 ">
            <input
              className="border-b w-full outline-none text-[11px] font-medium"
              type="url"
              placeholder="Blog Image Url"
              onChange={(e) => setBlogImage(e.target.value)}
            />
          </div>
          <div className="col-span-2 ">
            <select
              className="border border-primary rounded-xl py-1.5 px-6 font-medium text-[11px] bg-white w-full resize-none  focus:outline-none focus:border-primary focus:ring-1 "
              onChange={(e) => setOptionCategory(e.target.value)}
            >
              {newObj?.map((i, idx) => {
                return (
                  <option value={parseInt(i[0]) + 1} key={idx}>
                    {i[1]?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-span-2 ">
            <select
              className="border border-primary rounded-xl py-1.5 px-6 font-medium text-[11px] bg-white w-full resize-none  focus:outline-none focus:border-primary focus:ring-1 "
              onChange={(e) => setOptionStatus(e.target.value)}
            >
              <option value="d">Draft</option>
              <option value="p">Published</option>
            </select>
          </div>

          <div className="text-center col-span-2">
            <Submit value="Update Blog" />
          </div>
        </form>
      </div>
    </div>
  );
}
