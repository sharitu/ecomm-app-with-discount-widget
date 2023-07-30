import axios from 'axios';

export const __http = axios.create({
  baseURL: '', 
  timeout: 10000,
});
