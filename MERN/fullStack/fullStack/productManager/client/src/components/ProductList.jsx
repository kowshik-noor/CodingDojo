import React from 'react'

const ProductList = (props) => {
    return (
        <ul>
            {
                props.products.map((product, i) => 
                    <li><a key={i} href={ `/${product._id}` }>{ product.title }</a></li>
                )
            }
        </ul>
    )
}

export default ProductList
