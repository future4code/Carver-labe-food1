import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalStateContext";
import { getRestaurantDetail } from "../../services/restaurants"
import { BodyContainer, ProductsContainer } from "./styled";
import RestaurantDetail from "./RestaurantsDetail";
import CardProduct from "../../components/CardProduct/CardProduct";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function RestaurantPage() {
 const { states, setters, requests } = useContext(GlobalContext);
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZQeEdXbXdoTndEWG9tNXcwTjJWIiwibmFtZSI6IlJlbmFuIExvcHJlc3RpIExhZ2UiLCJlbWFpbCI6InJlbmFuQGdtYWlsLmNvbSIsImNwZiI6IjQ2NC42OTYuNDQ4LTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0MTkxNTk2OH0.CrRdwYsmSSZtqA8xpt3NuIoLPMPEcB9bhqN7eOaT2ao"
 const [restaurant, setRestaurant] = useState({})
 const [products, setProducts] = useState()
 const [cat, setCat] = useState([])

 const getCategorys = (array, object) => {
  let array1 = []
  return array.reduce(function (acc, obj) {
   let key = obj[object];
   if (!acc[key]) {
    acc[key] = [];
    array1.push(key)
   }
   setCat(array1)
   acc[key].push(obj);
   return acc;
  }, {});
 }

 const renderProducts = () => {
  return (cat && cat.forEach(element => {
   return (<p>{element}</p>)
  }));
 }

 const putProductInCart = (product) => {
  let quant
  let newProduct
  let newArray
  const index = states.cart.findIndex((item) => item.id === product.id)
  if (index !== -1) {
   quant = states.cart[index].quantity + 1
   newProduct = { ...states.cart[index], quantity: quant }
   newArray = [...states.cart, newProduct]
   newArray.splice(index,1)
   setters.setCart(newArray)
  } else {
   newProduct = { ...product, quantity: 1 }
   newArray = [...states.cart, newProduct]
   setters.setCart(newArray)
  }
  localStorage.setItem("cart", JSON.stringify(states.cart))
 }
 console.log(states.cart)
 useEffect(() => {
  getRestaurantDetail("1", setRestaurant, setProducts, getCategorys, token)
 }, [])

 return (
  <BodyContainer>
   <AppBar color="secondary">
    <Toolbar>
     <ArrowBackIosNewIcon
      size="large"
      sx={{ color: "black", mr: 2 }}
     />
     <Typography
      sx={{ position: "relative", left: "-20px", margin: "0 auto" }}
      color="black"
      component="div"
      variant="h6"
     >Restaurante</Typography>
    </Toolbar>
   </AppBar>
   {restaurant && (
    <RestaurantDetail
     restaurant={restaurant}
    />
   )}
   <ProductsContainer>
    {products && products.category && (
     <p>{products[0].category}</p>
    )}
    {products && (restaurant.products.map((product) => {
     return (
      <CardProduct
       key={product.id}
       product={product}
       functionButton={putProductInCart}
      />
     )
    }))}
   </ProductsContainer>
  </BodyContainer>
 )
}