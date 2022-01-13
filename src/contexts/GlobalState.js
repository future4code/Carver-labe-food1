import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {
 const [isLoading, setIsLoading] = useState(true);
 const [cart, setCart] = useState([])

 const states = { cart, isLoading }
 const setters = { setIsLoading, setCart }
 const requests = {}

 return (
  <GlobalContext.Provider value={{ states, setters, requests }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;