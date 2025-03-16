import Axios from "axios";
import { initialConfig } from "@/config";
import { getItemFromStore, removeItemFromStore  } from "../utils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const axios = Axios.create({});

const serverUrl = initialConfig.apiBaseUrl;
export const baseURL = `${serverUrl}`;

axios.defaults.timeout = 50000; // Milliseconds

axios.interceptors.request.use(
  async function (config) {
    const token = getItemFromStore("token", null);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.baseURL = baseURL;
    config.withCredentials = false;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const navigate = useNavigate()
    if (error?.response?.status === 403) {
    }
    if (error?.response?.status === 401) {
      Cookies.remove('user')
      Cookies.remove('parentDetail')
      Cookies.remove('parentId')
      removeItemFromStore('token')
      removeItemFromStore('account')
      navigate("/error/unauthorized")
    }
    if (error?.response?.status === 500) {
      navigate("/error/server-error")
    }
    throw error;
  }
);

export default axios;