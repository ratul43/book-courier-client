import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import ItemCalc from "./../elements/ItemCalc";
import Swal from "sweetalert2";

const BookDetailsPage = () => {
  const { id } = useParams();
  const orderModalRef = useRef();
  const navigate = useNavigate();

  const [book, setBook] = useState({});
  const [quantity, setQuantity] = useState(1);

  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axiosSecure.get(`/allBooks/${id}`).then((res) => setBook(res.data));
  }, [axiosSecure, id]);

  const handleOrder = (data) => {
    const totalPrice = quantity * book.price;

    const orderRelatedData = {
      Name: data.Name,
      bookId: id,
      Email: data.Email,
      Phone: data.Phone,
      Address: data.Address,
      unitPrice: book.price,
      bookImg: book.image,
      bookName: book.name,
      author: book.author,
      quantity,
      totalPrice,
      orderDate: new Date(),
      status: "pending",
      paymentStatus: "unpaid",
    };

    orderModalRef.current.close();
    Swal.fire({
      title: "Are you sure?",
      text: `You have to pay $${totalPrice}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/orders", orderRelatedData).then(() => {
          Swal.fire({
            title: "Confirmed",
            text: `Your order has been saved. Please go to the order section and pay $${totalPrice}`,
            icon: "success",
          });
          navigate("/dashboard/my-orders");
        });
      }
    });
  };

  const handleWishList = async (book) => {

    const wishListData = {
      Name: book.name,
      bookId: book._id,
      bookImg: book.image,
      bookName: book.name,
      author: book.author,
      price: book.price 
    };
    
    
    await axiosSecure.post("/allBooks/wishlist", wishListData).then((res) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book has been saved to wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid md:grid-cols-2 gap-12">
        <img src={book.image} className="w-80 mx-auto rounded shadow" />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{book.name}</h1>
          <p className="text-gray-600">by {book.author}</p>
          <p>{book.description}</p>
          <p className="text-2xl font-bold">${book.price}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="btn btn-primary px-8"
              onClick={() => orderModalRef.current.showModal()}
            >
              Order Now
            </button>

            <button
              onClick={()=>handleWishList(book)}
              className="btn btn-outline px-8"
            >
              Add to Wishlist
            </button>
          </div>
          <dialog ref={orderModalRef} className="modal">
            <div className="modal-box">
              <p className="py-6 text-center text-xl font-bold">
                {" "}
                Fill up this form for order procedure{" "}
              </p>
              <form onSubmit={handleSubmit(handleOrder)} className="space-y-3">
                <input
                  {...register("Name", { required: true })}
                  className="input w-full"
                  placeholder="Name"
                />
                {errors.Name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
                <input
                  {...register("Email", { required: true })}
                  className="input w-full"
                  placeholder="Email"
                />
                {errors.Email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}

                <input
                  {...register("Phone", { required: true })}
                  className="input w-full"
                  placeholder="Phone"
                />
                {errors.Phone?.type === "required" && (
                  <p className="text-red-500">Phone number is required</p>
                )}

                <input
                  {...register("Address", { required: true })}
                  className="input w-full"
                  placeholder="Address"
                />
                {errors.Name?.type === "required" && (
                  <p className="text-red-500">Address is required</p>
                )}

                {/* Quantity controller */}
                <ItemCalc quantity={quantity} setQuantity={setQuantity} />

                <p className="font-semibold">
                  Total: ${(quantity * book.price).toFixed(2)}
                </p>

                <button className="btn btn-neutral w-full">Place Order</button>
              </form>
              <button
                onClick={() => orderModalRef.current.close()}
                className="btn mt-4"
              >
                Close
              </button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
