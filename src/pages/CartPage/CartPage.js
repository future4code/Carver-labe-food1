import React, { useEffect, useState } from "react";
import axios from 'axios'
import { DivAdress, DivHeader, DivMain, DivRestaurant, DivItems, DivItem, DivImage, DivDescription, DivDelivery, DivSubTotal, DivPaymentMethods, ImG, Span1, Span2, Span3, Span4, Span5, Span6, Span7, Span8, Span9, DivButton, Button, DivScroll} from "./styled";

export default function CartPage() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklzTFl5UjlMNW5zemNHRGQ4bmlKIiwibmFtZSI6IkFuZHLDqSBNYXJxdWVzIiwiZW1haWwiOiJhbmRyZW1hcnF1ZXNAZ21haWwuY29tIiwiY3BmIjoiMjIyLDIyMiwyMjItMjIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUnVhIEpvYXF1aW0gRmVybmFuZGVzLCAyMTEsIDcxIC0gVmlsYSBOb2d1ZWlyYSIsImlhdCI6MTY0MTg1NDQ0M30.NGAp6nbdH24nsPQ9lQxUSd_zOpeQwB2sbbRHrkJ-EJs"
    const aaa = "rappi4A"
    const [restaurant, setRestaurant] = useState([])
    const [restaurantData, setRestaurantData] = useState("")
    const [address, setAddress] = useState()
    const [id, setId] = useState()
    const [paymentMethod, setPaymentMethod] = useState()

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

    // const placeOrder = () => {

    //     axios.post(`https://us-central1-missao-newton.cloudfunctions.net/${aaa}/restaurants/${id}/order`, {
    //         headers: {
    //             auth: token
    //         }
    //     })
    //     .then((res) => {
    //         console.log(res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err.response.data)
    //     })
    // }

    // const getActiveOrder = () => {


    //     axios.post(`https://us-central1-missao-newton.cloudfunctions.net/${aaa}/active-order`, {
    //         headers: {
    //             auth: token
    //         }
    //     })
    //     .then((res) => {
    //         console.log(res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err.response.data)
    //     })
    // }

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
                
                
                    <span>2</span>
                    <span>{rest.name}</span>
                    <span>{rest.description}</span>
                    <span>R${rest.price.toFixed(2)}</span>
                
                
                    <button>Remover</button>
                
            </DivDescription>
        </DivItem>
        )
    })

    const onChangePaymentMethods = (e) => {
        console.log(e.target.value)
        setPaymentMethod(e.target.value)
    }

 return(
  <DivMain>
      <DivHeader>
        <h3>Meu carrinho</h3>
      </DivHeader>

      <DivScroll>
        <DivAdress>
            <Span1>Endereco de entrega</Span1>
            <Span2>{address && address.street}, {address && address.number}</Span2>
        </DivAdress>

        <DivRestaurant>
            <Span3>{restaurantData.name}</Span3>
            <Span4>{restaurantData.address}</Span4>
            <Span5>{restaurantData.deliveryTime - 10} - {restaurantData.deliveryTime} min</Span5>
        </DivRestaurant>

        <DivItems>
            {renderRestaurant}
        </DivItems>

        <DivDelivery>
            <Span6>Frete R${restaurantData.shipping}</Span6>
        </DivDelivery>

        <DivSubTotal>
            <Span7>Subtotal</Span7>
            <Span8>RS{total.toFixed(2)}</Span8>
        </DivSubTotal>

        <DivPaymentMethods>
            <Span9>Forma de pagamento</Span9>

            <div>
                <input type="radio" defaultChecked name="checked" value="dinheiro" onChange={onChangePaymentMethods}/>
                <label>Dinheiro</label>
            </div>
            
            <div>
                <input type="radio" name="checked" value="cartao" onChange={onChangePaymentMethods}/>
                <label>Cartao de credito</label>
            </div>
        </DivPaymentMethods>

        <DivButton>
            <Button>Confirmar</Button>
        </DivButton>
      </DivScroll>
  </DivMain>
 )
}