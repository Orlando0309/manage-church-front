import axios from 'axios';
import { JAVA_API } from './secret';

// Create an instance of axios
export const axiosInstance = axios.create({
    baseURL: `${JAVA_API}`, // Replace with your base URL
    timeout: 10000, // Timeout after 10 seconds
   
});

// Optional: Add a request interceptor
axiosInstance.interceptors.request.use(
    config => {
        // Modify request configuration before sending the request
        // For example, you can add authentication tokens here
        // config.headers.Authorization = `Bearer ${yourToken}`;
        return config;
    },
    error => {
        // Handle the request error
        return Promise.reject(error);
    }
);

// Optional: Add a response interceptor
axiosInstance.interceptors.response.use(
    response => {
        // Process the response data here
        return response;
    },
    error => {
        // Handle the response error
        // You can add custom error handling here
        return Promise.reject(error);
    }
);

