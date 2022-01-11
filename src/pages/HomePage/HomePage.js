import React, { useContext } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import {GlobalContext} from '../../contexts/GlobalStateContext'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/url'

export default function HomePage() {

    const {isLoading, setIsLoading} = useContext(GlobalContext)
    const restaurants = useRequestData([], `${BASE_URL}restaurants`)
    console.log(restaurants)

    // const restaurantsList = restaurants && restaurants.map((restaurant)=>{
    //     <RestaurantCard key={restaurant.id}/> 
    // })
    return (
        <div>
            <h1>Retaurantes</h1>
            <RestaurantCard
            
            />
        </div>
    )
}