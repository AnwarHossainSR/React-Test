import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink exact activeClassName="navactive" to="/">Home</NavLink>
            <NavLink exact activeClassName="navactive" to="/about">About</NavLink>
            <NavLink exact activeClassName="navactive" to="/contact">Contact</NavLink>
            <NavLink exact activeClassName="navactive" to="/user/details">Details</NavLink>
        </div>
    )
}

export default Navbar
