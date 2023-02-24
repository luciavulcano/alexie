import generateBackendURL from "./generateBackendURL"
import http from "./http";

const ADDRESS = generateBackendURL("");

export const ROUTES = {
  version: "api/v1/",
  login: "api/token/",
  emotions: "api/v1/general/emotions/",
  emotionsLog: "api/v1/general/emotions/logs/",
  habits: "api/v1/habits/",
  events: "api/v1/events/",
  health: "api/v1/health/"
};

export async function sendGet(route) {
  try {
    return await http.get(ADDRESS + route);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendPost(route, params, header) {
  try {
    return await http.post(ADDRESS + route, params, header);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendDelete(route) {
  try {
    return await http.delete(ADDRESS + route);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendPatch(route, params, header) {
  try {
    return await http.patch(ADDRESS + route, params, header);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}
