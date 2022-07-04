import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarDesign = () => {
  return (
    <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/blogs'>Blogs</NavLink>
        </li>
        <li>
            <NavLink to='/posts'>Posts</NavLink>
        </li>
    </>
  )
}

export default NavbarDesign