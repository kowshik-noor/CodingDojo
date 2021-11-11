import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const { removeFromDom, products } = props
    
    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => removeFromDom(productId))
            .catch(err => console.error(err))
    }

    return (
        <ul>
            {
                products.map((product, i) => 
                    <li key={i}>
                        <Link to={"/" + product._id}>{product.title}</Link>
                        |
                        <button onClick={e => deleteProduct(product._id)}>Delete</button>
                    </li>
                )
            }
        </ul>
    )
}

export default ProductList
