import axios from 'axios';

const server = process.env.REACT_APP_API_BASE_PATH
  ? process.env.REACT_APP_API_BASE_PATH
  : 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: server,
});
