import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router'
import AuthorForm from '../components/AuthorForm'
import { Link } from 'react-router-dom'


const Update = () => {
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const [name, setName] = useState("")
    const { id } = useParams()
    const [cantFind, setCantFind] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                if (res.data.error) {
                    setCantFind(true)
                } else {
                    setName(res.data.name)
                }
            })
            .catch(err => console.log(err))
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
        <>
            {
                (cantFind) ?
                <div>
                        <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
                        <Link to="/new">Yes Plz</Link>
                </div>
                :
                <AuthorForm initialName = { name } submitProp = { updateAuthor } >
                    <p>Edit this author</p>
                    {errors.map((err, i) => <p key={i}>{err}</p>)}
                </AuthorForm >
            }
        </>
    )
}

export default Update
