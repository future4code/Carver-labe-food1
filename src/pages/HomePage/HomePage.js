import React, { useEffect, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
// import { GlobalContext } from '../../contexts/GlobalStateContext'
// import useRequestData from '../../hooks/useRequestData'
import { goToRestaurantPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/url'
import { CategoryContainer, MainContainer, Input } from "./styled";
import axios from "axios";
import { useNavigate } from 'react-router-dom'



export default function HomePage() {

    const [isLoading, setIsLoading] = useState(true)
    const [searchFor, setSearchFor] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const history = useNavigate()
    const [value, setValue] = React.useState(0);



    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2NDE4NTg2NjR9.h2sLzEO7-RUZNiVvQ0KKVbVszyoAVkif0-wONTehV94"

    const getRestaurants = () => {
        axios.get(`${BASE_URL}restaurants`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setRestaurants(response.data.restaurants)
                setIsLoading(false)
                console.log(response.data.restaurants)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getRestaurants()
    }, [])

    const onClickCard = (id) => {
        goToRestaurantPage(history, id)
    }

    const handleSearchBar = (event) => {
        setSearchFor(event.target.value)
    }

    const restaurantsList = restaurants && restaurants
        .filter((restaurant) => {
            return restaurant.name.includes(searchFor)
        })
        .map((restaurant) => {
            return <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                shipping={restaurant.shipping}
                deliveryTime={restaurant.deliveryTime}
                logoUrl={restaurant.logoUrl}
                onClick={() => onClickCard(restaurant.id)} />
        })


    return (
        <MainContainer>
            <p>Rappi4</p>
            < div >
                <Input
                    placeholder="Restaurante"
                    onChange={handleSearchBar}
                    value={searchFor}
                    variant="outlined"
                />
            </div>
            {restaurantsList}
        </MainContainer >
    )
}