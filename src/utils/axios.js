import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
