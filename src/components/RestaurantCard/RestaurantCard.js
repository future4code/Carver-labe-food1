import React from 'react';
import Typography from '@mui/material/Typography';
import {ImageContainer, RestaurantContainer, MainContainer, DescriptionContainer } from './styled'

export default function RestaurantCard(props) {

 const { name, shipping, deliveryTime, logoUrl } = props.restaurant

  return (
    <MainContainer>
      <RestaurantContainer>
        <ImageContainer
          image={logoUrl}
          title={name}
        />
        <DescriptionContainer>
          <Typography gutterBottom variant="body2" component="p">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {deliveryTime} min
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Frete {shipping},00
        </Typography>
        </DescriptionContainer>
      </RestaurantContainer>
    </MainContainer>
  );
}
