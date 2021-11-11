import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams()
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        description: ""
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setFormData(res.data))
            .catch(err => console.error(err))
    }, [id])

    const updateProduct = e => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/products/' + id, formData)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    const changeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <label>Title</label>
                <input type="text" value={formData.title} onChange={changeHandler} name="title" />
                
                <label>Price</label>
                <input type="number" name="price" value={formData.price} onChange={ changeHandler}/>

                <label>Description</label>
                <textarea name="description" onChange={changeHandler} cols="30" rows="10" value={formData.description}></textarea>
                
                <button>Update Product</button>
            </form>
        </div>
    )
}

export default Update
