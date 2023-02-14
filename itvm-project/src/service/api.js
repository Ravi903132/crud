import axios from 'axios';

const URL='http://localhost:8080';

export const addUser= async (data)=>{
     return await axios.post(`${URL}/register`,data);
    
};