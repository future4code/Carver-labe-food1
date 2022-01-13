import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHomePage, goToSignAdressPage } from '../routes/coordinator'

/* token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEyZjFTZkdzSW1UYlBNSmZDYWdaIiwibmFtZSI6IkhhcnllbCBGZXJuYW5kZXMiLCJlbWFpbCI6ImhhcnllbGZuQGdtYWlsLmNvbSIsImNwZiI6IjQzNy4wMDMuMzQwLTM2IiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0MTk0NzQ3OX0._VK_cQfa1NWQHdfmr13eibRqmRFvSYLGsDusI7U2d8E"
user: {id: "a2f1SfGsImTbPMJfCagZ", name: "Haryel Fernandes", email: "haryelfn@gmail.com",…}
cpf: "437.003.340-36"
email: "haryelfn@gmail.com"
hasAddress: false
id: "a2f1SfGsImTbPMJfCagZ"
name: "Haryel Fernandes" */

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            if (res.data.user.hasAddress){
                goToHomePage(history)
            } else {
                goToSignAdressPage(history)
            }
            setIsLoading(false)
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

export const signAdress = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.put(`${BASE_URL}address`, body,)
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
