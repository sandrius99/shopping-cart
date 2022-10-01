import {  Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.css';
import {Layout} from './components/Layout';
import {Homepage} from './components/Homepage';
import {Shop} from './components/Shop';
import {Product} from './components/Product';
import phonesArray from "./assets/phones.json";

function App() {

  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);

  function addProductToCart(productId, quantity = -1){
    
    const product = phones.filter(product => product.id == productId)[0];
    
    if(cart.find(item => item.id === product.id)) {
      const tempCart = cart.map(item => {
        if(product.id === item.id)
        { if(quantity === -1) item.quantity += 1;
           else item.quantity += quantity;
        } 
        return item;
      })
    setCart([...tempCart]);

    }
    else {
      if(quantity === -1) product.quantity = 1;
      else product.quantity = quantity;
    setCart([...cart, product]);
    }
  }
   
    useEffect(() => {
        const getPhones = () => {
            return phonesArray.phones;
        }

        setPhones(getPhones());
    },[])
  return (
    <div >

      <Routes>
      <Route path="/" element={<Layout cart={cart}/>}>
        <Route index element={<Homepage/>}> </Route>
        <Route path="shop" element={<Shop phones={phones} addProductToCart={addProductToCart}/>}></Route>
        <Route path="shop/:productId" element={<Product phones={phones} addProductToCart={addProductToCart}/>}></Route>
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
