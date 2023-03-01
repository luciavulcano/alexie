import generateBackendURL from "./generateBackendURL"
import apiInterceptor from "./interceptor"

const ADDRESS = generateBackendURL("");

export const ROUTES = {
  version: "api/v1/",
  login: "api/token/",
  mainEmotion: "api/v1/main/emotions/",
  emotions: "api/v1/general/emotions/",
  emotionsLog: "api/v1/general/emotions/logs/",
  habits: "api/v1/habits/",
  events: "api/v1/events/",
  health: "api/v1/health/"
};

export async function sendGet(route) {
  try {
    return await apiInterceptor.get(ADDRESS + route);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendPost(route, params, header) {
  try {
    return await apiInterceptor.post(ADDRESS + route, params, header);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendDelete(route) {
  try {
    return await apiInterceptor.delete(ADDRESS + route);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendPatch(route, params, header) {
  try {
    return await apiInterceptor.patch(ADDRESS + route, params, header);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}
