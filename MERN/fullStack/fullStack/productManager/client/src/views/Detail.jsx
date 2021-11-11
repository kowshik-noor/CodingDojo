import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <h1>{product.title}</h1>
            <p>${ product.price }</p>
            <p>{product.description}</p>
            <Link to={ `/${product._id}/edit` }>Edit</Link>
        </div>
    )
}

export default Detail
