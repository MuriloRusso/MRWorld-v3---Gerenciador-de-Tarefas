// src/config/api.ts (ou api.js se não quiser usar TS)
const API_URL = process.env.REACT_APP_API_URL as string;

console.log(API_URL);

export default API_URL;
