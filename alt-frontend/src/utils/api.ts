import axios from "axios";

const API_URL = "https://tt-jsonserver-01.alt-tools.tech";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
