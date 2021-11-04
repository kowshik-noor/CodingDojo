import React, { useState } from 'react'

const Todo = () => {

    const [tasks, setTasks] = useState([])
    const [formInfo, setFormInfo] = useState({
        task: "",
        isComplete: false
    })

    const submitForm = e => {
        e.preventDefault()
        setTasks([...tasks, formInfo])
        setFormInfo({
            task: "",
            isComplete: false
        })
    }

    const changeHandler = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const completeTask = (e, index) => {
        const updatedTasks = tasks.map((t, i) => {
            if (i === index) {
                t.isComplete = !t.isComplete
                // // perform the below operation to avoid mutating the task directly
                // const updatedTask = { ...t, isComplete: !t.isComplete }
                // return updatedTask
            }
            return t
        })

        setTasks(updatedTasks)
    }
    
    const deleteTask = (e, index) => {
        const updatedTasks = tasks.filter((t, i) => index !== i)
        setTasks(updatedTasks)
    }


    return (
        <div>
            <form className="mb-5" onSubmit={ submitForm }>
                <div className="field">
                    <div className="control">
                        <input type="text" name="task" className="input" placeholder="Add a task" onChange={changeHandler} value={ formInfo.task }/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-info">Add</button>
                    </div>
                </div>
            </form>

            <ul>
                {
                    tasks.map((task, i) => {
                        return (
                            <li key={i} className="is-flex is-flex-direction-row is-align-items-center mb-3">
                                <label className="checkbox mr-5"><input type="checkbox" checked={task.isComplete} onChange={(e) => completeTask(e, i)} /> <span style={{ textDecoration: (task.isComplete) ? 'line-through' : '' }}>{task.task}</span></label>
                                <button className="button is-black" onClick={e => deleteTask(e, i)}>Delete</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todo
