import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
 const [data, setData] = useState(initialData)

 useEffect(() => {
  axios.get(url, {headers: {
    auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik84QTJEQkxFNHcyRUR3bkZLeWJ2IiwibmFtZSI6IkNlc2FyIEh1YmVyIiwiZW1haWwiOiJjZXNhci5odWJlckBnbWFpbC5jb20iLCJjcGYiOiIzNDUuMjE0LjQ5OC00MCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDE4NDExODJ9.dI6YxzHOm_yvmcGawCQA5_P39WUEky6jCqadlIBvhK8'
  }})
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