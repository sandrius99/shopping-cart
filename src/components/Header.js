import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Header.css'

export const Header = () => {
  return (
    <header>
        <Link to='/'><span className='headerText'>Pick a Phone</span> </Link>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>

        </nav>
    </header>
  )
}

