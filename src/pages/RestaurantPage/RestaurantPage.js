import React, { useState, useEffect } from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/url";
import { BodyContainer, ProductsContainer } from "./styled";
import RestaurantDetail from "./RestaurantsDetail";
import CardProduct from "../../components/CardProduct/CardProduct";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function RestaurantPage() {
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZQeEdXbXdoTndEWG9tNXcwTjJWIiwibmFtZSI6IlJlbmFuIExvcHJlc3RpIExhZ2UiLCJlbWFpbCI6InJlbmFuQGdtYWlsLmNvbSIsImNwZiI6IjQ2NC42OTYuNDQ4LTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0MTkxNTk2OH0.CrRdwYsmSSZtqA8xpt3NuIoLPMPEcB9bhqN7eOaT2ao"
 const [restaurant, setRestaurant] = useState({})

 const getRestaurantDetail = () => {
  axios.get(`${BASE_URL}restaurants/1`, {
   headers: {
    auth: token,
   }
  })
   .then((res) => {
    setRestaurant(res.data.restaurant)
   })
   .catch((err) => {
    console.log(err.response)
   })
 }

 useEffect(() => {
  getRestaurantDetail()
 }, [])

 return (
  <BodyContainer>
   <AppBar color="secondary">
    <Toolbar>
     <ArrowBackIosNewIcon
      size="large"
      color="black"
      sx={{ mr: 1 }}
     />
     <Typography
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
    {restaurant && restaurant.products && (restaurant.products.map((product) => {
     return (
      <CardProduct
       key={product.id}
       product={product}
      />
     )
    }))}
   </ProductsContainer>
  </BodyContainer>
 )
}