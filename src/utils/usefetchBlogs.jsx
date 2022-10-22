import { useEffect, useState } from "react";
import api from "./axiosInterceptor";


export const useFetchCategories = () => {
    const [categories, setCategories] = useState({});
  
    useEffect(() => {
      api
        .get(
          "blog/categories"
        )
        .then((res) => {
            setCategories(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return categories;
  };
