import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CardProduct({ product }) {

 return (
  <Card sx={{ width: 305, display: 'flex' }}>
   <CardMedia
    component="img"
    sx={{ width: 100 }}
    image={product.photoUrl}
    alt={product.name}
   />
   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
     <Typography>{product.name}</Typography>
     <Typography>{product.description}</Typography>
     <Typography>{`R$${product.price.toFixed(2)}`}</Typography>
    </CardContent>
    <Button>Adicionar</Button>
   </Box>
  </Card>
 )
}