import { useReducer } from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type] : action.payload
    }
}

const Content = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        })
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input type="text"
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Last Name:</span>{' '}
                    <input type="text"
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default Content
