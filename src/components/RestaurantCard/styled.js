import styled from 'styled-components'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

export const ImageContainer = styled(CardMedia)`
    width: 328px;
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

