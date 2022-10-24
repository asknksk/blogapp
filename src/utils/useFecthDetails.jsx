import React, { useEffect, useState } from "react";
import api from "./axiosInterceptor";
import { toastErrorNotify } from "./customToastify";

//TODO kullanılmıyor şimdilik örnek olarak kalsın

// export const useFetchPatchBlog = ({ blog_id }) => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     api
//       .get(`/blog/blog/${blog_id}`)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         toastErrorNotify("Opps please refresh page..");
//       });
//   }, []);

//   return data;
// };
