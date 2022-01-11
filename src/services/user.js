import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHomePage } from '../routes/coordinator'

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToHomePage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToHomePage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}