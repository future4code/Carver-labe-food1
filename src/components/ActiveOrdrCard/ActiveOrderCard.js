import React from 'react'
import ClockIcon from '../../assets/clock.svg'
import { CardContainer, OrderContainer, ClockContainer } from './styled'

export default function ActiveOrderCard (props) {

    const {name, price, createdAt, expiresAt} = props

    return (
        <CardContainer>
            <ClockContainer>
            <img src={ClockIcon}/>
            </ClockContainer>
            <OrderContainer>
            <p>Pedido em andamento</p>
            <p>Habib's</p>
            <p>SUBTOTAL: R$59,00</p>
            </OrderContainer>
        </CardContainer>
    )
}