import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import phonesArray from "../assets/phones.json"
import "../styles/Shop.css"


export const Shop = ({phones, addProductToCart}) => {
    
    let navigate = useNavigate();

  return (
    <div>
        <div className="grid">
            {phones.map(phone => {          
                const routeChange = () => {
                  let path = `${phone.id}`;
                  navigate(path);
                }
                return <div className="phone" >
                    <img className="phoneImg" src={phone.image} onClick={routeChange}></img>
                    <span >{phone.name}</span>
                    <span>{phone.price}€</span>
                    <button className="addToCartBtn" onClick={() => addProductToCart(phone.id)}>Add to cart</button>
                </div>
            })}
        </div>
    </div>
  )
}
