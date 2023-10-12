import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "80vh" }}>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
