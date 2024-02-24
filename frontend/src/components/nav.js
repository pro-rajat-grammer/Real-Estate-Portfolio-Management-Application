import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user")

  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div className='nav'>
      {auth ?
        <ul>
          <li><Link to="/">Product</Link></li>
          <li><Link to="/add">add Product</Link></li>
          <li><Link to="/Profile">My Profile</Link></li>
          <li><Link onClick={logout} to="/login">Logout ({JSON.parse(auth).name})</Link></li>  </ul> :
        <ul>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/signup">signup</Link></li>
        </ul>
      }
    </div>
  )
}
export default Nav
