import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ backgroundColor: 'lightgrey', padding: '20px 50px', display: 'flex', justifyContent: 'flex-end' }}>
      <NavLink to='/login' style={{ marginRight: 50 }}>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </div>
  )
}

export default Navbar