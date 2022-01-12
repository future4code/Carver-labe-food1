import React, { useEffect, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
// import { GlobalContext } from '../../contexts/GlobalStateContext'
// import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { CategoryContainer, MainContainer } from "./styled";
import axios from "axios";
import TextField from '@mui/material/TextField';

export default function HomePage() {

    const [isLoading, setIsLoading] = useState(true)
    const [searchFor, setSearchFor] = useState('')
    const [restaurants, setRestaurants] = useState([])


    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2NDE4NTg2NjR9.h2sLzEO7-RUZNiVvQ0KKVbVszyoAVkif0-wONTehV94"

    const getRestaurants = () => {
        axios.get(`${BASE_URL}restaurants`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                console.log(response.data.restaurants)
                setRestaurants(response.data.restaurants)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getRestaurants()
    }, [])


    const restaurantsList = restaurants && restaurants
        .filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(searchFor)
        })
        .map((restaurant) => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        })

    const categories = restaurants && restaurants.map((category) => {
        return <p key={category.id}>{category.category}</p>
    })

    const handleSearchBar = (event) => {
        setSearchFor(event.target.value)
    }


    return (
        <MainContainer>
            <p>Rappi4</p>
            < div >
                <TextField
                    placeholder="Restaurante"
                    onChange={handleSearchBar}
                    value={searchFor}
                    variant="outlined"
                />
            </div>
            <CategoryContainer>
            {categories}
            </CategoryContainer>
            {restaurantsList}
        </MainContainer >
    )
}