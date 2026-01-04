import React from 'react';
import { Link } from 'react-router';

const Slider1 = ({book}) => {
   if(!book) return null 
    return (
        <div className='flex justify-center gap-48 items-center bg-[#D5ECDE] bg-cover bg-no-repeat'>
            <div className='space-y-4'>
        <h1 className='text-black font-extrabold text-5xl'>{book.name}</h1>
               <p>{book.shortDescription}</p>
               <p>Save up to 15% on new releases.</p>
               <Link to={'/allBooks'} className='btn btn-primary'>Discover now </Link>
            </div>
            <div>
                <img className='w-80 p-7' src={book.image} alt={book.name} />
            </div>
        </div>
    );
};

export default Slider1;