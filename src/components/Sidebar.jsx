import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'

function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to="/dashboard">
            <i className="fa fa-sliders"></i>
            <span className="nav-text">Dashboard</span>
          </NavLink>

        </li>
        <li>
          <NavLink to="/profile">
            <i className="fa fa-user"></i>
            <span className="nav-text">Profile</span>
          </NavLink>
        </li>
      </ul>

      <ul className="logout">
        <li onClick={handleLogout} style={{ cursor: "pointer" }}>
          <a>
            <i className="fa fa-power-off"></i>
            <span className="nav-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar