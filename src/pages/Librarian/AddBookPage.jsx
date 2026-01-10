import React from "react";
import { useForm } from "react-hook-form";
import useImage from "../../hooks/useImage";

const AddBookPage = () => {
    // const image = useImage()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const handleAddBook = (data)=> {
    console.log(data)
  }




  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <fieldset className="fieldset">
            <form onSubmit={handleSubmit(handleAddBook)}>
            <label className="label">Book Name</label>
            <input
              type="text"
              {...register("BookName", {required: true})}
              className="input"
              placeholder="Book Name"
            />
  {errors.BookName?.type === 'required' && (<p className="text-red-500">Book name is required</p>)}
            <label className="label">Image</label>
            <input type="file" {...register("Image", {required: true})} className="file-input" />
  {errors.Image?.type === 'required' && (<p className="text-red-500">Image is required</p>)}

            <label className="label">Status</label>
            <select
              
              {...register("Status",{ required: true})}
              className="select"
            >
              <option></option>
              <option>Published</option>
              <option>Unpublished</option>
            </select>
              {errors.Status?.type === 'required' && (<p className="text-red-500">Status is required</p>)}

            <label className="label">Author</label>
            <input type="text" 
            {...register("Author", {required: true})}
            className="input" placeholder="Author" />
      {errors.Author?.type === 'required' && (<p className="text-red-500">Author name is required</p>)}


            {/* status dropdown  */}
            <label className="label">Price</label>
            <input type="text"
            {...register("Price", {required: true})}
            className="input" placeholder="Price" />
              {errors.Price?.type === 'required' && (<p className="text-red-500">Price is required</p>)}


            <button className="btn btn-neutral mt-4">Submit</button>  
            </form>
           
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
