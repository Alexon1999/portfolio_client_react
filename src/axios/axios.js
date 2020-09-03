import axios from 'axios';

const newAxiosInstance = axios.create({
  baseURL: 'https://my-portfolio-alexon.herokuapp.com/', //+ http://localhost:5000
});

export default newAxiosInstance;
