// axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    // Incluir el token de autorización si está presente en localStorage
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : undefined
  }
});

export default axiosInstance;
