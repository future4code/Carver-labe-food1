import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {
 const [isLoading, setIsLoading] = useState(true);
 const [cart, setCart] = useState([])
 const [restaurant, setRestaurant] = useState({})
 const [categorys, setCategorys] = useState([])

 const states = { cart, isLoading, restaurant, categorys }
 const setters = { setIsLoading, setCart, setRestaurant, setCategorys }
 const requests = {}
 console.log(cart)
 return (
  <GlobalContext.Provider value={{ states, setters, requests }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;