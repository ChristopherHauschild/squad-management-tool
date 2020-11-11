import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
  headers: { 'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}` },
});

export default api;
