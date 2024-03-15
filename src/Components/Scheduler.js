import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Scheduler.css';

const localizer = momentLocalizer(moment);

const Scheduler = () => {
  // State to store orders
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const largeScreenStyle = {
    height: '100%',
    width: '212%',
    padding: '5%'
  };

  const mobileScreenStyle = {
    height: '100%',
    width: '65%',
    padding: '5%'
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check screen size initially
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);



  // Fetch orders from local storage when component mounts
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
    setLoading(false); // Set loading to false after orders are fetched
  }, []);

  // Map orders to calendar events with custom onClick handlers
  const events = orders.map(order => ({
    id: order.order_id,
    title: order.order_id, // Assuming customerName is the title
    start: new Date(order.start),
    end: new Date(order.end),
    onClick: () => handleEventClick(order.start) // Pass the start date to the click handler
  }));

  // Handle event click to scroll to the day section
  const handleEventClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD'); // Format the date
    const daySection = document.getElementById(formattedDate); // Get the corresponding day section
    if (daySection) {
      daySection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the day section
    }
  };

  // If loading, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        style={isLargeScreen ? largeScreenStyle : mobileScreenStyle}
      />
    </div>

  );
};

export default Scheduler;
