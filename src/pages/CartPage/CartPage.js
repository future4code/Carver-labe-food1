import React, { useEffect, useState } from "react";
import axios from 'axios'
import { DivAdress, DivHeader, DivMain, DivRestaurant, DivItems, DivItem, DivImage, DivDescription, DivDelivery, DivSubTotal, DivPaymentMethods, ImG} from "./styled";

export default function CartPage() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklzTFl5UjlMNW5zemNHRGQ4bmlKIiwibmFtZSI6IkFuZHLDqSBNYXJxdWVzIiwiZW1haWwiOiJhbmRyZW1hcnF1ZXNAZ21haWwuY29tIiwiY3BmIjoiMjIyLDIyMiwyMjItMjIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUnVhIEpvYXF1aW0gRmVybmFuZGVzLCAyMTEsIDcxIC0gVmlsYSBOb2d1ZWlyYSIsImlhdCI6MTY0MTg1NDQ0M30.NGAp6nbdH24nsPQ9lQxUSd_zOpeQwB2sbbRHrkJ-EJs"
    const aaa = "rappi4A"
    const [restaurant, setRestaurant] = useState([])
    const [restaurantData, setRestaurantData] = useState("")
    const [address, setAddress] = useState()

    let total = 0
    useEffect(() => {
        getRestaurant()
        getAddress()
    }, [])

    const getRestaurant = () => {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/${aaa}/restaurants/1`, {
            headers: {
                auth: token,
            }
        })
        .then((res) => {
            console.log(res.data)
            setRestaurant(res.data.restaurant.products)
            setRestaurantData(res.data.restaurant)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }
    
    const getAddress = () => {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/${aaa}/profile/address`, {
            headers: {
                auth: token,
            }
        })
        .then((res) => {
            console.log(res.data.address)
            setAddress(res.data.address)
            
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    restaurant.forEach((rest) => {
        total = total + rest.price
    })
    
    const renderRestaurant = restaurant.map((rest) => {

        return(
            
        <DivItem key={rest.id}>
            <DivImage>
                <ImG src={rest.photoUrl} alt="rest.name"/>
            </DivImage>
            <DivDescription>
                <div>
                    <p>{rest.quantidade}</p>
                </div>
                <div>
                    <p>{rest.name}</p>
                    <p>{rest.description}</p>
                    <p>R${rest.price.toFixed(2)}</p>
                </div>
                <div>
                    <button>Remover</button>
                </div>
            </DivDescription>
        </DivItem>
        )
    })

 return(
  <DivMain>
      <DivHeader>
        <h3>Meu carrinho</h3>
      </DivHeader>

      <DivAdress>
        <p>Endereco de entrega</p>
        <p>{address && address.street}, {address && address.number}</p>
      </DivAdress>

      <DivRestaurant>
        <h5>{restaurantData.name}-</h5>
        <h5>{restaurantData.address}-</h5>
        <h5>{restaurantData.deliveryTime - 10}-{restaurantData.deliveryTime}min-</h5>
      </DivRestaurant>

      <DivItems>
        {renderRestaurant}
      </DivItems>

      <DivDelivery>
        <p>Frete R$ {restaurantData.shipping}</p>
      </DivDelivery>

      <DivSubTotal>
          <p>Subtotal</p>
          <p>RS{total.toFixed(2)}</p>
      </DivSubTotal>

      <DivPaymentMethods>

      </DivPaymentMethods>
  </DivMain>
 )
}