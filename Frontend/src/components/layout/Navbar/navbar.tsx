//  Navbar
// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faCaretUp, faSearch, faSpinner, faX } from '@fortawesome/free-solid-svg-icons'

import './navbar.scss'
import routes from '~/routes'

const Navbar = () => {
  return (
    <header className='wrapper-navbar'>
      {/* logo & nav */}
      <img src='' alt='Loading...' />
      <nav>
        <ul className='nav__link'>
          <li>
            <NavLink to={routes.home}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={''}>Quản lý chi tiêu</NavLink>
          </li>
          <li>
            <NavLink to={''}>Hóa đơn</NavLink>
          </li>
        </ul>
      </nav>

      {/* search bar */}
      <div className='search-navbar'>
        <input type='text' placeholder='Tìm kiếm ...' />

        <div className='icon-search-bar'>
          <p className='icon-delete'>
            <FontAwesomeIcon icon={faX} />
          </p>
          <p className='icon-loading'>
            <FontAwesomeIcon icon={faSpinner} />
          </p>
        </div>

        <button className='btn-search-navbar'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* button login - icon down info */}
      <div className='btn-user'>
        <NavLink to={''}>
          <button className='btn-login'>Login</button>
        </NavLink>
        <p className='icon-arrow-down'>
          {' '}
          <FontAwesomeIcon icon={faCaretUp} />
        </p>
      </div>
    </header>
  )
}

export default Navbar
