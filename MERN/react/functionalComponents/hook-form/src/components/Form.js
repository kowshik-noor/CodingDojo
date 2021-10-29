import { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const handleFirstName = e => {
        setFirstName(e.target.value)
        if (e.target.value.length === 1 ) {
            setFirstNameError("First name must be at least 2 characters")
        } else {
            setFirstNameError(false)
        }
    }
    const handleLastName = e => {
        setLastName(e.target.value)
        if (e.target.value.length === 1 ) {
            setLastNameError("Last name must be at least 2 characters")
        } else {
            setLastNameError(false)
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value)
        if (e.target.value.length === 1 ) {
            setEmailError("Email must be at least 2 characters")
        } else {
            setEmailError(false)
        }
    }

    const handlePassword = e => {
        setPassword(e.target.value)
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError(false)
        }
    }

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password && e.target.value.length > 0) {
            setConfirmPasswordError("Passwords must match")
        } else {
            setConfirmPasswordError(false)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" onChange={handleFirstName} />
                {firstNameError ? <p>{firstNameError}</p> : ''}
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" onChange={handleLastName} />
                {lastNameError ? <p>{lastNameError}</p> : ''}
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" onChange={handleEmail} />
                {emailError ? <p>{emailError}</p> : ''}
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" onChange={handlePassword} />
                {passwordError ? <p>{passwordError}</p> : ''}
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input id="confirmPassword" type="password" onChange={handleConfirmPassword} />
                {confirmPasswordError ? <p>{confirmPasswordError}</p> : ''}
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