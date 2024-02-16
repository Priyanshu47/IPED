import axios from 'axios';

// Function for api connection
export default async function loginApi(data) {
    try {
        
        // const loginAPI = API_CONFIG.API_BASE_URL + API_CONFIG.LOGIN_API;
        // const apiTocken = API_CONFIG.API_TOKEN;
        const response = await axios.post(`http://localhost:8000/auth/login`, data);
       return response?.data
       
    }
    catch {
            
    }
}