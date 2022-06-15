import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:3335',
    baseURL: 'http://192.168.1.6:3335'
});