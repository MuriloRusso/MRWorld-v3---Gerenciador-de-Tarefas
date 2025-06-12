// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/mrworld/MRWorld-v3---Gerenciador-de-Tarefas/api', // ajuste para o seu caminho real
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
