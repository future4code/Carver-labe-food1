import { useEffect } from 'react'
import { Navigate } from 'react-router';

export const useProtectedPage = () =>{
  const history = Navigate()

  useEffect(()=>{

    const token = localStorage.getItem('token');

    if(token === null) {
      console.log('Não está logado!')
      history('/login')
    }
  }, [])
}