import axios from "axios";
import { showToast } from "../components/showtoast/showToast";
const backendUrl = `http://localhost:3000/api/v1`;

export const createJob = async (JobPostPayload) => {
    try {
        const reqUrl = `${backendUrl}/job/create`;
        const token = localStorage.getItem("token");
        console.log(token);
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.post(reqUrl, JobPostPayload);
        console.log(response.data);
        return response.data;


    } catch (error) {
        showToast(error.response.data.errorMessage, { type: 'error' });



    }
}


export const getJobPostById = async (jobPostId) => {
    try {
        const reqUrl = `${backendUrl}/job/job-details/${jobPostId}`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get(reqUrl);
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateJobPostById = async (jobPostId, updatedFormData, userId) => {
    try {
        const reqUrl = `${backendUrl}/job/update/${jobPostId}`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.put(reqUrl, {
            ...updatedFormData,
            userId,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};

export const getAllJobs = async (filter) => {
    try {
        const reqUrl = `${backendUrl}/job/all?title=${filter?.title || ""
            }&skills=${filter?.skills || ""}`;
        // debugger;
        const response = await axios.get(reqUrl);
       // console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};