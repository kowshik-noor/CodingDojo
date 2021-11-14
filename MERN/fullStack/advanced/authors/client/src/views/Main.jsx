import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'

const Main = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.error(err))
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }


    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by: </p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i) =>
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={"/edit/" + author._id}>Edit</Link>
                                    <DeleteButton authorId={author._id} success={removeFromDom}></DeleteButton>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main
