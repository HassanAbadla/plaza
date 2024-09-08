import axios from 'axios'

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  withXSRFToken: true,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default apiClient