import axios from "axios"
import { BASE_URL } from "../constants/url"

export const getRestaurantDetail = (id, setRestaurant, setProducts, getCategorys, token) => {
 axios.get(`${BASE_URL}restaurants/${id}`, {
  headers: {
   auth: token,
  }
 })
  .then((res) => {
   setRestaurant(res.data.restaurant)
   setProducts(getCategorys(res.data.restaurant.products, "category"))
  })
  .catch((err) => {
   console.log(err.response)
  })
}