import React from 'react'
import 
{ BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillCircleFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <span className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Products
                </a>
            </li>
            

            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Income
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Help
                </a>
            </li>
        
        </ul>
    </aside>
  )
}

export default Sidebar