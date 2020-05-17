import axios from 'axios';
const api = axios.create({
  baseURL: 'https://bike-api-pi.herokuapp.com/',
});

export default api;