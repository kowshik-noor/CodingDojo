import React from 'react'
import { useParams } from 'react-router'

const StyledMessage = () => {
    const {smsg, txtClr, bgClr} = useParams()

    return (
        <h1 style={{color: `${txtClr}`, backgroundColor: `${bgClr}`}}>The { (isNaN(smsg)) ? 'word' : 'number' } is: {smsg}</h1>
    )
}

export default StyledMessage
