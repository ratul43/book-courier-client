import React from "react";
import { useForm } from "react-hook-form";

const AddBookPage = () => {
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
              {...register("Book Name")}
              className="input"
              placeholder="Book Name"
            />

            <label className="label">Image</label>
            <input type="file" {...register("Image")} className="file-input" />

            <label className="label">Status</label>
            <select
              defaultValue="Status"
              {...register("Status")}
              className="select"
            >
              <option disabled={true}>Status</option>
              <option>Published</option>
              <option>Unpublished</option>
            </select>

            <label className="label">Author</label>
            <input type="text" 
            {...register("Author")}
            className="input" placeholder="Author" />

            {/* status dropdown  */}
            <label className="label">Price</label>
            <input type="text"
            {...register("Price")}
            className="input" placeholder="Price" />

            <button className="btn btn-neutral mt-4">Submit</button>  
            </form>
           
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
