import React from 'react';
import  {  useEffect, useRef  } from "react";
import cartImage from '../assets/shopping-cart.png'
import '../styles/Cart.css'

export const Cart = ({cart}) => {
    let itemsInCart = useRef(0);
   
    const countItemsInCart = () => {
        if(cart.length === 0 ) return 0;
        let itemsInCart = 0;
        cart.forEach(item => itemsInCart += item.quantity)
        return itemsInCart;
    }
    itemsInCart.current = countItemsInCart();
    useEffect(() => {
        const cartImg = document.querySelector('.cartImg');
        const cartMenu = document.querySelector('.cartMenu');
        const overlay = document.querySelector('.overlay');
        itemsInCart.current = countItemsInCart();
        console.log(itemsInCart.current)
           
        overlay.addEventListener('click', () => {
            overlay.classList.remove('overlayShow');
            cartMenu.classList.remove('showCart'); 
            
        })
        cartImg.addEventListener('click', () => {   
            cartMenu.classList.add('showCart'); 
            overlay.classList.add('overlayShow');
        })
        
    })
  return (
    <div className="cart">
        <img src={cartImage} className="cartImg"></img>
        {itemsInCart.current === 0 ? null : <div className='itemsInCart'>{itemsInCart.current}</div>}
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
            <button className="orderBtn cartBtn">Order</button>
            <button className="cancelBtn cartBtn">Cancel</button>

            
        </div>
       
        </div>
  )
}
