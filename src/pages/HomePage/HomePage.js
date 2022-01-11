import React, { useContext } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import {GlobalContext} from '../../contexts/GlobalStateContext'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/url'

export default function HomePage() {

    const {isLoading, setIsLoading} = useContext(GlobalContext)
    const restaurants = useRequestData([], `${BASE_URL}restaurants`)

    console.log(restaurants)

    const restaurantsList = restaurants && restaurants.map((restaurant) => {
        return (
            <p>{restaurant.name}</p>
            // <RestaurantCard 
            //  key={restaurant.id}
            //  restaurant={restaurant}
            //  /> 
        )
    })

    return (
        <div>
            <h1>Restaurantes</h1>
            {restaurantsList}
        </div>
    )
}