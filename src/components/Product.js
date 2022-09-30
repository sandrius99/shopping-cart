import React from 'react'
import { useState, useEffect } from "react";
import {  useParams } from 'react-router-dom';
import '../styles/Product.css'

export const Product = ({phones, addProductToCart}) => {
    let { productId } = useParams();
    let product = phones.filter(phone => phone.id == productId)[0];
    
    useEffect(() => {
        const addToCartBtn = document.getElementById('addToCartBtn2');
        const productAmount = document.querySelector('.productAmount');
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(productAmount.value);
            if(typeof(quantity) == 'number' && quantity > 0 ){
                addProductToCart(product.id, quantity);
            }
        })
    },[])
    
  return (
    <div className="product">
        <img src={product.image} className="productImg"></img>
        <div className="productInfo">
            <span className='productTitle'>{product.name}</span>
            <p>A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls, today’s mobile phones do a lot more, accommodating web browsers, games, cameras, video players and navigational systems.<br/>

Also, while mobile phones used to be mainly known as “cell phones” or cellular phones, today’s mobile phones are more commonly called “smartphones” because of all of the extra voice and data services that they offer.
            </p>
            <input className="productAmount" type="number" min="0" max="20" ></input>
            <button className="addToCartBtn" id="addToCartBtn2">Add to cart</button>
        </div>
    </div>
  )
}
