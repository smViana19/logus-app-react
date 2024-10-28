import axios from 'axios';
import store from '../src/store';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.token;

    console.log('Token:', token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error))

export default axiosInstance;
