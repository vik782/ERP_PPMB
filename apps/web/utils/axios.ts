import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NESTJS_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
