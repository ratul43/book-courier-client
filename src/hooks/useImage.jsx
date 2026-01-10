import useAxiosSecure from "./useAxiosSecure";

const useImage = () => {
  const axiosSecure = useAxiosSecure();

  const uploadImage = async (data) => {
    const imageFile = data.Image[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    const image_API_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_host_key
    }`;

    try {
      const res = await axiosSecure.post(image_API_URL, formData);
      return res.data.data.url; // ✅ RETURN URL
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  return uploadImage;
};

export default useImage;
