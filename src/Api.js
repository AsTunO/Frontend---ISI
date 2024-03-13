import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:5000",
    // baseURL: "https://835b-200-133-1-66.ngrok-free.app",
    headers: { "origins": "http://localhost:5173" }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;