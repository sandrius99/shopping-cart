import React from 'react';
import  {  useEffect } from "react";
import cartImage from '../assets/shopping-cart.png'
import '../styles/Cart.css'

export const Cart = ({cart}) => {
    useEffect(() => {
        const cartImg = document.querySelector('.cartImg');
        const cartMenu = document.querySelector('.cartMenu');
        const overlay = document.querySelector('.overlay');
        overlay.addEventListener('click', () => {
            overlay.classList.remove('overlayShow');
            cartMenu.classList.remove('showCart'); 
            
        })
        cartImg.addEventListener('click', () => {   
            cartMenu.classList.add('showCart'); 
            overlay.classList.add('overlayShow');
        })
        
    },[])
  return (
    <div className="cart">
        <img src={cartImage} className="cartImg"></img>
        <div className="cartMenu">
            <span className="cartTitle">Your Shopping Cart</span>
            {cart.map(product => {
                return <div className="cartItem">
                    <img src={product.image} className="cartItemImg"></img>
                    <div className="cartItemDetails">
                        <span className="cartItemTitle">{product.name}</span>
                        <span>{product.quantity}</span>
                        <span>{product.price * product.quantity}€</span>
                    </div>
                </div>
            })
            
            }
            
        </div>
       
        </div>
  )
}
