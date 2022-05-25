import axios from "axios";

const $axios = axios.create();
$axios.defaults.timeout = 120000;
$axios.interceptors.request.use(
  async (config) => {
    let url = `http://127.0.0.1:5000`;
    config.baseURL = url;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $axios;
