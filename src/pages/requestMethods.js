import axios from 'axios';

const BASE_URL = import.meta.env.VITE_URL;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: "Bearer"},
});

