import { useEffect, useState } from 'react'
import axios from 'axios'
import {token} from '../constants/tempTokenCesar'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])


  return (data)
}

export default useRequestData