import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OrdersPage = () => {

  const axiosSecure = useAxiosSecure()
  const [orders, setOrders] = useState([])



  useEffect(()=>{
    axiosSecure.get("/orders")
    .then((res)=>{
      setOrders(res.data)
    })
  }, [axiosSecure])

  // console.log(orders);

  const handleStatusChange = (id, status) =>{
    // console.log(id, statusCurrentValue)
    setOrders(prev => 
      prev.map(order => order._id === id 
        ? {...order, status}
         : order )
    ) 
  }

  const handleUpdate = async (id, status) => {
    await axiosSecure.patch(`/orders/${id}`, {status})
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: `Parcel has been ${status}` ,
  showConfirmButton: false,
  timer: 1500
});
  }

 



  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Book Orders</h1>
        <p className="text-gray-500">
          Manage orders for books you have added
        </p>
      </div>

      {/* Orders Table */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Title</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            
            {orders.map((order, index)=><tr>
              <td>{index + 1}</td>
              <td>
                <img
                  src={order.bookImg}
                  alt={order.bookName}
                  className="w-14 h-20 object-contain rounded"
                />
              </td>
              <td className="font-semibold">{order.bookName}</td>
              <td className="font-mono">{order.trackingId}</td>
              <td>{order.Name}</td>
              <td>${order.totalPrice}</td>
              <td>
                <select className="select select-bordered select-sm w-20"
                value={order.status}
                onChange={(e)=>handleStatusChange(order._id, e.target.value)}
                >
                  <option>pending</option>
                  <option>paid</option>
                  <option>shipped</option>
                  <option>delivered</option>
                </select>
              </td>
              <td>
                <div className="flex gap-2">
                   <button  onClick={()=> handleUpdate(order._id, order.status)}  className="btn btn-accent btn-sm">
                  Update
                </button>
                <button className="btn btn-error btn-sm">
                  Cancel
                </button>
                </div>
               
               
              </td>
            </tr>)}


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default OrdersPage;
