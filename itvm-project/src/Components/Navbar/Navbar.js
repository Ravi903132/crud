import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">{props.name}</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="#">Page 1</Link></li>
      <li><Link to="#">Page 2</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
<Outlet />
    </div>
  )
}

export default Navbar
