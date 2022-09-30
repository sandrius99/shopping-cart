import React from 'react'
import '../styles/Homepage.css';
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  
let navigate = useNavigate();
const routeChange = () => {
  let path = 'shop';
  navigate(path);
}

  return (
    <main>
        {/* <img src={phoneCollection}></img> */}
        <button id='pickPhoneBtn' onClick={routeChange}>Pick a phone!</button>
    </main>
  )
}
