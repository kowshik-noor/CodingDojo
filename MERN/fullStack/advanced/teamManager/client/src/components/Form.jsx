import React, { useState } from 'react'


const Form = (props) => {
    const {submitProp} = props

    const [formInfo, setFormInfo] = useState({
        name: "",
        position: "No preference"
    })

    const change = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        console.log(formInfo)
        submitProp(formInfo)
    }

    return (
        <form onSubmit={submit}>
            <label>Player Name: </label>
            <input type="text" name="name" onChange={change} />
            <p>{
                (formInfo.name.length < 2 && formInfo.name.length > 0) ?
                "Name must be at least 2 characters long" :
                    ""
            }
            </p>

            <label>Preferred Position (optional): </label>
            <input type="text" name="position" onChange={change}/>

            <button>Add</button>
        </form>
    )
}

export default Form
