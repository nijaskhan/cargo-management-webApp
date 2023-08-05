import axios from 'axios'
const instance = axios.create({
  // change when adding to production server
    // baseURL: "http://localhost:3000",   //dev sever
    baseURL: "https://cargo-management-service.onrender.com",    //demo production server
  });


  export default instance