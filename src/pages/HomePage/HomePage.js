import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage"

export default function HomePage() {
    useProtectedPage()
 return(
  <div>
   <h1>HomePage</h1>
  </div>
 )
}