import React from "react";
import { DetailContainer, Img, ImgContainer } from "./styled";
import Typography from '@mui/material/Typography';

export default function RestaurantDetail({ restaurant }) {
 return (
  <DetailContainer>
   <ImgContainer>
    <Img src={restaurant.logoUrl}></Img>
   </ImgContainer>
   <Typography>{restaurant.name}</Typography>
   <Typography>{restaurant.category}</Typography>
   <Typography>{`${restaurant.deliveryTime}-${restaurant.deliveryTime - (10)} min`}</Typography>
   <Typography>{`Frete: R$${restaurant.shipping},00`}</Typography>
   <Typography>{restaurant.address}</Typography>
  </DetailContainer>
 )
}