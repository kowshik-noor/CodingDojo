import React, { useState } from 'react'

const ProductForm = (props) => {
    const {initialFormInfo, onSubmitProp} = props
    const [formInfo, setFormInfo] = useState({
        title: initialFormInfo.title,
        price: initialFormInfo.price,
        description: initialFormInfo.description
    })

    const changeHandler = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        onSubmitProp(formInfo)
        setFormInfo({
            title: "",
            price: 0,
            description: ""
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" name="title" onChange={changeHandler} value={formInfo.title}/>
            
            <label>Price</label>
            <input type="number" name="price" onChange={changeHandler} value={formInfo.price} />
            
            <label>Description</label>
            <textarea name="description" cols="30" rows="10" onChange={changeHandler} value={formInfo.description}></textarea>

            <button>Create</button>
        </form>
    )
}

export default ProductForm
