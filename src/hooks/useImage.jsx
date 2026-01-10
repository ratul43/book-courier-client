import React from 'react';
import useAxiosSecure from './useAxiosSecure';


const useImage = (data) => {
   
const profileImg = data.Image[0]

const axiosSecure = useAxiosSecure()

// store the image and get the photo url
      const formData = new FormData()
      
      formData.append('image', profileImg)
     
      const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

    return  axiosSecure.post(image_API_URL, formData)


};

export default useImage;