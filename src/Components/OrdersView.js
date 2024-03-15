import React, { useEffect, useState } from 'react';
import './OrdersView.css';

const OrdersView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let generatedOrders = [];
    for (let i = 0; i < 20; i++) {
      var today = new Date();
      today.setHours(7, 0, 0, 0);

      var today8 = new Date();
      today8.setHours(10, 0, 0, 0);
      let currentDay = today.getDate();

      today.setDate(currentDay + i);
      let currentDay2 = today8.getDate();

      today8.setDate(currentDay2 + i);
      var newOrder = {
        order_id: `Order_${i + 1}`,
        customerName: `Customer_${i + 1}`,
        orderDate: formatDate(today),
        start: today.setDate(today.getDate() + 3),
        end: today8.setDate(today8.getDate() + 3),
        status: i % 2 === 0 ? 'Processing' : 'Shipped'
      };
      generatedOrders.push(newOrder);
    }

    localStorage.setItem('orders', JSON.stringify(generatedOrders));
    setOrders(generatedOrders);
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter(order => order.order_id !== orderId);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const handleChangeStatus = (orderId) => {
    const updatedOrders = orders.map(order => {
      if (order.order_id === orderId) {
        return {
          ...order,
          status: order.status === 'Processing' ? 'Shipped' : 'Processing'
        };
      }
      return order;
    });
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => handleDelete(order.order_id)}>Delete</button>
                  <button onClick={() => handleChangeStatus(order.order_id)}>Change Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer">
      </div>
    </main>
  );
};

export default OrdersView;
