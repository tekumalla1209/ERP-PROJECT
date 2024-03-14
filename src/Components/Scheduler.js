import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Sample orders data
const orders = [
  { id: 1, title: 'Order 1', start: new Date(2024, 2, 15, 10, 0), end: new Date(2024, 2, 15, 12, 0) },
  { id: 2, title: 'Order 2', start: new Date(2024, 2, 16, 13, 0), end: new Date(2024, 2, 16, 15, 0) },
  // Add more orders as needed
];

const Scheduler = () => {
  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={orders}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
      />
    </div>
  );
};

export default Scheduler;
