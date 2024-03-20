// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header">
    <div className="logoContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="headerLogo"
        alt="wave"
      />
      <h1 className="logoTitle">Wave</h1>
    </div>
    <ul className="tabItemsContainer">
      <li className="eachTabItems">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="eachTabItems">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="eachTabItems">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
