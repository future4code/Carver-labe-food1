import axios from "axios"
import { BASE_URL } from "../constants/url"

export const getActiveOrder = (setActiveOrder) => {
    axios.get(`${BASE_URL}active-order`, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((response) => {
            console.log(response.data.order)
            setActiveOrder(response.data.order)
        })
        .catch((error) => {
            console.log(error.data)
        })
}