import axios from 'axios';
import React from 'react';

const axiosModel = axios.create({
  baseURL: "https://book-courier-server-omega.vercel.app",
});


const useAxios = () => {
    return axiosModel
};




export default useAxios;