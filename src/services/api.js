import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.faznegocio.com.br:3333/',
});

export default api;
