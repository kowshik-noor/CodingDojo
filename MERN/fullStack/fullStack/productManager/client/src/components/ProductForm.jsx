import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const changeHandler = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', formInfo)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" name="title" onChange={ changeHandler }/>
            
            <label>Price</label>
            <input type="number" name="price" onChange={changeHandler} />
            
            <label>Description</label>
            <textarea name="description" cols="30" rows="10" onChange={changeHandler}></textarea>

            <button>Create</button>
        </form>
    )
}

export default ProductForm
