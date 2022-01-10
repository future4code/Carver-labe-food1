import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToHomePage } from '../routes/coordinator'

const useUnprotectedPage = () => {
    const history = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToHomePage(history)
        }
    }, [history])
}

export default useUnprotectedPage