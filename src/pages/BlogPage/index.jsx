import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { useFetchCategories } from "../../utils/usefetchBlogs";
import Submit from "../LoginPage/Submit";
import Input from "./Input";

const NewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newObj, setNewObj] = useState([]);
  const [optionCategory, setOptionCategory] = useState(0);
  const [optionStatus, setOptionStatus] = useState(0);

  const Title = useRef();
  const Content = useRef();
  const Image = useRef();
  const Status = useRef();
  const categories = useFetchCategories();

  const handleChangeCategory = (e) => {
    setOptionCategory(e.target.value);
  };
  const handleChangeStatus = (e) => {
    setOptionStatus(e.target.value);
  };

  useEffect(() => {
    const objecta = Object.assign({}, categories);
    const newArr = Object.entries(objecta);
    setNewObj(newArr);
  }, [categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: Title.current.value,
      content: Content.current.value,
      image: Image.current.value,
      category: optionCategory,
      status: optionStatus,
    };
    console.log(data); 
  };
  return (
    <MainLayout>
      <div className=" flex flex-col justify-center overflow-hidden w-96 mt-10 ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline mb-4">
            Create Your Blog
          </h1>
          <form
            className="grid grid-cols-2 w-full gap-4 pb-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="col-span-2 ">
              <Input innerRef={Title} type="text" placeholder="Blog title" />
            </div>
            <div className="col-span-2 ">
              <textarea
                ref={Content}
                className="border border-primary text-[11px] font-medium rounded-xl py-1.5 px-6 bg-white w-full resize-none  focus:outline-none focus:border-primary focus:ring-1 "
                rows="4"
                placeholder="Blog Content"
              ></textarea>
            </div>
            <div className="col-span-2 ">
              <Input
                innerRef={Image}
                type="text"
                placeholder="Blog Image Url"
              />
            </div>
            <div className="col-span-2 ">
              <select
                className="border border-primary rounded-xl py-1.5 px-6 font-medium text-[11px] bg-white w-full resize-none  focus:outline-none focus:border-primary focus:ring-1 "
                onChange={(e) => handleChangeCategory(e)}
              >
                {newObj?.map((i, idx) => {
                  return (
                    <option value={i[0]} key={idx}>
                      {i[1]?.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-span-2 ">
              <select
                className="border border-primary rounded-xl py-1.5 px-6 font-medium text-[11px] bg-white w-full resize-none  focus:outline-none focus:border-primary focus:ring-1 "
                onChange={(e) => handleChangeStatus(e)}
              >
                <option value="d">Draft</option>
                <option value="p">Published</option>
              </select>
            </div>

            <div className="text-center col-span-2">
              <Submit value="Create Blog" />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewBlog;
