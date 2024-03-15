import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import OrdersView from './Components/OrdersView';
import Products from './Components/Products';
import Scheduler from './Components/Scheduler';
import Dashboard from './Components/DashBoarddd'; // Update import

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
 

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  // Fetch product count and order count on component mount
  useEffect(() => {
    // Simulate fetching products and orders from backend
    const fetchProducts = async () => {
      try {
        const data = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchOrders = () => {
      try {
        const data = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    fetchOrders();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route exact path='/' element={<Dashboard productCount={products.length} orderCount={orders.length} />} />
          <Route exact path='/DashBoard' element={<Dashboard productCount={products.length} orderCount={orders.length} />} />
          <Route path='/orders' element={<OrdersView />} />
          <Route path='/products' element={<Products />} />
          <Route path='/calendar' element={<Scheduler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
