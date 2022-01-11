import React from "react";
import { BodyContainer, ProductsContainer } from "./styled";
import RestaurantDetail from "./RestaurantsDetail";
import CardProduct from "../../components/CardProduct/CardProduct";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const res = {
 "restaurant": {
  "products": [
   {
    "id": "3vcYYSOEf8dKeTPd7vHe",
    "description": "Pastel autêntico, feito na hora!",
    "name": "Pastel",
    "price": 3,
    "category": "Pastel",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg"
   },
   {
    "id": "5omTFSOBYiTqeiDwhiBx",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
    "category": "Salgado",
    "price": 1,
    "name": "Bibsfiha queijo",
    "description": "Esfiha deliciosa, receita secreta do Habibs."
   },
   {
    "id": "5qVBu990QDEcBPOzitMy",
    "name": "Kibe",
    "category": "Salgado",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
    "price": 5.5,
    "description": "Kibe árabe de verdade"
   },
   {
    "id": "6ZNrnQB0CgCZHf31xCRu",
    "name": "Beirute",
    "category": "Lanche",
    "price": 22.9,
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg",
    "description": "Da Arábia para o mundo!"
   },
   {
    "id": "8CKulpHeAAm1QQqWpReI",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg",
    "description": "Batata frita crocante e sequinha.",
    "category": "Acompanhamento",
    "name": "Batata Frita",
    "price": 9.5
   },
   {
    "id": "KqHR80VJp9my0eBLEHvk",
    "name": "Pizza",
    "price": 31.9,
    "description": "Pizza crocante de diversos sabores",
    "category": "Pizza",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg"
   },
   {
    "id": "XHhajKAtvIH2Dq6F83PX",
    "price": 7.9,
    "description": "Laranja, Acerola ou Maçã",
    "category": "Bebida",
    "name": "Suco",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg"
   },
   {
    "id": "bEj2JorVLWo86iJf7OF9",
    "price": 4,
    "photoUrl": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/f62f7746-4888-4e81-a9b0-93bf5453c51a/202103180149_woHq_s.jpg",
    "description": "Coca cola, Sprite ou Guaraná",
    "category": "Bebida",
    "name": "Refrigerante"
   },
   {
    "id": "fMMfstMTxeos8NWTS4j1",
    "category": "Salgado",
    "description": "Esfiha deliciosa, receita secreta do Habibs.",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907151009_76679579.jpg",
    "name": "Bibsfiha frango",
    "price": 1
   },
   {
    "id": "xhq0QgZXklGSmaBDy6KQ",
    "category": "Salgado",
    "price": 1,
    "name": "Bibsfiha carne",
    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
    "description": "Esfiha deliciosa, receita secreta do Habibs."
   }
  ],
  "id": "1",
  "category": "Árabe",
  "deliveryTime": 60,
  "name": "Habibs",
  "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
  "address": "Rua das Margaridas, 110 - Jardim das Flores",
  "shipping": 6,
  "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de"
 }
}

export default function RestaurantPage() {

 return (
  <BodyContainer>
   <AppBar color="secondary">
    <Toolbar>
     <ArrowBackIosNewIcon
      size="large"
      color="black"
      sx={{ mr: 2 }}
     />
     <Typography
      color="black"
      component="div"
      variant="h6"
     >Restaurante</Typography>
    </Toolbar>
   </AppBar>
   <RestaurantDetail
    restaurant={res.restaurant}
   />
   <ProductsContainer>
    {res.restaurant.products.map((product) => {
     return (
      <CardProduct
       key={product.id}
       product={product}
      />
     )
    })}
   </ProductsContainer>
  </BodyContainer>
 )
}