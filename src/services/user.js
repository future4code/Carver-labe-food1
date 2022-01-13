import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHomePage, goToSignAddressPage } from '../routes/coordinator'

/* token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEyZjFTZkdzSW1UYlBNSmZDYWdaIiwibmFtZSI6IkhhcnllbCBGZXJuYW5kZXMiLCJlbWFpbCI6ImhhcnllbGZuQGdtYWlsLmNvbSIsImNwZiI6IjQzNy4wMDMuMzQwLTM2IiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0MTk0NzQ3OX0._VK_cQfa1NWQHdfmr13eibRqmRFvSYLGsDusI7U2d8E"
user: {id: "a2f1SfGsImTbPMJfCagZ", name: "Haryel Fernandes", email: "haryelfn@gmail.com",…}
cpf: "437.003.340-36"
email: "haryelfn@gmail.com"
hasAddress: false
id: "a2f1SfGsImTbPMJfCagZ"
name: "Haryel Fernandes" */

export const login = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            if (res.data.user.hasAddress) {
                goToHomePage(history)
            } else {
                goToSignAddressPage(history)
            }
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
            alert(err.message)
        })
}

export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToSignAddressPage(history)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err.response.data)
        })
}

export const signAddress = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios.put(`${BASE_URL}address`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            setIsLoading(false)
            goToHomePage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data)
        })
}


export const updateProfile = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios.put(`${BASE_URL}profile`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            setIsLoading(false)
            goToHomePage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data)
        })
}
