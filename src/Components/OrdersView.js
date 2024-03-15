import React, { useEffect, useState } from 'react';
import './OrdersView.css';

const OrdersView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    let generatedOrders = [];
    for (let i = 0; i < 20; i++) {
      var today = new Date();
      today.setHours(17, 0, 0, 0);
      var today8 = new Date();
      today8.setHours(20, 0, 0, 0);
      let currentDay = today.getDate();

      today.setDate(currentDay + i);
      let currentDay2 = today8.getDate();

      today8.setDate(currentDay2 + i);
      var newOrder = {
        id: i + 1,
        customerName: `Order - ${i + 1}`,
        orderDate: formatDate(today),
        start: today,
        end: today8,
        status: i % 2 === 0 ? 'Processing' : 'Shipped'
      };
      generatedOrders.push(newOrder);
    }

    localStorage.setItem('orders', JSON.stringify(generatedOrders));
    setOrders(generatedOrders);
  }, []);

  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer">
        {/* Footer content */}
      </div>
    </main>
  );
};

export default OrdersView;
