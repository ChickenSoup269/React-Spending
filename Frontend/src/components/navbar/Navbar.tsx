//  Navbar
// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './navbar.scss'

import routes from '~/routes'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <header className='wrapper-navbar'>
      <img src='' alt='Loading...' />
      <nav>
        <ul className='nav__link'>
          <li>
            <a href='#'>Dashboard</a>
          </li>
          <li>
            <a href='#'>Quản lý chi tiêu</a>
          </li>
          <li>
            <a href='#'>Hóa đơn</a>
          </li>
          <li>
            <a href='#'>Tìm kiếm</a>
          </li>
        </ul>
      </nav>
      <div className='search-navbar'>
        <input type='text' placeholder='Tìm kiếm ...' />
        {/* <p className='icon-delete'>
          <FontAwesomeIcon icon={faX} />
        </p>
        <p className='icon-loading'>
          <FontAwesomeIcon icon={faSearch} />
        </p> */}
        <button className='btn-search-navbar'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <a href='#' className='cta'>
        <button>Login</button>
      </a>
    </header>
  )
}

export default Navbar
