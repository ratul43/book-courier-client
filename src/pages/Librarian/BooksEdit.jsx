import React from "react";

const BooksEdit = () => {
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
            src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg"
            alt="Book Cover"
            className="w-40 mx-auto mb-4 rounded"
          />

          <h2 className="font-semibold text-lg">
            Atomic Habits
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            by James Clear
          </p>

          {/* Publish Toggle */}
          <div className="form-control">
            <label className="label cursor-pointer justify-between">
              <span className="label-text font-medium">
                Published
              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </label>
          </div>
        </div>

        {/* Edit Form */}
        <div className="md:col-span-2 card bg-base-100 shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Book Information
          </h3>

          <form className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue="Atomic Habits"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue="James Clear"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Price ($)</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                defaultValue="14.99"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                defaultValue="Atomic Habits offers a proven framework for improving every day."
              ></textarea>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Cover Image URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button className="btn btn-primary">
                Save Changes
              </button>
              <button className="btn btn-outline">
                Cancel
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default BooksEdit;
