import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Invoices = () => {
  const [invoices, setInvoices] = useState([])
  const axiosSecure = useAxiosSecure()

  useEffect(()=>{
    axiosSecure.get("/payments")  
    .then((res)=>{
      setInvoices(res.data);
    })
  }, [axiosSecure])

  console.log(invoices)




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
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            
            {
              invoices.map((invoice, index)=><tr>
              <td>{index + 1}</td>
              <td className="font-mono">{invoice.transactionId}</td>
              <td>{invoice.parcelName}</td>
              <td className="font-semibold">${invoice.amount}</td>
              <td>{invoice.paidAt}</td>
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
