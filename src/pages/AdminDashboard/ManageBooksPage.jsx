import React, { useEffect, useState } from "react";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageBooksPage = () => {
  const [books, setBooks] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/allBooks").then((res) => {
      setBooks(res.data);
    });
  }, [axiosSecure]);

  const handleToggleChange = (id, isChecked) => {
    const newStatus = isChecked ? "published" : "unpublished";

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result)=>{
      if(result.isConfirmed) {
         axiosSecure.patch(`/books/publish/${id}`, {
    publishStatus: newStatus,
  }).then(()=>{
setBooks((prev) =>
      prev.map((book) =>
        book._id === id ? { ...book, publishStatus: newStatus } : book
      )
    );

    Swal.fire({
      title: "Success!",
      text: `Book has been ${newStatus}` ,
      icon: "success"
    });

  })
        
      }
      
    })

    
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Manage Books</h1>
        <p className="text-gray-500">
          Control book visibility and remove books if necessary
        </p>
      </div>

      {/* Books Table */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Title</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-14 h-20 object-contain rounded"
                  />
                </td>
                <td className="font-semibold">{book.name}</td>
                <td>
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked={book.publishStatus === "published"}
                    onChange={(e) =>
                      handleToggleChange(book._id, e.target.checked)
                    }
                  />
                </td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-error btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooksPage;
