import React, {useState} from 'react'
import AuthorForm from '../components/AuthorForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
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
        <AuthorForm initialName="" submitProp={createAuthor}>
            <p>Add a new author:</p>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
        </AuthorForm>
    )
}

export default Create
