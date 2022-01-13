import styled from 'styled-components'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

export const ImageContainer = styled(CardMedia)`
    width: 100%;
    height: 120px;
    margin: 0 0 12px;
    object-fit: contain;
`
export const RestaurantContainer = styled(CardActionArea)`
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
export const MainContainer = styled(Card)`
  width: 360px;
  height: 196px;
  margin: 50px 0 0;
  padding: 8px 16px 0;
`
export const DescriptionContainer = styled(CardContent)`
display: flex;
justify-content: space-around;
`

