import axios from "axios";
import generateBackendURL from "./generateBackendURL";

const ADDRESS = generateBackendURL("");

const apiInterceptor = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${ADDRESS}api/`,
  referrerPolicy: {
    policy: 'strict-origin-when-cross-origin'
  }
});

apiInterceptor.interceptors.request.use((config) => {
  try {
    const userState = JSON.parse(localStorage.getItem("user"));
    if (userState.state.accessToken) {
      config.headers["Authorization"] = "Bearer " + userState.state.accessToken;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

apiInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    const userState = JSON.parse(localStorage.getItem("user"));
    if (userState.state.refreshToken === null) {
      localStorage.clear();
      return (window.location.href = "/");
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const userState = JSON.parse(localStorage.getItem("user"));
      const header = {
        "Content-Type": "application/json",
      };
      const parameters = {
        method: "POST",
        headers: header,
      };
      const body = {
        refresh: userState.state.refreshToken,
      };
      return axios
        .post(ADDRESS + "auth/token/refresh/", body, parameters)
        .then((response) => {
          let userState = JSON.parse(localStorage.getItem("user"));
          userState.state.accessToken = response.data.access;
          localStorage.setItem("user", JSON.stringify(userState));
          originalRequest.headers["Authorization"] =
            "Bearer " + response.data.access;
          return apiInterceptor(originalRequest);
        })
        .catch((err) => {
          localStorage.clear();
          return (window.location.href = "/");
        });
    }
    return Promise.reject(error);
  }
);
export default apiInterceptor;
