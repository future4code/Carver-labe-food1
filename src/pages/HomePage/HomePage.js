import React, { useContext, useEffect, useState } from "react"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import { GlobalContext } from '../../contexts/GlobalStateContext'
import {getRestaurants} from '../../services/restaurants'
import { BASE_URL } from '../../constants/url'
import { Input, MainContainer, InputContainer, PageTittleContainer, TittleNavContainer } from "./styled"
import SearchIcon from "../../assets/search.svg"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { goToRestaurantPage } from "../../routes/coordinator"
import CategoriesCarrossel from "../../components/CategoriesCarrossel/CategoriesCarrossel"
import LoadingCard from "../../components/Loading/LoadingCard"
import ActiveOrderCard from "../../components/ActiveOrdrCard/ActiveOrderCard"


export default function HomePage() {

    useProtectedPage()
    const [searchFor, setSearchFor] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const [categories, setCategories] = useState('')
    const [activeOrder, setActiveOrder] = useState([])
    const { states, setters } = useContext(GlobalContext)
    const history = useNavigate()
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2NDE4NTg2NjR9.h2sLzEO7-RUZNiVvQ0KKVbVszyoAVkif0-wONTehV94"

    useEffect(() => {
        getRestaurants(token, setRestaurants)
    }, [])


    // const getActiveOrder = () => {
    //     axios.get(`${BASE_URL}active-order`, {
    //         headers: {
    //             auth: token
    //         }
    //     })
    //     .then((response)=> {
    //         console.log(response.data.order)
    //         setActiveOrder(response.data.order)
    //     })
    //     .catch((error)=> {
    //         console.log(error.data)
    //     })
    // }
    // useEffect(()=> {
    //     getActiveOrder()
    // }, [])


    const onClickCard = (id) => {
        goToRestaurantPage(history, id)
    }

    const handleSearchBar = (event) => {
        setSearchFor(event.target.value)
    }

    const handleCategory = (value) => {
        setCategories(value)
    }

    const restaurantsList = restaurants && restaurants
        .filter((restaurant) => {
            return ((restaurant.name.toLowerCase().includes(searchFor) || restaurant.name.includes(searchFor)) && restaurant.category.includes(categories))
        })
        .map((restaurant) => {
            return <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                shipping={restaurant.shipping}
                deliveryTime={restaurant.deliveryTime}
                logoUrl={restaurant.logoUrl}
                onClickCard={() => onClickCard(restaurant.id)} />
        })

        // const renderOrder = activeOrder && activeOrder.map((order) => {
        //     return <ActiveOrderCard
        //         price={order.totalPrice}
        //         name={order.restaurantName}
        //         createdAt={order.createdAt}
        //         expiresAt={order.expiresAt}
        //         />
        // })

    return (
        <MainContainer>
            <PageTittleContainer>
                <TittleNavContainer>
                    Rappi4
                </TittleNavContainer>
            </PageTittleContainer>
            < InputContainer>
                <img src={SearchIcon} />
                <Input
                    placeholder="Restaurante"
                    onChange={handleSearchBar}
                    value={searchFor}
                />
            </InputContainer>
            <CategoriesCarrossel
                handleCategory={handleCategory}
            />
            {/* {restaurantsList.length > 0 ? restaurantsList : (<h4>"Nenhum restaurante encontrado</h4>)} */}
            {restaurantsList.length > 0 ? restaurantsList : <LoadingCard/>}
            {/* {renderOrder} */}
            <ActiveOrderCard/>
        </MainContainer >
    )
}