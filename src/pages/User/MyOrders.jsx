import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const [orders, setOrders] = useState([]);
  // console.log(orders)
 
  useEffect(()=>{
    if(!user.email) return
    axiosSecure.get(`/orders/user?email=${user.email}`)
    .then((res)=>{
      setOrders(res.data)
    })
  }, [axiosSecure, user])

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
          setOrders((prev) =>
            prev.map((order) =>
              order._id === id ? { ...order, status: "cancelled" } : order
            )
          );
          Swal.fire({
            title: "Cancelled!",
            text: "Your order has been cancelled.",
            icon: "success",
          });
        });
      }
    });
  };

  const handlePayment = async (order) => {
    const paymentGateWayData = {
      customerEmail: order.Email,
      bookName: order?.bookName,
      bookId: order?._id,
      totalCost: order?.totalPrice,
    };
    const res = await axiosSecure.post(
      "/create-checkout-session",
      paymentGateWayData
    );
    console.log(res.data);
    window.location.assign(res.data.url);
  };

  if(orders.length<1){
    return <div>No order data</div>
  }

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
                <th>Payment Status</th>
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
                  <td>
                    <div
                      className={`font-bold ${
                        order?.status === "paid"
                          ? "text-green-500"
                          : order?.status === "shipped"
                          ? "text-accent"
                          : order?.status === "delivered"
                          ? "badge badge-success"
                          : "text-red-500"
                      }`}
                    >
                      {order?.status}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`font-bold badge ${
                        order?.paymentStatus === "paid"
                          ? " badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {order?.paymentStatus}
                    </div>
                  </td>

                  <td>
                    <div className="space-y-2">
                      <button
                        onClick={() => handlePayment(order)}
                        className={`btn ${
                          order?.paymentStatus === "paid" ||
                          order?.status === "cancelled"
                            ? "hidden"
                            : "block"
                        }`}
                      >
                        Pay Now
                      </button>
                      <button
                        onClick={() => handleCancel(order._id)}
                        className={`btn ${
                          order?.status === "cancelled" ||
                          order?.paymentStatus === "paid"
                            ? "hidden"
                            : "block"
                        }`}
                      >
                        Cancel
                      </button>
                    </div>
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
