import { useEffect } from 'react'
import { useNavigate } from 'react-router';

export const useProtectedPage = () =>{
  const history = useNavigate()

  useEffect(()=>{

    const token = localStorage.getItem('token');

    if(token === null) {
      console.log('Não está logado!')
      history('/login')
    }
  }, [])
}