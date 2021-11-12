import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = (props) => {
    const { removeFromDom, products } = props

    return (
        <ul>
            {
                products.map((product, i) => 
                    <li key={i}>
                        <Link to={"/" + product._id}>{product.title}</Link>
                        |
                        <DeleteButton productId={product._id} success={() => removeFromDom(product._id)}></DeleteButton>
                    </li>
                )
            }
        </ul>
    )
}

export default ProductList
