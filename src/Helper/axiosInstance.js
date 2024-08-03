import axios from "axios";

const BASE_URL="http://localhost:5000/api/v1"
// const BASE_URL="https://api.thefarming.org/api/v1"
  // const BASE_URL="https://lms-server-rni1.onrender.com/api/v1"

const axiosInstance=axios.create()

axiosInstance.defaults.baseURL=BASE_URL
axiosInstance.defaults.withCredentials=true

export default axiosInstance
