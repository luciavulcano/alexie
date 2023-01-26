import axios from "axios";

export async function sendGet(route) {
  try {
    return await axios.get(ADDRESS + route);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendPost(route, params, header) {
  try {
    return await axios.post(ADDRESS + route, params, header);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendDelete(route) {
  try {
    return await axios.delete(ADDRESS + route);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}

export async function sendPatch(route, params, header) {
  try {
    return await axios.patch(ADDRESS + route, params, header);
  } catch (err) {
    if (!err.response && window.location.pathname !== "/error") {
      window.location.href = "/error";
    }
    throw err;
  }
}
