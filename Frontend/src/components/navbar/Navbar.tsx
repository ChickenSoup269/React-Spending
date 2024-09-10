//  Navbar
// import { useState } from 'react'
import './navbar.scss'
import routes from '~/routes'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <ul>
          <li>
            <a href={routes.dashboard}> Dashboard</a>
            <a href={routes.dashboard}> Quản lý chi tiêu</a>
            <a href={routes.dashboard}> Hóa đơn</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
