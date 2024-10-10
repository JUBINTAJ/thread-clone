import axios from "axios";


export const axiosintercept=axios.create({
    baseURL:"http://social-media-rest-apis.onrender.com/api/"

})
axiosintercept.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error)
})