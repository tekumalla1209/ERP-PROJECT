import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsBagFill, BsBorderAll}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/products">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/orders">
                    <BsBagFill className='icon'/> OrdersView
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="calendar">
                    <BsBorderAll className='icon'/> CalendarView
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar