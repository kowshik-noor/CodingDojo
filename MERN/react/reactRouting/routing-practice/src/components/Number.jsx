import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const { msg } = useParams()

    return (
        <h1>The { (isNaN(msg)) ? 'word' : 'number' } is: {msg}</h1>
    )
}

export default Number
