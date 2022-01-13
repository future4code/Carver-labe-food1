import React from 'react'
import { OrderHistoryMainContainer, OrderHistoryItemContainer } from './styled'

export default function OrderHistoryItem() {

    // useEffect(() => {
    //     axios.get(url, {headers: {
    //         auth: token
    //     }})
    //     .then((res) => {
    //         setProfile(res.data.user)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }, [])

    return (
        <OrderHistoryMainContainer>
            <OrderHistoryItemContainer>
                <h1>Bullguer Vila Mariana</h1>
                <p>23 outubro 2021</p>
                <h2>SUBTOTAL R$ 67,00</h2>
            </OrderHistoryItemContainer>
        </OrderHistoryMainContainer>
    )
}
