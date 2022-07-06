import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:3335',
    baseURL: 'http://172.16.105.48:3335'
});