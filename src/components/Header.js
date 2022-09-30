import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Header.css'

export const Header = () => {
  return (
    <header>
        <span className='headerText'>Pick a Phone</span> 
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>

        </nav>
    </header>
  )
}

