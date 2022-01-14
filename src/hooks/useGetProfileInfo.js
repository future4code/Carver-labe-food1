import axios from 'axios'
import { token } from '../constants/tempTokenCesar' //substituir por localstorage
import { BASE_URL } from '../constants/url'
import { GlobalContext } from '../contexts/GlobalStateContext'
import { useContext, useEffect } from 'react'

export const useGetProfileInfo = () => {

    const url = `${BASE_URL}profile`
    const { setters } = useContext(GlobalContext)

    useEffect(() => {
        setters.setIsLoading(true)
        axios.get(url, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setters.setProfile(res.data.user)
                setters.setIsLoading(false)
            })
            .catch((err) => {
                alert(err.response.data.message)
                setters.setIsLoading(false)
            })
    }, [])
}
