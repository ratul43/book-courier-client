import React, { useEffect, useState } from "react";
import BooksCard from "./../elements/BooksCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllBooksPage = () => {

    const [sort, setSort] = useState("")
    const [order, setOrder] = useState("")
    // const axiosSecure = useAxiosSecure()

    // useEffect(()=>{
    //     axiosSecure.get(`/books/sorting?sort=${sort}&order=${order}`)
    // }, [axiosSecure, sort, order])

    const handleSelect = (e) => {
        const sortText = e.target.value
        setSort(sortText.split("-")[0])
        setOrder(sortText.split("-")[1])
    }
  return (
    <div className="space-y-4 mt-4">
      <div className="flex justify-between ">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>

        {/* sorting book  */}

        <select onChange={handleSelect} defaultValue="Pick an option" className="select">
          <option>Pick an option</option>
          <option value="price-desc">Price: High - Low</option>
          <option value="price-asc">Price: Low - High </option>
        </select>
      </div>
      <BooksCard sort={sort} order={order}></BooksCard>
    </div>
  );
};

export default AllBooksPage;
