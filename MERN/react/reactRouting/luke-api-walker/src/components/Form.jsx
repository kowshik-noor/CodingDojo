import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const cats = ['people', 'planets']

const Form = () => {
    const [cat, setCat] = useState(cats[0])
    const [id, setId] = useState(0)

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        if (!id) setId(0)
        history.push(`/${cat}/${id}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Search For:</label>
            <select value={cat} onChange={e => setCat(e.target.value)}>
                {cats.map((c, i) => 
                    <option key={i} value={c}>{c}</option>
                )}
            </select>

            <label>ID: </label>
            <input type="number" value={id} onChange={e => setId(e.target.value) }/>

            <button>Search</button>
        </form>
    )
}

export default Form;