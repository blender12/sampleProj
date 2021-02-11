import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/cow/'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;

    }
  
    return req;
  });

API.interceptors.response.use(response => response,
   async error => {
    const originalRequest = error.config;
        // Prevent infinite loops
        if (error.response.status === 401){
            console.log("hi");
           const{data}=await  API.get('/id');
           alert(data.sound);
           return Promise.reject(error);
        }});
  
export const signIn = (formData) => API.post('/auth/id',formData);
export const chec=()=>API.get('/id')

export const del=()=>API.get('/del');