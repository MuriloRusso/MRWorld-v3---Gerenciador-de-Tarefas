// src/services/api.js
import axios from 'axios';

const localUrlApi = 'http://localhost/MRWorld-v3---Gerenciador-de-Tarefas/api';

const api = axios.create({
  baseURL: localUrlApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
