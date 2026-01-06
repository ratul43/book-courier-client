import React from 'react';

const MyOrders = () => {
    return (
        <div>
            My Orders
            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Book Title</th>
        <th>Order Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td className='font-bold text-amber-500'>Pending</td>
        <td className='flex space-x-4'>
            <button className='btn'>Pay Now</button>
            <button className='btn'>Cancel</button>
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MyOrders;