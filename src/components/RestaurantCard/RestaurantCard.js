import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ImageContainer, RestaurantContainer, MainContainer, DescriptionContainer } from './styled'

export default function RestaurantCard() {


  return (
    <MainContainer>
      <RestaurantContainer>
        <ImageContainer
          image="https://picsum.photos/id/239/200/200"
          title="Habib's"
        />
        <DescriptionContainer>
          <Typography gutterBottom variant="body2" component="p">
            Habib's
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            50-60 min
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Frete 6,00
        </Typography>
        </DescriptionContainer>
      </RestaurantContainer>
    </MainContainer>
  );
}
