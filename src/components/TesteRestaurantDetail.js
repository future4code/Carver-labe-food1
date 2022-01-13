import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { token } from '../constants/tempTokenCesar'

export default function TesteRestaurantDetail() {

    const [ produtos, setProdutos ] = useState([])

    const url = `${BASE_URL}restaurants/9` 

    useEffect(() => {
        axios.get(url, {headers: {
            auth: token
        }})
        .then((res) => {
            setProdutos(res.data.restaurant.products)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const agruparProdutos = (objetoArray, propriedade) => {
        return objetoArray.reduce((acc, obj) => {
            let key = obj[propriedade];
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
          }, {});
    }

    const produtosAgrupados = agruparProdutos(produtos, 'category')

    const renderProdutos = Object.keys(produtosAgrupados).map((categoria, i) => {
        return <li key={i}><span>key: {i}, Name: {produtosAgrupados[categoria]}</span></li>
    })

    return (
        <div>
            {renderProdutos}
        </div>
    )
}


