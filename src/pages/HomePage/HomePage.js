import React, { useContext, useEffect, useState } from "react"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import useProtectedPage from '../../hooks/useProtectedPage'
// import { GlobalContext } from '../../contexts/GlobalStateContext'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { Input, MainContainer, InputContainer, PageTittleContainer, TittleNavContainer } from "./styled"
import SearchIcon from "../../assets/search.svg"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { goToRestaurantPage } from "../../routes/coordinator"
import CategoriesCarrossel from "../../components/CategoriesCarrossel/CategoriesCarrossel"

export default function HomePage() {

    useProtectedPage()
    const [searchFor, setSearchFor] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const [categories, setCategories] = useState('')
    const history = useNavigate()


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

    const handleCategory = (value) => {
        setCategories(value)
    }

    const restaurantsList = restaurants && restaurants
        .filter((restaurant) => {
            return (restaurant.name.toLowerCase().includes(searchFor) && restaurant.category.includes(categories))
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
            {/* <AppBar color="secondary">
                <Toolbar>
                    <Typography
                        sx={{ position: "relative", margin: "0 auto"}}
                        color="black"
                        component="div"
                        variant="h6"
                    >Rappi4</Typography>
                </Toolbar>
            </AppBar> */}
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
                    type="search"
                    id="standard-search"
                />
            </InputContainer>
            <CategoriesCarrossel
                handleCategory={handleCategory}
            />
            {restaurantsList.length > 0 ? restaurantsList : <h4>"Nenhum restaurante encontrado"</h4>}
        </MainContainer >
    )
}