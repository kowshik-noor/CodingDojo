import React, {useState} from 'react'

const BoxForm = props => {
    const [formInfo, setFormInfo] = useState({
        color: "",
        size: ""
    })

    const changeHandler = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewBox(formInfo)
        setFormInfo({
            color: "",
            size: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" id="color" onChange={changeHandler} value={formInfo.color}/>
                <label htmlFor="size">Size</label>
                <input type="number" name="size" id="size" onChange={changeHandler} value={formInfo.size}/>
                <button>Add</button>
            </form>
        </div>
    )
}


export default BoxForm
