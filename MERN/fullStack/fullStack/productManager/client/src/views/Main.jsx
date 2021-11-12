import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const formInfo = {
        title: "",
        price: 0,
        description: ""
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>setProducts([...products, res.data]))
            .catch(err=>console.error(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm onSubmitProp={createProduct} initialFormInfo={formInfo}></ProductForm>
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main
