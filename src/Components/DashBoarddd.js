import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArchiveFill, BsBagFill, BsBorderAll } from 'react-icons/bs';

function Dashboard({ productCount, orderCount }) {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>
            <div className='main-cards'>
                <div className='card'>
                    <Link to="/products" className='card-inner'>
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </Link>
                    <h1>{productCount}</h1>
                </div>
                <div className='card'>
                    <Link to="/orders" className='card-inner'>
                        <h3>ORDERSVIEW</h3>
                        <BsBagFill className='card_icon' />
                    </Link>
                    <h1>{orderCount}</h1>
                </div>
                <Link to="/calendar" className='card'>
                    <div className='card-inner'>
                        <h3>CALENDARVIEW</h3>
                        <BsBorderAll className='card_icon' />
                    </div>
                    <h1></h1>
                </Link>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                    </div>
                    <h1>0</h1>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
