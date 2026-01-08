import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyOrders = () => {
  const axiosSecure = useAxiosSecure();

  const [orders, setOrders] = useState([]);
  // console.log(orders)

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/orders/cancel/${id}`).then(() => {
          Swal.fire({
            title: "Cancelled!",
            text: "Your order has been cancelled.",
            icon: "success",
          });
        });
      }
    });
  };

  useEffect(() => {
    axiosSecure
      .get(`/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [axiosSecure, handleCancel]);

  return (
    <div>
      <h1 className="font-bold text-2xl text-center">My Orders</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={order?.bookImg}
                      alt={order?.bookName}
                      className="w-14 h-20 object-contain rounded"
                    />
                  </td>
                  <td>{order?.bookName}</td>
                  <td>{order?.quantity}</td>
                  <td>${order?.totalPrice}</td>
                  <td>{order?.orderDate}</td>
                  <td className="font-bold text-amber-500">{order?.status}</td>
                  <td className="space-x-4">
                    <button className={`btn ${order?.status === 'cancelled' || order?.status === 'paid' ? 'hidden' : 'block'}`}>Pay Now</button>
                    <button
                      onClick={() => handleCancel(order._id)}
                    className={`btn ${order?.status === 'cancelled' || order?.status === 'paid' ? 'hidden' : 'block'}`}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
