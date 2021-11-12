import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton'

const Update = (props) => {
    const history = useHistory()
    const {id} = useParams()
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err))
    }, [id])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialFormInfo={product}
                ></ProductForm>
            )}
            <DeleteButton productId={id} success={() => history.push("/")}></DeleteButton>
        </div>
    )
}

export default Update
