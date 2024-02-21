// Function for api connection
import axios from 'axios';
import API_CONFIG from '../../../../config.js';

export default async function loginApi(data) 
{
    try 
    {
        const response = await axios.post(API_CONFIG.LOGIN_API, data);
        return response.data;
    } 
    catch (error) 
    {
        if (error.response) 
        {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(`Error data: `, error.response.data);
            return error.response.data;
        } 
        else if (error.request) 
        {
            // The request was made but no response was received
            console.log(`No response received: `, error.request);
        } 
        else 
        {
            // Something happened in setting up the request that triggered an Error
            console.log(`Error: `, error.message);
        }
        // Return an error object if there's no specific response from the server
        return { code: 500, message: 'Internal Server Error' };
    }
}
