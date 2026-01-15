import axios from 'axios';
import React from 'react';

const axiosModel = axios.create({
  baseURL: "http://localhost:3000",
});


const useAxios = () => {
    return axiosModel
};




export default useAxios;