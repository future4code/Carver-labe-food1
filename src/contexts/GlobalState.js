import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {
 const [isLoading, setIsLoading] = useState(true);
 const [cart, setCart] = useState([
  {
  "id": "3vcYYSOEf8dKeTPd7vHe",
  "category": "Pastel",
  "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
  "price": 3,
  "name": "Pastel",
  "description": "Pastel autêntico, feito na hora!",
  quantity: 1
},
{
  "id": "5omTFSOBYiTqeiDwhiBx",
  "category": "Salgado",
  "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
  "name": "Bibsfiha queijo",
  "price": 1,
  "description": "Esfiha deliciosa, receita secreta do Habibs.",
  quantity: 1
},
{
  "id": "5qVBu990QDEcBPOzitMy",
  "price": 5.5,
  "description": "Kibe árabe de verdade",
  "category": "Salgado",
  "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
  "name": "Kibe",
  quantity: 1
},
{
  "id": "6ZNrnQB0CgCZHf31xCRu",
  "price": 22.9,
  "category": "Lanche",
  "description": "Da Arábia para o mundo!",
  "name": "Beirute",
  "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg",
  quantity: 1
},
])

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