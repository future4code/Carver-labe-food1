import React, { useContext, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { GlobalContext } from '../../contexts/GlobalStateContext'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'

export default function HomePage() {

    const { isLoading, setIsLoading } = useContext(GlobalContext)
    const [searchFor, setSearchFor] = useState('')
    const restaurants = useRequestData([], `${BASE_URL}restaurants`)
    console.log(restaurants)


    const handleSearchBar = (event) => {
        setSearchFor(event.target.value)
    }

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
            <div>
                <input
                    placeholder="Pesquisar"
                    onChange={handleSearchBar}
                    valeu={searchFor}
                />
            </div>
            <h1>Restaurantes</h1>
            {restaurantsList}
        </div>
    )
}