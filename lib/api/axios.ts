import axios from "axios";

  const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://161.248.37.193:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
