import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {
 const [isLoading, setIsLoading] = useState(true);
 const [cart, setCart] = useState([])
 const [ profile, setProfile ] = useState({})
 const [restaurant, setRestaurant] = useState({})
 const [idRestaurant, setIdRestaurant] = useState()
 const [categorys, setCategorys] = useState([])

 const states = { cart, isLoading, profile, restaurant, categorys, idRestaurant }
 const setters = { setCart, setIsLoading, setProfile, setRestaurant, setCategorys, setIdRestaurant }

 const requests = {}
 console.log(cart)
 return (
  <GlobalContext.Provider value={{ states, setters, requests }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;