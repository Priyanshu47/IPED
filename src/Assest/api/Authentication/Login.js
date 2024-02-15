import axios from 'axios';

// Function for api connection
export default async function loginApi(data) {
    try {
        console.log("here")
        // const loginAPI = API_CONFIG.API_BASE_URL + API_CONFIG.LOGIN_API;
        // const apiTocken = API_CONFIG.API_TOKEN;
        const response = await axios.post(`http://localhost:8000/auth/login`, data);
        // return response?.data
        console.log("abc",response)
    }
    catch {

    }
}