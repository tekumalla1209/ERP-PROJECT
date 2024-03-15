import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Scheduler.css';

const localizer = momentLocalizer(moment);

const Scheduler = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setIsLargeScreen(window.innerWidth > 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); 
  }, []);


  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
    setLoading(false); 
  }, []);

  
  const events = orders.map(order => ({
    id: order.order_id,
    title: order.order_id, 
    start: new Date(order.start),
    end: new Date(order.end),
    onClick: () => handleEventClick(order.start) 
  }));

  const handleEventClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const daySection = document.getElementById(formattedDate); 
    if (daySection) {
      daySection.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

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
