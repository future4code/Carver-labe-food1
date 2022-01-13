import React, { useEffect, useState, useContext } from 'react'
import { OrderHistoryMainContainer, OrderHistoryItemContainer } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { token } from '../../constants/tempTokenCesar'
import LoadingCard from '../Loading/LoadingCard'
import { GlobalContext } from '../../contexts/GlobalStateContext'

export default function OrderHistoryItem() {
    const [orderHistory, setOrderHistory] = useState([])
    const { states } = useContext(GlobalContext)
    const url = `${BASE_URL}orders/history`

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setOrderHistory(res.data.orders)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderHistory = orderHistory.map((order, index) => {
        return (
            <OrderHistoryMainContainer key={index}>
                {states.isLoading ? 
                <LoadingCard /> 
                :
                <OrderHistoryItemContainer>
                    <h1>{order.restaurantName}</h1>
                    <p>{new Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'}).format(order.createdAt)}</p>
                    <h2>SUBTOTAL {order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                </OrderHistoryItemContainer>
                }
            </OrderHistoryMainContainer>
        )
    })

    return (
        orderHistory ? renderHistory : 'Você não realizou nenhum pedido'
    )
}
