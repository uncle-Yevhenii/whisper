import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || 'http://localhost:8080/';
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Whisper';

const client = axios.create({
    baseURL: BASE_URL,
});

export default client;
