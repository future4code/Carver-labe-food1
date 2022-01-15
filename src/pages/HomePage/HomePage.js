import React, { useContext, useEffect, useState } from "react"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import { GlobalContext } from '../../contexts/GlobalStateContext'
import { getRestaurants } from '../../services/restaurants'
import { Input, MainContainer, InputContainer, PageTittleContainer, TittleNavContainer } from "./styled"
import SearchIcon from "../../assets/search.svg"
import { useNavigate } from 'react-router-dom'
import { goToRestaurantPage } from "../../routes/coordinator"
import CategoriesCarrossel from "../../components/CategoriesCarrossel/CategoriesCarrossel"
import LoadingCard from "../../components/Loading/LoadingCard"
import ActiveOrderCard from "../../components/ActiveOrdrCard/ActiveOrderCard"
import {getActiveOrder} from '../../services/order'


export default function HomePage() {
    useProtectedPage()
    const [searchFor, setSearchFor] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const [categories, setCategories] = useState('')
    const { states, setters } = useContext(GlobalContext)
    const [activeOrder, setActiveOrder] = useState({})
    const [showOrder, setShowOrder] = useState(false)
    const history = useNavigate()

    useEffect(()=> {
        getRestaurants(setRestaurants, setters.setIsLoading)
        getActiveOrder(setActiveOrder)
        states.cart.length === 0 && setters.setIdRestaurant(null)
    }, [])

    useEffect(() => {
        console.log(localStorage.getItem('expiration'))
        console.log(new Date().getTime())
        let myInterval = setInterval(() => {
            if (new Date().getTime() >= localStorage.getItem('expiration')) {
                setters.setVisibleActiveOrder(false)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    })


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
            {restaurantsList && restaurantsList.length > 0 ? restaurantsList : <LoadingCard />}

            {states.visibleActiveOrder && (
                <ActiveOrderCard order={activeOrder}/>)
            }
        </MainContainer >
    )
}