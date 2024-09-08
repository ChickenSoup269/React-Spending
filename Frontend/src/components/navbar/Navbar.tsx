//  Navbar
import './navbar.scss'
import routes from '~/routes'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <ul>
          <li>
            <a href={routes.dashboard}>Dashboard</a>
          </li>
        </ul>
      </div>
      <div className='navbar-center'>
        <input type='text' placeholder='Search...' className='search-input' />
      </div>
      <div className='navbar-right'>
        <button className='signup-btn'>Sign up - đăng ký</button>
        <button className='login-btn'>Login - đăng nhập</button>
        <div className='icon-dropdown'>Icon mũi tên</div>
      </div>
    </nav>
  )
}

export default Navbar
