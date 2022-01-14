import axios from "axios"
import { BASE_URL } from "../constants/url"

export const getRestaurantDetail = (id, setRestaurant, token, getCategorys, setCategorys) => {
 axios.get(`${BASE_URL}restaurants/${id}`, {
  headers: {
   auth: token,
  }
 })
  .then((res) => {
   setRestaurant(res.data.restaurant)
   setCategorys(getCategorys(res.data.restaurant))
  })
  .catch((err) => {
   console.log(err.response)
  })
}

export const getRestaurants = (token, setRestaurants) => {
  axios.get(`${BASE_URL}restaurants`, {
      headers: {
          auth: token
      }
  })
      .then((response) => {
          setRestaurants(response.data.restaurants)
      })
      .catch((error) => {
          console.log(error)
      })


}

