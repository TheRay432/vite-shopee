import { useLoadingStore } from "@/stores/Loading/Loading";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  (config) => {
    useLoadingStore().showLoading();
    return config;
  },
  (error) => {
    useLoadingStore().hideLoading();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    useLoadingStore().hideLoading();
    return response;
  },
  (error) => {
    useLoadingStore().hideLoading();
    return Promise.reject(error);
  }
);

export default instance;
