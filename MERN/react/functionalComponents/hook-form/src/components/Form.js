import { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div>
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" onChange= {e => setFirstName(e.target.value)} />
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" onChange= {e => setLastName(e.target.value)} />
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" onChange= {e => setEmail(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" onChange= {e => setPassword(e.target.value)} />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input id="confirmPassword" type="password" onChange= {e => setConfirmPassword(e.target.value)} />
            </form>

            <div>
                <h2>Your Form Data</h2>
                <p>First Name {firstName}</p>
                <p>Last Name {lastName}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form