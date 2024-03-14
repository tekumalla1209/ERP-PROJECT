import React from 'react';
import './OrdersView.css';

function OrdersView() {
  return (
    <main className='main-container'>
      <div className="header">
        <h2>Orders Management</h2>
      </div>
      <div className="orders-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500865423</td>
              <td>Dhoni MS</td>
              <td>2024-03-01</td>
              <td>Processing</td>
              
            </tr>
            <tr>
              <td>500865428</td>
              <td>Virat</td>
              <td>2024-03-05</td>
              <td>Shipped</td>
              
            </tr>
            {/* Additional rows will be dynamically generated here */}
          </tbody>
        </table>
      </div>
      <div className="footer">
        {/* Footer content */}
      </div>
    </main>
  )
}

export default OrdersView;
