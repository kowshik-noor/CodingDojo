import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { playerId, success, children } = props
    
    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res => success())
            .catch(err => console.log(err))
    }

    return (
        <button onClick={deletePlayer}>
            {children}
        </button>
    )
}

export default DeleteButton
