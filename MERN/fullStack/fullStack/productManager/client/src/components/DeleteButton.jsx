import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { productId, success } = props
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => success())
            .catch(err => console.error(err))
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton
