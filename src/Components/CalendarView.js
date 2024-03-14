import React, { useState } from 'react';
import './CalendarView.css';

const orders = [
  { id: 1, date: '2024-03-01', customerName: 'Dhoni MS', status: 'Processing' },
  { id: 2, date: '2024-03-02', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 3, date: '2024-03-03', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 4, date: '2024-03-04', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 5, date: '2024-03-05', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 6, date: '2024-03-06', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 7, date: '2024-03-07', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 8, date: '2024-03-08', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 9, date: '2024-03-09', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 10, date: '2024-03-10', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 11, date: '2024-03-12', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 12, date: '2024-03-13', customerName: 'Dhoni MS', status: 'Shipped' },
  { id: 13, date: '2024-03-14', customerName: 'Dhoni MS', status: 'Shipped' },
  // Add more orders as needed
];

function OrdersCalendarView() {
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date

  // Function to handle clicking on a date
  const handleClickDate = (date) => {
    setSelectedDate(date); // Set selected date when a date is clicked
  };

  // Function to filter orders based on selected date
  const getOrdersForSelectedDate = () => {
    return orders.filter(order => order.date === selectedDate);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Orders Calendar View</h2>
      </div>
      <div className="calendar-container">
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              {[...Array(7)].map((_, index) => (
                <th key={index}>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Generate rows for each week */}
            {[...Array(5)].map((_, weekIndex) => (
              <tr key={weekIndex}>
                {/* Generate cells for each day */}
                {[...Array(7)].map((_, dayIndex) => {
                  const day = weekIndex * 7 + dayIndex + 1;
                  const date = day <= 31 ? day.toString().padStart(2, '0') : null;
                  const dateString = date ? `2024-03-${date}` : null;
                  return (
                    <td key={dayIndex} onClick={() => handleClickDate(dateString)}>
                      {date && <div>{date}</div>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer">
        {/* Footer content */}
      </div>

      {/* Display pop-up with orders for selected date */}
      {selectedDate && (
        <div className="popup">
          <h3>Orders for {selectedDate}</h3>
          <ul>
            {getOrdersForSelectedDate().map(order => (
              <li key={order.id}>
                {order.customerName} - {order.status}
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedDate(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default OrdersCalendarView;
