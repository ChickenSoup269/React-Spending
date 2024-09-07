//  Navbar
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <ul>
          <li>
            <a href='/dashboard'>Dashboard</a>
          </li>
        </ul>
      </div>
      <div className='navbar-center'>
        <input type='text' placeholder='Search...' className='search-input' />
      </div>
      <div className='navbar-right'>
        <button className='login-btn'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
