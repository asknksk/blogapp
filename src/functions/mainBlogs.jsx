import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

export const mainBlogs = async () => {
  try {
    const res = await axios.get(`${baseUrl}blog/blog/`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
