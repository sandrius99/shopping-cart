import React from 'react';
import {Header} from './Header';
import {Outlet} from 'react-router-dom';
import {Footer} from './Footer';
import {Cart} from './Cart'

export const Layout = ({cart}) => {
  return (
    <div className="content">
        <Header/>
        <div className="overlay"></div>
        <Cart cart={cart}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
