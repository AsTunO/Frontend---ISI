import axios from "axios";

export default axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: { "origins": "http://localhost:5173" }
});