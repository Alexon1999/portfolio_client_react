import axios from "axios";

// 'https://my-portfolio-alexon.herokuapp.com'
// local server : 'http://localhost:5000'
const newAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default newAxiosInstance;
