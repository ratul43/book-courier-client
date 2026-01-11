import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useImage from "../../hooks/useImage";
import Swal from "sweetalert2";

const AddBookPage = () => {
  const axiosSecure = useAxiosSecure();
  const uploadImage = useImage();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const handleAddBook = async (data) => {
    const imgURL = await uploadImage(data);

    const addBookData = {
      name: data.BookName,
      author: data.Author,
      description: data.description,
      price: data.Price,
      image: imgURL,
      publishStatus: data.Status 
    };

    await axiosSecure.post("/librarian/bookAdd", addBookData).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      reset()
    });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <fieldset className="fieldset">
            <form onSubmit={handleSubmit(handleAddBook)}>
              <label className="label font-semibold">Book Name</label>
              <input
                type="text"
                {...register("BookName", { required: true })}
                className="input"
                placeholder="Book Name"
              />
              {errors.BookName?.type === "required" && (
                <p className="text-red-500">Book name is required</p>
              )}
              <label className="label font-semibold">Image</label>
              <input
                type="file"
                {...register("Image", { required: true })}
                className="file-input"
              />
              {errors.Image?.type === "required" && (
                <p className="text-red-500">Image is required</p>
              )}

              <label className="label font-semibold">Status</label>
              <select
                {...register("Status", { required: true })}
                className="select"
              >
                <option></option>
                <option>Published</option>
                <option>Unpublished</option>
              </select>
              {errors.Status?.type === "required" && (
                <p className="text-red-500">Status is required</p>
              )}

              <label className="label font-semibold">Author</label>
              <input
                type="text"
                {...register("Author", { required: true })}
                className="input"
                placeholder="Author"
              />
              {errors.Author?.type === "required" && (
                <p className="text-red-500">Author name is required</p>
              )}

              <label className="label font-semibold">Description</label>
              <textarea
                className="textarea h-24"
                placeholder="Bio"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description?.type === "required" && (
                <p className="text-red-500">Description is required</p>
              )}

              {/* status dropdown  */}
              <label className="label font-semibold">Price</label>
              <input
                type="text"
                {...register("Price", { required: true })}
                className="input"
                placeholder="Price"
              />
              {errors.Price?.type === "required" && (
                <p className="text-red-500">Price is required</p>
              )}

              <button className="btn btn-neutral mt-4">Submit</button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
