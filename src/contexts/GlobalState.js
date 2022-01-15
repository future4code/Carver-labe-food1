import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";
import axios from 'axios'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([])
    const [profile, setProfile] = useState({})
    const [restaurant, setRestaurant] = useState({})
    const [idRestaurant, setIdRestaurant] = useState()
    const [categorys, setCategorys] = useState([])
    const [ visibleActiveOrder, setVisibleActiveOrder ] = useState(true)

    const states = { cart, isLoading, profile, restaurant, categorys, idRestaurant, visibleActiveOrder}
    const setters = { setCart, setIsLoading, setProfile, setRestaurant, setCategorys, setIdRestaurant, setVisibleActiveOrder }



    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;