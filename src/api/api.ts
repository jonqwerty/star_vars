import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://swapi.py4e.com/api/',
});
