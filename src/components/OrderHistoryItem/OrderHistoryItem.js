import React, { useEffect, useState } from 'react'
import { OrderHistoryMainContainer, OrderHistoryItemContainer } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { token } from '../../constants/tempTokenCesar'

export default function OrderHistoryItem() {
    const [orderHistory, setOrderHistory] = useState([])

    const url = `${BASE_URL}orders/history`

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                console.log(res.data.orders)
                setOrderHistory(res.data.orders)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    console.log(orderHistory)

    const renderHistory = orderHistory.map((order, index) => {
        return (
            <OrderHistoryMainContainer key={index}>
                <OrderHistoryItemContainer>
                    <h1>{order.restaurantName}</h1>
                    <p>{new Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'}).format(order.createdAt)}</p>
                    <h2>SUBTOTAL {order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                </OrderHistoryItemContainer>
            </OrderHistoryMainContainer>
        )
    })

    return (
        orderHistory && renderHistory
    )
}
