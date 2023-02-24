import axios from 'axios'
import generateBackendURL from "../services/generateBackendURL";

const http = axios.create({
  baseURL: generateBackendURL
})

export default http
