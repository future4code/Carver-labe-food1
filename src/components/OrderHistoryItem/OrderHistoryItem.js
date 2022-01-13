import React, { useState, useContext } from 'react'
import { OrderHistoryMainContainer, OrderHistoryItemContainer, BlankOrderHistoryContainer } from './styled'
import LoadingCard from '../Loading/LoadingCard'
import { useGetOrderHistory } from '../../hooks/useGetOrderHistory'
import { GlobalContext } from '../../contexts/GlobalStateContext'

export default function OrderHistoryItem() {
    const [orderHistory, setOrderHistory] = useState([])
    const { states } = useContext(GlobalContext)

    useGetOrderHistory(setOrderHistory)

    const renderHistory = orderHistory.map((order, index) => {
        return (
            <OrderHistoryMainContainer key={index}>
                {states.isLoading ? <LoadingCard /> : 
                orderHistory.length > 0 ? 
                <OrderHistoryItemContainer>
                    <h1>{order.restaurantName}</h1>
                    <p>{new Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'}).format(order.createdAt)}</p>
                    <h2>SUBTOTAL {order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                </OrderHistoryItemContainer>
                :
                <BlankOrderHistoryContainer>
                    <p>Você não realizou nenhum pedido</p>
                </BlankOrderHistoryContainer>
                }
            </OrderHistoryMainContainer>
        )
    })

    return (
        renderHistory
    )
}
