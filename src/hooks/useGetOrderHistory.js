import axios from 'axios'
import { token } from '../constants/tempTokenCesar' //substituir por localstorage
import { BASE_URL } from '../constants/url'
import { useEffect, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalStateContext'

export const useGetOrderHistory = (setOrderHistory, setLoadingHistory) => {

    const url = `${BASE_URL}orders/history`
    const { setters } = useContext(GlobalContext)

    useEffect(() => {
        setters.setIsLoading(true)
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setOrderHistory(res.data.orders)
                setters.setIsLoading(false)
            })
            .catch((err) => {
                alert(err.response.data.message)
                setters.setIsLoading(false)
            })
    }, [])

}