import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://697a92690e6ff62c3c59b033.mockapi.io',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;