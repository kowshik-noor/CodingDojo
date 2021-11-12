import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useHistory } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'

const Detail = (props) => {
    const history = useHistory()
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
            <Link to={`/${product._id}/edit`}>Edit</Link>
            <DeleteButton productId={product._id} success={() => history.push("/")}></DeleteButton>
        </div>
    )
}

export default Detail
