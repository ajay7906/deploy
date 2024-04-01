import axios from 'axios'
import { showToast } from '../components/showtoast/showToast';


export const registerUser = async ({email, password, mobile,  name})=>{
    try {
        const reqUrl = `http://localhost:3000/api/v1/auth/register`;
        const response =  await axios.post(reqUrl, {
            email,
            password,
            mobile,
            name
        });
    //     if (response.success) {
    //         showToast('register successful', { type: 'success' });

           
    //    }
    //    else{
    //         showToast(response.errorMessage, { type: 'error' });
    //         console.log(response.errorMessage);
    //    }
        return response.data;
       
        
    } catch (error) {
        showToast(error.response.data.errorMessage, { type: 'error' });
       
        
        
    }
}

export  const loginUser = async ({email, password})=>{
    try {
        const reqUrl = `http://localhost:3000/api/v1/auth/login`;
        const response = await axios.post(reqUrl, {
            email,
            password
        })
        localStorage.setItem("token", response.data.token)
        return response?.data
    } catch (error) {
        showToast(error.response.data.errorMessage, { type: 'error' });
    }

}