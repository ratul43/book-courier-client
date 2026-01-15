import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Invoices = () => {
  const [invoices, setInvoices] = useState([])
  const axiosSecure = useAxiosSecure()

  const {user} = useAuth()

  useEffect(()=>{
    if(!user.email) return
    axiosSecure.get(`/payments/user?email=${user.email}`)  
    .then((res)=>{
      setInvoices(res.data);
    })
  }, [axiosSecure, user.email])

if(invoices.length<1){
    return <h1 className="font-bold text-2xl">No invoices available</h1>
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">My Invoices</h1>

      {/* Table Card */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Payment ID</th>
              <th>Book Name</th>
              <th>Amount</th>
              <th>Paid at</th>
              <th>Tracking ID</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            
            {
              invoices.map((invoice, index)=><tr key={index}>
              <td>{index + 1}</td>
              <td className="font-mono">{invoice.transactionId}</td>
              <td>{invoice.parcelName}</td>
              <td className="font-semibold">${invoice.amount}</td>
              <td>{invoice.paidAt}</td>
              <td>{invoice.trackingId}</td>
              <td>
                <span className="badge badge-success">{invoice.paymentStatus}</span>
              </td>
             
            </tr>)
            }

          
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Invoices;
