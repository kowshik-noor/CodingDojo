import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const AuthorForm = (props) => {
    const { submitProp, children } = props
    const [name, setName] = useState("")

    useEffect(() => {
        setName(props.initialName)
    }, [props])
    
    const submitHandler = e => {
        e.preventDefault()
        submitProp({name})
    }

    return (
        <div>
            <Link to="/">Home</Link>
            {children}
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} />

                <Link to="/">Cancel</Link>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm
