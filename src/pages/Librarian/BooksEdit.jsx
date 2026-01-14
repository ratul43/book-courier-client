import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useImage from "../../hooks/useImage";
import Swal from "sweetalert2";

const BooksEdit = () => {
  const axiosSecure = useAxiosSecure();
  const [bookData, setBookData] = useState({});
  const { id } = useParams();

  const uploadImage = useImage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axiosSecure.get(`/allBooks/${id}`).then((res) => {
      setBookData(res.data);

      reset({
        bookName: res.data.name,
        authorName: res.data.author,
        price: res.data.price,
        description: res.data.description,
        publishStatus: res.data.publishStatus,
      });
    });
  }, [axiosSecure, id, reset]);

  // console.log(bookData);

  const handleUpdatedData = async (data) => {
    let imageURL = undefined;

    // 1️⃣ Upload image ONLY if a new file is selected
    if (data.Image && data.Image.length > 0) {
      imageURL = await uploadImage(data);
    }

    // 2️⃣ Build update object
    const updatedBook = {
      name: data.bookName,
      author: data.authorName,
      price: data.price,
      description: data.description,
      publishStatus: data.publishStatus,
      ...(imageURL && { image: imageURL }), // conditional property
    };

    // 3️⃣ Send update
    const res = await axiosSecure.patch(
      `/librarian/bookUpdate/${id}`,
      updatedBook
    );

    if (res.data?.modifiedCount > 0) {
      setBookData((prev) => ({
        ...prev,
        ...updatedBook,
      }));
    }

    reset({
      bookName: updatedBook.name,
      authorName: updatedBook.author,
      price: updatedBook.price,
      description: updatedBook.description,
      publishStatus: updatedBook.publishStatus,
    });

    Swal.fire({
      title: "Updated",
      text: "Book data has been updated",
      showConfirmButton: false,
      icon: "success",
      timer: 1500,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Book</h1>
        <p className="text-gray-500">
          Update book details or unpublish the book
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Book Preview */}
        <div className="card bg-base-100 shadow-lg p-6 text-center">
          <img
            src={bookData.image}
            alt="Book Cover"
            className="w-40 mx-auto mb-4 rounded"
          />

          <h2 className="font-semibold text-lg">{bookData.name}</h2>

          <p className="text-sm text-gray-500 mb-4">by {bookData.author}</p>

          {/* Publish Toggle */}
          <div className="form-control">
            <label className="label justify-between">
              <span className="label-text font-medium">
                {bookData.publishStatus}
              </span>
            </label>
          </div>
        </div>

        {/* Edit Form */}
        <div className="md:col-span-2 card bg-base-100 shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Book Information</h3>

          <form
            onSubmit={handleSubmit(handleUpdatedData)}
            className="space-y-4"
          >
            <div>
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("bookName", { required: true })}
              />
              {errors.bookName?.type === "required" && (
                <p className="text-red-500">Book name is required</p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("authorName", { required: true })}
              />
              {errors.authorName?.type === "required" && (
                <p className="text-red-500">Author name is required</p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Price ($)</span>
              </label>
              <input
                type="digit"
                className="input input-bordered w-full"
                {...register("price")}
              />
              {errors.price?.type === "required" && (
                <p className="text-red-500">Book price is required</p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                defaultValue={bookData.description}
                {...register("description", { required: true })}
              ></textarea>
              {errors.bookName?.type === "required" && (
                <p className="text-red-500"> Book description is required</p>
              )}
            </div>

            <div>
              <label className="label font-semibold">Status</label>
              <select
                {...register(
                  "publishStatus"
                  //  { required: true }
                )}
                className="select w-full"
              >
                <option disabled>Select an option</option>
                <option value="published">Published</option>
                <option value="unpublished">Unpublished</option>
              </select>
              {errors.Status?.type === "required" && (
                <p className="text-red-500">Status is required</p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Cover Image </span>
              </label>
              <input
                type="file"
                className="file-input input-bordered w-full"
                {...register("Image")}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button className="btn btn-primary">Save Changes</button>
              <Link
                to={`/dashboard/librarian/added-books`}
                className="btn btn-outline"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooksEdit;
