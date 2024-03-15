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

  // Fetch orders from local storage when component mounts
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
    setLoading(false); // Set loading to false after orders are fetched
  }, []);

  // Map orders to calendar events
  const events = orders.map(order => ({
    id: order.id,
    title: order.customerName, // Assuming customerName is the title
    start: new Date(order.start),
    end: new Date(order.end)
  }));

  // If loading, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
      />
    </div>
  );
};

export default Scheduler;
