import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {authorId, success} = props

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => success(authorId))
            .catch(err => console.error(err))
    }

    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}

export default DeleteButton
