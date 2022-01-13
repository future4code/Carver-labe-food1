import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {
 const [isLoading, setIsLoading] = useState(true);
 const [cart, setCart] = useState([])
 const [ profile, setProfile ] = useState({})

 const states = { cart, isLoading, profile }
 const setters = { setCart, setIsLoading, setProfile }
 const requests = {}

 return (
  <GlobalContext.Provider value={{ states, setters, requests }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;