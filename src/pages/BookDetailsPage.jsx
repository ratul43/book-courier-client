import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BookDetailsPage = () => {
  const { id } = useParams();

  const orderModalRef = useRef();
  const [book, setBook] = useState([]);

  const axiosSecure = useAxiosSecure();

  const openOrderModal = (order) => {
    orderModalRef.current.showModal();
  };

  useEffect(() => {
    axiosSecure.get(`/allBooks/${id}`).then((data) => setBook(data.data));
  }, [axiosSecure, id]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Book Image */}
          <div className="flex justify-center">
            <img
              src={book.image}
              alt={book.name}
              className="w-80 rounded-lg shadow-xl"
            />
          </div>

          {/* Right: Book Info */}
          <div className="space-y-5">
            <h1 className="text-4xl font-bold">{book.name}</h1>

            <p className="text-lg text-gray-600">
              by <span className="font-semibold">{book.author}</span>
            </p>

            <p className="text-gray-700 leading-relaxed">{book.description}</p>

            <div className="text-2xl font-bold text-primary">${book.price}</div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => openOrderModal()}
                className="btn btn-primary px-8"
              >
                Order Now
              </button>

              <button className="btn btn-outline px-8">Add to Wishlist</button>

              <dialog
                ref={orderModalRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <p className="py-6 text-center text-xl font-bold">
                    Fill up this form for order procedure
                  </p>
                  {/* form card  */}
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">
                      <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                          type="text"
                          className="input"
                          placeholder="Name"
                        />

                        <label className="label">Email</label>
                        <input
                          type="email"
                          className="input"
                          placeholder="Email"
                        />
                        <label className="label">Phone</label>
                        <input
                          type="text"
                          className="input"
                          placeholder="Phone"
                        />
                        <label className="label">Address</label>
                        <input
                          type="text"
                          className="input"
                          placeholder="Address"
                        />

                        <button className="btn btn-neutral mt-4">
                          Place Order
                        </button>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

    </div>
  );
};

export default BookDetailsPage;
