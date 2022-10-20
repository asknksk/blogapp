import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 8000,

  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(config);
api.interceptors.response.use(response);

async function config(config) {
  return config;
}

function response(response) {
  return response;
}

export default api;