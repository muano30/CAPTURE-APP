import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
  <Link to='/'>Form</Link>
  <Link to='/display'>List</Link>
  </nav>
    </div>
  )
}

export default Navbar