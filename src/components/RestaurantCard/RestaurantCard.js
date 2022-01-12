import React from 'react';
import Typography from '@mui/material/Typography';
import {ImageContainer, RestaurantContainer, MainContainer, DescriptionContainer, ShippingContainer } from './styled'

export default function RestaurantCard(props) {

 const { name, shipping, deliveryTime, logoUrl, onClickCard } = props

  return (
    <MainContainer onClick={onClickCard}>
      <RestaurantContainer >
        <ImageContainer
          image={logoUrl}
          title={name}
        />
        <DescriptionContainer>
          <div>
          <Typography gutterBottom variant="body2" component="p">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {deliveryTime} min
          </Typography>
          </div>
          <ShippingContainer>
          <Typography variant="body2" color="textSecondary" component="p">
            Frete {shipping},00
        </Typography>
          </ShippingContainer>
        </DescriptionContainer>
      </RestaurantContainer>
    </MainContainer>
  );
}
