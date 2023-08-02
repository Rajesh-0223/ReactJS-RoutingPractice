// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <p className="logo-heading">Wave</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
