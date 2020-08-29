import axios from 'axios';

const newAxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

export default newAxiosInstance;
