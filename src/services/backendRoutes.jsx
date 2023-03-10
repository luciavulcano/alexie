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
  habitsLog: "api/v1/habits/logs/",
  events: "api/v1/events/",
  eventsLog: "api/v1/events/logs/",
  mainHealth: "api/v1/main/health/",
  health: "api/v1/health/",
  healthLog: "api/v1/health/logs/",
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
