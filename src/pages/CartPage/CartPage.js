import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import { GlobalContext } from "../../contexts/GlobalStateContext"
import { DivAdress, DivHeader, DivMain, DivRestaurant, DivItems, DivItem, DivImage, DivDescription, DivDelivery, DivSubTotal, DivPaymentMethods, ImG, Span1, Span2, Span3, Span4, Span5, Span6, Span7, Span8, Span9, DivButton, Button, DivScroll, SpanRest1, SpanRest2, SpanRest3, SpanRest4, ButtonRest, DivRadio, Span10} from "./styled";

export default function CartPage() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklzTFl5UjlMNW5zemNHRGQ4bmlKIiwibmFtZSI6IkFuZHLDqSBNYXJxdWVzIiwiZW1haWwiOiJhbmRyZW1hcnF1ZXNAZ21haWwuY29tIiwiY3BmIjoiMjIyLDIyMiwyMjItMjIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUnVhIEpvYXF1aW0gRmVybmFuZGVzLCAyMTEsIDcxIC0gVmlsYSBOb2d1ZWlyYSIsImlhdCI6MTY0MTg1NDQ0M30.NGAp6nbdH24nsPQ9lQxUSd_zOpeQwB2sbbRHrkJ-EJs"
    const aaa = "rappi4A"
    const [restaurantData, setRestaurantData] = useState("")
    const [address, setAddress] = useState()
    const [paymentMethod, setPaymentMethod] = useState()
    const [products, setProducts] = useState([{}])
    const [id, setId] = useState()
    const [quantity, setQuantity] = useState()
    const { states, setters, requests } = useContext(GlobalContext);

    let total = 0

    useEffect(() => {
        getRestaurant()
        getAddress()
    }, [])

    const newCart = localStorage.getItem("cart")
    const cart = JSON.parse(newCart)
    console.log(cart)

    // cart.forEach((item) => {
    //     const prod = [...products, {id: item.id, quantity: item.quantity}]
    //     setProducts(prod)
    // })
    // console.log(products)

    const getRestaurant = () => {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/${aaa}/restaurants/1`, {
            headers: {
                auth: token,
            }
        })
        .then((res) => {
            // setRestaurant(res.data.restaurant.products)
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
            setAddress(res.data.address)
            
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    const placeOrder = () => {

        // const body = {{
            
        // }
            
        //     paymentMethod: paymentMethod
        // }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/${aaa}/restaurants/1/order`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

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

    cart.forEach((rest) => {
        total += rest.quantity  * rest.price
    })
    
    const renderItem = cart.map((item) => {

        return(
            
        <DivItem key={item.id}>
            <DivImage>
                <ImG src={item.photoUrl} alt="item.name"/>
            </DivImage>
            <DivDescription>
                
                
                    <SpanRest1>{item.quantity}</SpanRest1>
                    <SpanRest2>{item.name}</SpanRest2>
                    <SpanRest3>{item.description}</SpanRest3>
                    <SpanRest4>{Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</SpanRest4>
                
                
                    <ButtonRest>Remover</ButtonRest>
                
            </DivDescription>
        </DivItem>
        )
    })

    const onChangePaymentMethods = (e) => {
        setPaymentMethod(e.target.value)
    }

    const deleteItemCart = () => {

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
            {renderItem}
        </DivItems>

        <DivDelivery>
            <Span6>Frete {Number(restaurantData.shipping).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Span6>
        </DivDelivery>

        <DivSubTotal>
            <Span7>SUBTOTAL</Span7>
            <Span8>{Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Span8>
        </DivSubTotal>

        <DivPaymentMethods>
            <Span9>Forma de pagamento</Span9>
            <Span10></Span10>
            <DivRadio>
                <input type="radio" defaultChecked name="checked" value="dinheiro" onChange={onChangePaymentMethods}/>
                <label>Dinheiro</label>
            </DivRadio>
            
            <DivRadio>
                <input type="radio" name="checked" value="cartao" onChange={onChangePaymentMethods}/>
                <label>Cartao de credito</label>
            </DivRadio>
        </DivPaymentMethods>

        <DivButton>
            <Button onClick={placeOrder}>Confirmar</Button>
        </DivButton>
      </DivScroll>
  </DivMain>
 )
}