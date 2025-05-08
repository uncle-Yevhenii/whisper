import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || 'http://localhost:8080/';

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default client;
