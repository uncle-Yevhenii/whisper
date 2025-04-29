import axios from 'axios';

const BASE_URL = 'http://localhost:8888/api/v1';

const client = axios.create({
    baseURL: BASE_URL,
});

export default client;
