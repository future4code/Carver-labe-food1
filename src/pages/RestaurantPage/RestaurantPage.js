import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from "../../contexts/GlobalStateContext";
import { getRestaurantDetail } from "../../services/restaurants"
import LoadingCard from "../../components/Loading/LoadingCard";
import { goToHomePage } from "../../routes/coordinator";
import { BodyContainer, ProductsContainer, Line } from "./styled";
import RestaurantDetail from "./RestaurantsDetail";
import CardProduct from "../../components/CardProduct/CardProduct";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useProtectedPage from "../../hooks/useProtectedPage"

export default function RestaurantPage() {
 useProtectedPage()
 const history = useNavigate()
 const params = useParams()
 const { states, setters, requests } = useContext(GlobalContext);
 const token = localStorage.getItem('token')

 const putProductInCart = (product) => {
  
  let quant
  let newProduct
  let newArray

  const index = states.cart.findIndex((item) => item.id === product.id)
  if (index !== -1) { 
   quant = states.cart[index].quantity + 1
   newProduct = { ...states.cart[index], quantity: quant }
   newArray = [...states.cart, newProduct]
   newArray.splice(index, 1)
   setters.setCart(newArray)
   localStorage.setItem("cart", JSON.stringify(newArray))
  } else {
   newProduct = { ...product, quantity: 1 }
   newArray = [...states.cart, newProduct]
   setters.setCart(newArray)
   localStorage.setItem("cart", JSON.stringify(newArray))
  }
  alert("produto adicionado no carrinho")
  setters.setIdRestaurant(params.id)
 }


 const getCategorys = (array) => {
  let arr = [];
  array.products.map((prod) => {
   if (!arr.includes(prod.category)) {
    arr.push(prod.category)
   }
  })
  return arr
 }

 const filterCards = (array, param) => {
  return (array.filter((prod) => {
   return (prod.category === param)
  })
   .map((prod) => {
    return (
     <CardProduct
      key={prod.id}
      product={prod}
      functionButton={putProductInCart}
     />
    )
   }))
 }

 useEffect(() => {
  getRestaurantDetail(
   params.id,
   setters.setRestaurant,
   token, getCategorys,
   setters.setCategorys,
   setters.setIsLoading
  )
 }, [])

 return (
  <BodyContainer>
   <AppBar color="secondary">
    <Toolbar>
     <ArrowBackIosNewIcon
      size="large"
      sx={{ color: "black", mr: 2 }}
      onClick={()=>goToHomePage(history)}
     />
     <Typography
      sx={{ position: "relative", left: "-20px", margin: "0 auto" }}
      color="black"
      component="div"
      variant="h6"
     >Restaurante</Typography>
    </Toolbar>
   </AppBar>
   {states.restaurant && (
    <RestaurantDetail
     isLoading={states.isLoading}
     restaurant={states.restaurant}
    />
   )}
   {states.isLoading ? <LoadingCard /> : states.categorys.map((cat) => {
    return (
     <ProductsContainer key={cat}>
      <Typography sx={{ mb: 1, mr: 30 }} variant="h7">{cat}</Typography>
      <Line></Line>
      {filterCards(states.restaurant.products, cat)}
     </ProductsContainer>
    )
   })}
  </BodyContainer>
 )
}