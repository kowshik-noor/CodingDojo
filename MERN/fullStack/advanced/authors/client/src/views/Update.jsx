import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router'
import AuthorForm from '../components/AuthorForm'


const Update = () => {
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const [name, setName] = useState("")
    const {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setName(res.data.name)
            })
            .catch(err => console.error(err))
    }, [id])

    const updateAuthor = author => {
        axios.put("http://localhost:8000/api/authors/" + id, author)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => {
                const errRes = err.response.data.errors;
                const errArr = []

                for (const key of Object.keys(errRes)) {
                    errArr.push(errRes[key].message)
                }

                setErrors(errArr)
            })
    }

    return (
        <AuthorForm initialName={name} submitProp={updateAuthor}>
            <p>Edit this author</p>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
        </AuthorForm>
    )
}

export default Update
